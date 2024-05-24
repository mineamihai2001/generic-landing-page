import { makeObservable, observable } from "mobx";
import { IStorageService } from "../../domain/services";
import { IConfigService } from "../../domain/services/IConfig.service";
import { ContactConfig, HomepageConfig, IConfig, PageName } from "../../domain/model/config";

export class GlobalStore {
    public darkMode: boolean;

    public constructor(
        private readonly storageService: IStorageService,
        private readonly configService: IConfigService
    ) {
        this.darkMode =
            this.storageService.getItem("darkMode") === "true"
                ? true
                : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                ? true
                : false;

        makeObservable(this, {
            darkMode: observable,
        });
    }

    public async bootstrap(): Promise<void> {
        await this.configService.init();
    }

    public setDarkMode(darkMode: boolean) {
        this.darkMode = darkMode;

        this.storageService.setItem("darkMode", darkMode ? "true" : "false");
    }

    public getConfig(): IConfig {
        return this.configService.getConfig();
    }

    public getPageConfig(key: "home"): HomepageConfig;
    public getPageConfig(key: "contact"): ContactConfig;
    public getPageConfig(key: string): undefined;
    public getPageConfig(key: PageName | string): HomepageConfig | ContactConfig | undefined {
        const page = this.getConfig().app.main.pages.find((p) => p.id === key);
        return typeof page === "undefined" ? undefined : page.config;
    }
}
