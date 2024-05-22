import { IConfig } from "../../../domain/model/IConfig";
import { IConfigService } from "../../../domain/services/IConfig.service";

export class ConfigService implements IConfigService {
    private config!: IConfig;

    public constructor() {}

    private async fetchConfig(): Promise<IConfig> {
        return fetch("/config.json")
            .then((res) => {
                return res.json();
            })
            .then((res: IConfig) => res);
    }

    public async init(): Promise<void> {
        this.config = await this.fetchConfig();
    }

    public getConfig(): IConfig {
        return this.config;
    }
}
