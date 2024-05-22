import { makeObservable, observable } from "mobx";
import { IStorageService } from "../../domain/services";
import { IConfigService } from "../../domain/services/IConfig.service";
import { HomepageProps, IConfig } from "../../domain/model/IConfig";

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

    public getPageProps(key: "home"): HomepageProps;
    public getPageProps(key: string): undefined;
    public getPageProps(key: string): HomepageProps | undefined {
        const page = this.getConfig().app.main.pages.find((p) => p.id === "home");
        return typeof page === "undefined" ? undefined : page.props;
    }
}
