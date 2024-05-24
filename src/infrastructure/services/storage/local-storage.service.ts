import { IStorageService } from "../../../domain/services";

export class LocalStorageService implements IStorageService {
    private storage: Storage;

    public constructor() {
        this.storage = localStorage;
    }

    public getItem(key: string): string | null {
        return this.storage.getItem(key);
    }

    public setItem(key: string, value: string): void {
        return this.storage.setItem(key, value);
    }
}
