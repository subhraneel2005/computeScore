import Fuse from "fuse.js";
import { allSkills } from "../data/skills.data";

const fuse = new Fuse(allSkills, {
  includeScore: true,
  threshold: 0.6,
});

export { fuse };
