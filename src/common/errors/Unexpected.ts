export class UnexpectedError extends Error {
    constructor(message: string) {
        super(message);
    }
    statusCode = 500;
}
