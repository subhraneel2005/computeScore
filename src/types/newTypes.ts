// Skill
export interface Skill {
    _id: string;
    skill: string;
    yearsOfExperience: number;
}

// Experience
export interface Experience {
    _id: string;
    positionTitle: string;
    company: string;
    location: string;
    experienceType: string;
    currentlyWorking: boolean;
    startMonth: string;
    startYear: number;
    endMonth: string;
    endYear: number;
    description: string;
}

// Education
export interface Education {
    _id: string;
    schoolName: string;
    major: string;
    degreeType: string;
    gpa: number;
    startMonth: string;
    startYear: number;
    endMonth: string;
    endYear: number;
    description: string;
}

// Project
export interface Project {
    _id: string;
    projectName: string;
    description: string;
    url: string;
    technologiesUsed: string[];
    startDate: string;
    endDate: string;
}

// Resume
export interface Resume {
    _id: string;
    userId: string;
    originalName: string;
    s3Url: string;
    isPrimary: boolean;
    skills: Skill[];
    experience: Experience[];
    education: Education[];
    projects: Project[];
    importantLinks: Record<string, string>;
}

// UserDetails
export enum Ethnicity {
    Asian = "Asian",
    Black = "Black",
    Hispanic = "Hispanic",
    White = "White",
    Other = "Other",
}

export enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other",
}

export interface UserDetails {
    firstName: string;
    lastName: string;
    email: string;
    currentLocation?: string;
    contact?: string;
    DOB?: string; // ISO format date string
    profilePicture?: string;
    github?: string;
    linkedin?: string;
    portfolio?: string;
    otherLink?: string;
    currentCTC?: number;
    expectedCTC?: number;
    visaStatus?: string;
    authorizedToWorkInUS?: boolean;
    requiresVisaSponsorship?: boolean;
    userEthnicity?: Ethnicity;
    disability?: boolean;
    LGBTQ?: boolean;
    gender?: Gender;
    isVeteran?: boolean;
    jobsToApplyDaily?: number;
}
