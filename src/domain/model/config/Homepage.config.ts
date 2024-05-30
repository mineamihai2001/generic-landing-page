import { ButtonConfig, IconConfig, ImageConfig, Section } from "./IConfig";

export type RoadmapStep = {
    title: string;
    description: string;
    image?: string;
};

export type HomepageSection = LandingConfig | RoadmapConfig;

export interface LandingConfig extends Section<"landing"> {
    title: string;
    description?: string;
    buttons: ButtonConfig[];
    cover?: {
        image: ImageConfig;
    };
    cards?: {
        image: ImageConfig;
    }[];
    partners?: IconConfig[];
}

export interface RoadmapConfig extends Section<"roadmap"> {
    titleBox?: {
        title?: string;
        subtitle?: string;
        backgroundTitle?: string;
    };
    steps: RoadmapStep[];
}

export type HomepageConfig = {
    sections: HomepageSection[];
};
