import FlexSearch from "flexsearch";
import { allSkills } from "../data/skills.data";

const index = FlexSearch.create({
  tokenize: "strict",
  encode: "advanced",
  resolution: 1000,
  stemmer: false,
  optimize: true,
});

// Store lowercase + trimmed skills
const processedSkills = allSkills.map((skill) => skill.trim().toLowerCase());

// Add to index
processedSkills.forEach((skill, i) => {
  index.add(i, skill);
});

export { index, allSkills, processedSkills };
