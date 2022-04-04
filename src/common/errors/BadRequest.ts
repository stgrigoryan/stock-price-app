export class BadRequestError extends Error {
    constructor(message: string) {
        super(message);
    }
    statusCode = 400;
}
