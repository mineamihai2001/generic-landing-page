import { IConfig } from "../model/IConfig";

export interface IConfigService {
    init(): Promise<void>;
    getConfig(): IConfig;
}
