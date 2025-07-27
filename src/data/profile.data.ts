import { UserData } from "../types/UserData"

const userData: UserData = {
    id: "user_001",
    userId: "user_main_id",
    firstName: "Ashesh",
    lastName: "Bandopadhyay",
    email: "lbandopadhyay2@gmail.com",
    currentLocation: "New York, United States",
    contact: "+917001693312",
    DOB: "2003-05-15",
    autofillPermission: true,
    agentModePermission: false,
    profilePicture: "https://placehold.co/400x400/png0",
    github: "https://github.com/benedicti0n",
    linkedin: "https://linkedin.com/in/johndoe",
    portfolio: "https://johndoe.dev",
    otherLink: "https://behance.net/johndoe",
    currentCTC: "400000",
    expectedCTC: "600000",
    noticePeriodDays: 7,
    // yearsOfExperience: 2,
    visaStatus: "H1B",
    authorizedToWorkInUS: true,
    userAthnicity: "asian",
    doYourRequireSponderVisa: false,
    disability: false,
    LGBTQ: false,
    gender: "male",
    veteran: "no",
    jobsToApplyDaily: 5,
    preferredJobs: ["preferred_job_001"],
    createdAt: "2025-07-01T10:00:00Z",
    updatedAt: "2025-07-06T18:00:00Z",
    skills: [
        {
            skill: "TypeScript",
            yearsOfExperience: 1
        },
        {
            skill: "JavaScript",
            yearsOfExperience: 1
        },
        {
            skill: "Solidity",
            yearsOfExperience: 1
        },
        {
            skill: "React",
            yearsOfExperience: 1
        },
        {
            skill: "Node.js",
            yearsOfExperience: 1
        },
        {
            skill: "Next-Auth",
            yearsOfExperience: 1
        },
        {
            skill: "Hardhat",
            yearsOfExperience: 1
        },
        {
            skill: "NextJS",
            yearsOfExperience: 1
        },
        {
            skill: "ExpressJS",
            yearsOfExperience: 1
        },
        {
            skill: "Figma",
            yearsOfExperience: 1
        },
        {
            skill: "Prisma",
            yearsOfExperience: 1
        },
        {
            skill: "Redis",
            yearsOfExperience: 1
        },
        {
            skill: "PostgreSQL",
            yearsOfExperience: 1
        },
        {
            skill: "MongoDB",
            yearsOfExperience: 1
        },
        {
            skill: "Supabase",
            yearsOfExperience: 1
        },
        {
            skill: "Git",
            yearsOfExperience: 1
        },
        {
            skill: "GitHub",
            yearsOfExperience: 1
        },
        {
            skill: "Postman",
            yearsOfExperience: 1
        },
        {
            skill: "Docker",
            yearsOfExperience: 1
        }
    ],
    education: [
        {
            institutionName: "Institute Of Engineering and Management",
            degree: "BCA",
            fieldOfStudy: null,
            gpa: "9.05",
            startDate: "2022-08-01T00:00:00.000Z",
            endDate: null,
            location: "Kolkata, India"
        },
        {
            institutionName: "Janai Training High School",
            degree: "12th",
            fieldOfStudy: null,
            gpa: null,
            startDate: "2020-01-01T00:00:00.000Z",
            endDate: "2022-12-31T23:59:59.999Z",
            location: "Hooghly, India"
        }
    ],
    experience: [
        {
            positionTitle: "MERN Stack Developer",
            company: "Euphoria GenX",
            location: "Kolkata, India",
            experienceType: "Internship",
            currentlyWorking: true,
            startMonth: "May",
            startYear: "2024",
            endMonth: "July",
            endYear: "2024",
            description:
                "Completed the BlogBox Blogging WebApp project. Led a team of 5, delegating tasks to different members. Mainly responsible for Team Management, and Frontend, partial Backend."
        }
    ],
    projects: [
        {
            projectName: "Playtopia - Gaming Registration Portal",
            description:
                "Responsible for mostly the Frontend part. Used DaisyUI and Aceternity UI for some components. Frontend hosted on AWS EC2. And Backend on Vercel",
            url: null,
            technologiesUsed: ["React", "Express", "Node", "Tailwind", "MongoDB"],
            startDate: null,
            endDate: null
        },
        {
            projectName: "BlogBox - Blogging WebApp",
            description:
                "Led a team of 5 and completed the project. Used Clerk for authentication and Clerk Webhook for syncing MongoDB with ClerkDB. Used Redux ToolKit for state management. Used Cloudinary for storing the blog banners and user profile pictures.",
            url: null,
            technologiesUsed: [
                "React",
                "Express",
                "Node",
                "Tailwind",
                "MongoDB",
                "Clerk",
                "Cloudinary"
            ],
            startDate: null,
            endDate: null
        },
        {
            projectName: "Telegram No NSFW",
            description:
                "Made this project for Status Code 1 hackathon (36 Hours). Used Telegram API for scrapping messages and content. Used Google's Vertex AI for image processing to verify.",
            url: null,
            technologiesUsed: [
                "NextJS",
                "Supabase",
                "Telegram API",
                "Google Vertex AI",
                "SightEngine AI API"
            ],
            startDate: null,
            endDate: null
        }
    ],
    Resume: [
        {
            id: "resume_001",
            userId: "user_main_id",
            originalName: "Ashesh_Resume.pdf",
            s3Url:
                "https://github-live-wallpaper1.s3.ap-south-1.amazonaws.com/Ashesh_SinglePage_Resume.pdf",
            isPrimary: true,
            extractedSkills: ["React", "Node.js", "MongoDB", "AWS"],
            parsedText: "",
            formattedResume: "<html>Formatted HTML version of resume</html>",
            heatmapimage: "https://example.com/heatmap.png",
            createdAt: "2025-07-02T08:30:00Z",
            updatedAt: "2025-07-02T08:30:00Z"
        },
        {
            id: "resume_002",
            userId: "user_main_id1",
            originalName: "Subhraneel_goswami.pdf",
            s3Url:
                "https://github-live-wallpaper1.s3.ap-south-1.amazonaws.com/Subhraneel_Goswami.pdf",
            isPrimary: false,
            extractedSkills: ["React", "Node.js", "MongoDB", "AWS"],
            parsedText: "",
            formattedResume: "<html>Formatted HTML version of resume</html>",
            heatmapimage: "https://example.com/heatmap.png",
            createdAt: "2025-07-02T08:30:00Z",
            updatedAt: "2025-07-02T08:30:00Z"
        }
    ],

    AppliedJob: [
        {
            id: "job_001",
            company: "Meta",
            description:
                "Frontend Engineer role focused on building scalable UIs.",
            job_url: "https://meta.com/careers/frontend-engineer",
            title: "Frontend Engineer",
            typeofjob: "Full-time",
            company_logo: "https://meta.com/logo.png",
            location: "Remote",
            salary: "160000 USD",
            currentStatus: "Interviewing",
            mongoid: "meta_001_mongo_id",
            createdAt: "2025-07-04T12:00:00Z",
            updatedAt: "2025-07-06T10:00:00Z",
            userId: "user_main_id"
        }
    ],

    PreferredJobs: [
        {
            id: "preferred_job_001",
            jobTitle: "Full Stack Developer",
            resumeId: "resume_001",
            experienceId: ["exp_001"],
            Education: ["edu_001"],
            createdAt: "2025-07-01T10:00:00Z",
            updatedAt: "2025-07-01T10:00:00Z"
        }
    ]
}

export default userData