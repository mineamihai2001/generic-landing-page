export class AppError extends Error {
    constructor(
        public readonly status: number = 500,
        public readonly statusText: string = "Internal Error",
        public readonly data: string = "Unknown",
        public readonly error: object = {}
    ) {
        super(statusText);
    }

    public toJson() {
        return {
            status: this.status,
            statusText: this.statusText,
            data: this.data,
            error: this.error,
        };
    }
}
