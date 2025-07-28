import { Skill, Experience, Education, Project, Resume, UserDetails } from "./newTypes";

export interface UserData {
    userDetails: UserDetails;
    resumes: Resume[];
    skills: Skill[];
    experience: Experience[];
    education: Education[];
    projects: Project[];
}
