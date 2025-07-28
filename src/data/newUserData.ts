import type { UserData } from "../types/newUserData";
import { Ethnicity, Gender } from "../types/newTypes";

const userData: UserData = {
    userDetails: {
        firstName: "Ashesh",
        lastName: "Bandopadhyay",
        email: "lbandopadhyay2@gmail.com",
        currentLocation: "New York, United States",
        contact: "+917001693312",
        DOB: "2003-05-15",
        profilePicture: "https://placehold.co/400x400/png0",
        github: "https://github.com/benedicti0n",
        linkedin: "https://linkedin.com/in/johndoe",
        portfolio: "https://johndoe.dev",
        otherLink: "https://behance.net/johndoe",
        currentCTC: 400000,
        expectedCTC: 600000,
        visaStatus: "H1B",
        authorizedToWorkInUS: true,
        requiresVisaSponsorship: false,
        userEthnicity: Ethnicity.Asian,
        disability: false,
        LGBTQ: false,
        gender: Gender.Male,
        isVeteran: false,
        jobsToApplyDaily: 5
    },
    skills: [
        { _id: "", skill: "TypeScript", yearsOfExperience: 1 },
        { _id: "", skill: "JavaScript", yearsOfExperience: 1 },
        { _id: "", skill: "Solidity", yearsOfExperience: 1 },
        { _id: "", skill: "React", yearsOfExperience: 1 },
        { _id: "", skill: "Node.js", yearsOfExperience: 1 },
        { _id: "", skill: "Next-Auth", yearsOfExperience: 1 },
        { _id: "", skill: "Hardhat", yearsOfExperience: 1 },
        { _id: "", skill: "NextJS", yearsOfExperience: 1 },
        { _id: "", skill: "ExpressJS", yearsOfExperience: 1 },
        { _id: "", skill: "Figma", yearsOfExperience: 1 },
        { _id: "", skill: "Prisma", yearsOfExperience: 1 },
        { _id: "", skill: "Redis", yearsOfExperience: 1 },
        { _id: "", skill: "PostgreSQL", yearsOfExperience: 1 },
        { _id: "", skill: "MongoDB", yearsOfExperience: 1 },
        { _id: "", skill: "Supabase", yearsOfExperience: 1 },
        { _id: "", skill: "Git", yearsOfExperience: 1 },
        { _id: "", skill: "GitHub", yearsOfExperience: 1 },
        { _id: "", skill: "Postman", yearsOfExperience: 1 },
        { _id: "", skill: "Docker", yearsOfExperience: 1 }
    ],
    education: [
        {
            _id: "",
            schoolName: "Institute Of Engineering and Management",
            degreeType: "BCA",
            major: "",
            gpa: 9.05,
            startMonth: "August",
            startYear: 2022,
            endMonth: "",
            endYear: 0,
            description: "Kolkata, India"
        },
        {
            _id: "",
            schoolName: "Janai Training High School",
            degreeType: "12th",
            major: "",
            gpa: 0,
            startMonth: "January",
            startYear: 2020,
            endMonth: "December",
            endYear: 2022,
            description: "Hooghly, India"
        }
    ],
    experience: [
        {
            _id: "",
            positionTitle: "MERN Stack Developer",
            company: "Euphoria GenX",
            location: "Kolkata, India",
            experienceType: "Internship",
            currentlyWorking: true,
            startMonth: "May",
            startYear: 2024,
            endMonth: "July",
            endYear: 2024,
            description:
                "Completed the BlogBox Blogging WebApp project. Led a team of 5, delegating tasks to different members. Mainly responsible for Team Management, and Frontend, partial Backend."
        }
    ],
    projects: [
        {
            _id: "",
            projectName: "Playtopia - Gaming Registration Portal",
            description:
                "Responsible for mostly the Frontend part. Used DaisyUI and Aceternity UI for some components. Frontend hosted on AWS EC2. And Backend on Vercel",
            url: "",
            technologiesUsed: ["React", "Express", "Node", "Tailwind", "MongoDB"],
            startDate: "",
            endDate: ""
        },
        {
            _id: "",
            projectName: "BlogBox - Blogging WebApp",
            description:
                "Led a team of 5 and completed the project. Used Clerk for authentication and Clerk Webhook for syncing MongoDB with ClerkDB. Used Redux ToolKit for state management. Used Cloudinary for storing the blog banners and user profile pictures.",
            url: "",
            technologiesUsed: [
                "React",
                "Express",
                "Node",
                "Tailwind",
                "MongoDB",
                "Clerk",
                "Cloudinary"
            ],
            startDate: "",
            endDate: ""
        },
        {
            _id: "",
            projectName: "Telegram No NSFW",
            description:
                "Made this project for Status Code 1 hackathon (36 Hours). Used Telegram API for scrapping messages and content. Used Google's Vertex AI for image processing to verify.",
            url: "",
            technologiesUsed: [
                "NextJS",
                "Supabase",
                "Telegram API",
                "Google Vertex AI",
                "SightEngine AI API"
            ],
            startDate: "",
            endDate: ""
        }
    ],
    resumes: [
        {
            _id: "resume_001",
            userId: "user_main_id",
            originalName: "Ashesh_Resume.pdf",
            s3Url:
                "https://github-live-wallpaper1.s3.ap-south-1.amazonaws.com/Ashesh_SinglePage_Resume.pdf",
            isPrimary: true,
            skills: [],
            experience: [],
            education: [],
            projects: [],
            importantLinks: {}
        },
        {
            _id: "resume_002",
            userId: "user_main_id1",
            originalName: "Subhraneel_goswami.pdf",
            s3Url:
                "https://github-live-wallpaper1.s3.ap-south-1.amazonaws.com/Subhraneel_Goswami.pdf",
            isPrimary: false,
            skills: [],
            experience: [],
            education: [],
            projects: [],
            importantLinks: {}
        }
    ]
};

export default userData;
