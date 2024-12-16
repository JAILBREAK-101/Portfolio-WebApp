import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export type TProject = {
    detailsLink: string;
    id: string | number;
    name: string;
    description: string;
    techstack: string[];
    githublink: string;
    livelink: string;
    image?: StaticImport;
    problemStatement: string;
    screenshots: StaticImageData[];
    gitHubHistory: {
        link: string,
        message: string,
        date: string,
    };
    phase: string;
    projectType: "design" | "web-app" | "website" | "mobile-app" | "custom-software";
    techIcons?: {},
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
