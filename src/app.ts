import { IHandlerResult } from './interfaces/handlerResult';
import StockPrice from './services/StockPrice';

export const lambdaHandler = async (event: string): Promise<IHandlerResult> => {
    let response: IHandlerResult;
    try {
        const result = await StockPrice.getStockPrice(event);
        response = {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    } catch (error) {
        console.error(error);
        response = {
            statusCode: error.statusCode || 500,
            body: JSON.stringify({
                message: error.message,
            }),
        };
    }

    return response;
};
