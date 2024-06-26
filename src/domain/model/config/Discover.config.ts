import { IconConfig, Section } from "./IConfig";

export type Project = {
    image?: string;
    name: string;
    subtitle?: string;
    description?: string;
    url?: string;
    labels: {
        text: string;
        icon: IconConfig 
    }[]
};

export type DiscoverSection = ProjectsConfig;

export interface ProjectsConfig extends Section<"projects"> {
    titleBox?: {
        title: string;
        backgroundTitle?: string;
    };
    projects: Project[];
}

export type DiscoverConfig = {
    sections: DiscoverSection[];
};
