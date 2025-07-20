import FlexSearch from "flexsearch";
import { allSkills } from "../data/skills.data";

// Create highly accurate search index
const index = FlexSearch.create({
  preset: "match", // Most accurate preset (strict + deep)
  tokenize: "strict", // Tokenize exactly
  encode: "advanced", // Case-insensitive, simple (or use "advanced" if needed)
  resolution: 1000, // More precise ranking
  optimize: true, // Enable internal optimizations
  matcher: {}, // Leave empty or add if you want custom synonym mapping
  stemmer: false, // Avoid stemming (keeps matches strict)
});

// Preprocess skills
const processedSkills = allSkills.map((skill) => {
  const cleaned = skill.replace(/['"]/g, "").trim().toLowerCase();

  if (cleaned.length > 50 || cleaned.includes(",")) {
    const parts = cleaned
      .split(/[,&\-\s]+/)
      .filter((part) => part.length > 2)
      .slice(0, 3);
    return parts.join(" ");
  }

  return cleaned;
});

// Add skills to the index
processedSkills.forEach((skill, i) => {
  index.add(i, skill);
});

export { index, allSkills, processedSkills };
