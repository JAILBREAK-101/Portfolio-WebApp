export type TProject = {
    id: string | number;
    name: string;
    description: string;
    techstack: string[];
    githublink: string;
    livelink: string;
    image: string;
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
