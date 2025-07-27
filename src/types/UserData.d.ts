// src/types.ts

export interface Skill {
    skill: string
    yearsOfExperience: number
}

export interface Education {
    institutionName: string
    degree: string
    fieldOfStudy: string | null
    gpa: string | null
    startDate: string
    endDate: string | null
    location: string
}

export interface Experience {
    positionTitle: string
    company: string
    location: string
    experienceType: string
    currentlyWorking: boolean
    startMonth: string
    startYear: string
    endMonth: string | null
    endYear: string | null
    description: string
}

export interface Project {
    projectName: string
    description: string
    url: string | null
    technologiesUsed: string[]
    startDate: string | null
    endDate: string | null
}

export interface Resume {
    id: string
    userId: string
    originalName: string
    s3Url: string
    isPrimary: boolean
    extractedSkills: string[]
    parsedText: string
    formattedResume: string
    heatmapimage: string
    createdAt: string
    updatedAt: string
}

export interface AppliedJob {
    id: string
    company: string
    description: string
    job_url: string
    title: string
    typeofjob: string
    company_logo: string
    location: string
    salary: string
    currentStatus: string
    mongoid: string
    createdAt: string
    updatedAt: string
    userId: string
}

export interface PreferredJob {
    id: string
    jobTitle: string
    resumeId: string
    experienceId: string[]
    Education: string[]
    createdAt: string
    updatedAt: string
}

export interface UserData {
    id: string
    userId: string
    firstName: string
    lastName: string
    email: string
    currentLocation: string
    autofillPermission: boolean
    agentModePermission: boolean
    contact: string
    DOB: string
    profilePicture: string
    github: string
    linkedin: string
    portfolio: string
    otherLink: string
    currentCTC: string
    expectedCTC: string
    // yearsOfExperience: number
    noticePeriodDays: number
    visaStatus: string
    authorizedToWorkInUS: boolean
    userAthnicity: string
    doYourRequireSponderVisa: boolean
    disability: boolean
    LGBTQ: boolean
    gender: string
    veteran: "yes" | "no" | "prefer_not_to_say"
    jobsToApplyDaily: number
    preferredJobs: string[] // This is an array of IDs, not objects
    createdAt: string
    updatedAt: string
    skills: Skill[]
    education: Education[]
    experience: Experience[]
    projects: Project[]
    Resume: Resume[]
    AppliedJob: AppliedJob[]
    PreferredJobs: PreferredJob[] // This is an array of PreferredJob objects
}

// New type for a single unified education entry
export interface UnifiedEducation {
    institutionName: string
    degree: string
    fieldOfStudy: string | null
    gpa: string | null
    startDate: string // e.g., "YYYY-MM-DD" or "YYYY-MM"
    endDate: string | null // e.g., "YYYY-MM-DD" or "YYYY-MM"
    location: string
}

// New type for a single unified experience entry
export interface UnifiedExperience {
    positionTitle: string
    company: string
    location: string
    experienceType: string
    currentlyWorking: boolean
    startDate: string // e.g., "YYYY-MM"
    endDate: string | null // e.g., "YYYY-MM"
    description: string
}

// New type for a single unified project entry
export interface UnifiedProject {
    projectName: string
    description: string
    url: string | null
    technologiesUsed: string[]
    // You might want to include start/end dates if needed for forms
}

// Extending the UnifiedProfileData type to include nested arrays
export interface UnifiedProfileData {
    firstName: string
    lastName: string
    email: string
    contact: string
    currentLocation: string
    autofillPermission: boolean
    agentModePermission: boolean
    github: string
    linkedin: string
    portfolio: string
    jobTitle?: string // Optional as it comes from an array
    experienceType?: string // Optional as it comes from an array
    salaryExpectation: string
    gender: string
    visaStatus: string
    sponsorship: "Yes" | "No"
    authorizedToWork: "Yes" | "No"
    hasDisability: "Yes" | "No"
    isVeteran?: "Yes" | "No" // Optional as it can be undefined
    isLGBTQ: "Yes" | "No"

    // --- NEW ADDITIONS FOR COMPREHENSIVE DATA ---
    educationDetails: UnifiedEducation[]
    experienceDetails: UnifiedExperience[]
    skillsList: string[] // Just an array of skill names
    projectDetails: UnifiedProject[]
    resumeUrl?: string // S3 URL of the primary resume
}


export interface UniqueQuestion {
    question: string;
    selector: string;     // Selector for the input/textarea
    labelSelector?: string;// Selector for the label itself
    isRequired?: boolean;  // Is the field required?
}

export interface CommonQuestion {
    label: string;       // e.g., "First Name"
    selector: string;    // e.g., 'input[name="firstname"]'
    isFilled: boolean;   // Was the field successfully filled?
}