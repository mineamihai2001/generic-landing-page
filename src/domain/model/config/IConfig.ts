import { ContactConfig } from "./Contact.config";
import { DiscoverConfig } from "./Discover.config";
import { HomepageConfig } from "./Homepage.config";

export type PageName = "home" | "contact" | "solutions" | "discover";

export type ButtonAction = {
    name: "navigate";
    to: string;
};

export type ButtonConfig = {
    text: string;
    color?: string;
    mode?: "outlined" | "contained";
    action?: ButtonAction;
};

export type IconConfig = {
    light: string;
    dark: string;
};

export type Page = {
    id: string;
    index?: boolean;
    display: string;
    navItem?: boolean;
    config?: HomepageConfig | ContactConfig | DiscoverConfig;
};

export interface Section<T extends string = any> {
    id: T;
    order?: number;
    separator: "before" | "after" | "all";
    show?: boolean;
}

export interface IConfig {
    app: {
        brand: {
            logo?: string;
            name: string;
        };
        main: {
            nav?: {
                buttons?: ButtonConfig[];
            };
            pages: Array<Page>;
        };
    };
}
