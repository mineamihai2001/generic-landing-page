export type PageName = "home" | "contact";

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
    props: HomepageProps;
};

export type HomepageProps = {
    title: string;
    description?: string;
    buttons: ButtonConfig[];
    cards?: unknown[];
    partners?: IconConfig[];
};

export type ContactProps = {
    form: {
        title: string;
        description?: string;
        fields: {
            id: string;
            placeholder?: string;
            cols?: number;
            type?: "textarea" | "text";
        }[];
    };
    social: {
        icon: IconConfig;
        url?: string;
        text: string;
    }[];
};

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
