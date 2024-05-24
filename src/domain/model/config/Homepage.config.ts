import { ButtonConfig, IconConfig, Section } from "./IConfig";

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
    cards?: unknown[];
    partners?: IconConfig[];
}

export interface RoadmapConfig extends Section<"roadmap"> {
    steps: RoadmapStep[];
}

export type HomepageConfig = {
    sections: HomepageSection[];
};

