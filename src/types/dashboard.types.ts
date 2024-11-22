export type TProject = {
    detailsLink: string;
    id: string | number;
    name: string;
    description: string;
    techstack: string[];
    githublink: string;
    livelink: string;
    image: string;
    problemStatement: string;
    screenshots: string[];
    gitHubHistory: string[];
    phase: string;
    projectType: "design" | "web-app" | "website" | "mobile-app" | "custom-software";
}

export type TServices = {
    id: string;
    title: string;
    subtitle: string;
    tools: string[];
}

export type TResume = {
    id: string;
    name: string;
    role: string;
    companyname: string;
    duration: string;
    responsibilities: string[];
    projects: string[];
}
