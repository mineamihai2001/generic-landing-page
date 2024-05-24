import { IconConfig, Section } from "./IConfig";

export type ContactSection = FormConfig | SocialConfig;

export interface FormConfig extends Section<"form"> {
    title: string;
    description?: string;
    fields: {
        id: string;
        placeholder?: string;
        cols?: number;
        type?: "textarea" | "text";
    }[];
}

export interface SocialConfig extends Section<"social"> {
    text?: string;
    networks: {
        icon: IconConfig;
        url?: string;
        text: string;
    }[];
}

export type ContactConfig = {
    sections: ContactSection[];
};
