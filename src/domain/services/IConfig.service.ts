import { IConfig } from "../model/config";

export interface IConfigService {
    init(): Promise<void>;
    getConfig(): IConfig;
}
