import { IconConfig, Section } from "./IConfig";

export type SolutionsSection = SummaryConfig | DetailedConfig;

export interface SummaryConfig extends Section<"summary"> {
    titleBox: {
        title: string;
        subtitle?: string;
    };
    options: {
        image?: IconConfig;
        title: string;
        description: string;
    }[];
}

export interface DetailedConfig extends Section<"detailed"> {}

export type SolutionsConfig = {
    sections: SolutionsSection[];
};
