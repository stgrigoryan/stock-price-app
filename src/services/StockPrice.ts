import axios from 'axios';
import * as dotenv from 'dotenv';

import { ApiKeyError } from '../common/errors/ApiKey';
import { BadRequestError } from '../common/errors/BadRequest';
import { UnexpectedError } from '../common/errors/Unexpected';

dotenv.config();

class StockPrice {
    public async getStockPrice(event: string) {
        const apiKey = process.env.FIN_API_KEY;
        if (!apiKey) {
            throw new ApiKeyError('Please, set the API key.');
        }
        const { company } = JSON.parse(event);
        if (!company) {
            throw new BadRequestError('Please, provide a proper company name.');
        }
        const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${company}&token=${apiKey}`);
        if (!response || !response.data?.c) {
            throw new UnexpectedError('An unexpected error occurred.');
        }
        return { price: response.data.c, company };
    }
}

export default new StockPrice();
