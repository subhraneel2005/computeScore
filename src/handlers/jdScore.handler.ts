import { allSkills, index, processedSkills } from "../utils/flexsearch.utils";

function calculateJDScore(jobDetails: string) {
  if (typeof jobDetails !== "string") {
    throw new Error("jobDetails must be a string");
  }

  // More sophisticated text preprocessing
  const words = jobDetails
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((word) => {
      // Filter out common words and very short words
      const commonWords = new Set([
        "the",
        "and",
        "or",
        "but",
        "in",
        "on",
        "at",
        "to",
        "for",
        "of",
        "with",
        "by",
        "an",
        "a",
        "is",
        "are",
        "was",
        "were",
        "be",
        "been",
        "have",
        "has",
        "had",
        "do",
        "does",
        "did",
        "will",
        "would",
        "could",
        "should",
        "may",
        "might",
        "must",
        "can",
      ]);
      return word.length > 2 && !commonWords.has(word);
    });

  const foundSkills = new Set();
  const skillScores = new Map();

  // Search with different strategies
  words.forEach((word) => {
    // Exact word search
    const exactResults = index.search(word, {
      limit: 3,
    });

    exactResults.forEach((id) => {
      const skillIndex = id;
      const originalSkill = allSkills[skillIndex as number];
      const processedSkill = processedSkills[skillIndex as number];

      // Calculate relevance score
      let score = 1;

      // Only add skills with decent relevance
      if (score >= 5) {
        foundSkills.add(originalSkill);
        skillScores.set(
          originalSkill,
          Math.max(skillScores.get(originalSkill) || 0, score)
        );
      }
    });

    // Also try phrase matching for multi-word skills
    if (word.length > 4) {
      const phraseResults = index.search(word, {
        limit: 2,
      });

      phraseResults.forEach((id) => {
        const originalSkill = allSkills[id as number];
        if (originalSkill.toLowerCase().includes(word)) {
          foundSkills.add(originalSkill);
          skillScores.set(
            originalSkill,
            Math.max(skillScores.get(originalSkill) || 0, 1.5)
          );
        }
      });
    }
  });

  // Convert to array and sort by relevance
  const skills = Array.from(foundSkills).sort(
    (a, b) => (skillScores.get(b) || 0) - (skillScores.get(a) || 0)
  );
  return {
    JDcount: skills.length,
    skills: skills.slice(0, 50),
  };
}
export { calculateJDScore };
