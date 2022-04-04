export class ApiKeyError extends Error {
    constructor(message: string) {
        super(message);
    }
    statusCode = 400;
}
