import { lambdaHandler } from '../../app';
import { IHandlerResult } from '../../interfaces/handlerResult';
import StockPrice from '../../services/StockPrice';

describe('LambDaHandler', function () {
    it('should successfully return the response', async () => {
        const event = {
            company: 'MSFT',
        };

        const mockedResponse = {
            price: 250,
            company: 'MSFT',
        };

        const mock = jest.spyOn(StockPrice, 'getStockPrice').mockResolvedValue(mockedResponse);

        const result: IHandlerResult = await lambdaHandler(JSON.stringify(event));

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(JSON.stringify(mockedResponse));
        mock.mockRestore();
    });

    it('should throw an error if no proper company name', async () => {
        const event = {
            company: '',
        };

        const mockedResponse = {
            statusCode: 400,
            message: 'Please, provide a proper company name.',
        };

        const result: IHandlerResult = await lambdaHandler(JSON.stringify(event));

        expect(result.statusCode).toEqual(400);
        expect(result.body).toEqual(JSON.stringify({ message: mockedResponse.message }));
    });

    it('should throw an error if the API key is not set', async () => {
        process.env.FIN_API_KEY = '';
        const event = {
            company: 'MSFT',
        };

        const mockedResponse = {
            statusCode: 400,
            message: 'Please, set the API key.',
        };

        const result: IHandlerResult = await lambdaHandler(JSON.stringify(event));

        expect(result.statusCode).toEqual(400);
        expect(result.body).toEqual(JSON.stringify({ message: mockedResponse.message }));
    });

    it('should throw an unexpected error if no response is returned', async () => {
        const event = {
            company: 'MSFT',
        };

        const mockedResponse = {
            statusCode: 500,
            message: 'An unexpected error occurred.',
        };

        const mock = jest.spyOn(StockPrice, 'getStockPrice').mockRejectedValue(mockedResponse);

        const result: IHandlerResult = await lambdaHandler(JSON.stringify(event));

        expect(result.statusCode).toEqual(500);
        expect(result.body).toEqual(JSON.stringify({ message: mockedResponse.message }));

        mock.mockRestore();
    });
});
