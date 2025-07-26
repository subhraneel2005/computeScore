import { allSkills, index, processedSkills } from "../utils/flexsearch.utils";

function generateNGrams(words: string[], maxLen = 3): string[] {
  const ngrams: string[] = [];

  for (let n = 1; n <= maxLen; n++) {
    for (let i = 0; i <= words.length - n; i++) {
      const gram = words.slice(i, i + n).join(" ");
      ngrams.push(gram);
    }
  }

  return ngrams;
}

function calculateJDScore(jobDetails: string) {
  if (typeof jobDetails !== "string") {
    throw new Error("jobDetails must be a string");
  }

  // Clean and tokenize job description
  const rawWords = jobDetails
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2); // remove short/common words

  // Generate unigrams, bigrams, trigrams
  const nGrams = generateNGrams(rawWords);

  const foundSkills = new Set<string>();
  const skillScores = new Map<string, number>();

  nGrams.forEach((phrase) => {
    const searchResults = index.search(phrase, { limit: 3 });

    searchResults.forEach((id) => {
      const originalSkill = allSkills[id as number];
      const processedSkill = processedSkills[id as number];

      if (
        phrase === processedSkill ||
        phrase.startsWith(processedSkill + " ") ||
        phrase.includes(" " + processedSkill + " ") ||
        phrase.endsWith(" " + processedSkill)
      ) {
        foundSkills.add(originalSkill);
        skillScores.set(
          originalSkill,
          Math.max(skillScores.get(originalSkill) || 0, 1)
        );
      }
    });
  });

  const skills = Array.from(foundSkills).sort(
    (a, b) => (skillScores.get(b) || 0) - (skillScores.get(a) || 0)
  );

  return {
    JDcount: skills.length,
    skills,
  };
}

export { calculateJDScore };
