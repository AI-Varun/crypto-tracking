import axios from 'axios';
import CryptoModel from '../models/crypto';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/coins/';

const apiSymbols = [
    'maga', 'turbo', 'layerzero', 'bebe', 'pepe', 'jupiter', 'bitcoin'
];

const fetchAndStoreCryptoData = async () => {
    try {
        const promises = apiSymbols.map(symbol => axios.get(`${COINGECKO_API_URL}${symbol}`));

        const responses = await Promise.all(promises);

        for (const response of responses) {
            const data = response.data;
            const symbol = data.image.small;

            const newData = new CryptoModel({
                symbol: symbol,
                name: data.name,
                current_price: data.market_data.current_price.usd,
                high_24h: data.market_data.high_24h.usd,
                low_24h: data.market_data.low_24h.usd,
                price_change_percentage_24h: data.market_data.price_change_percentage_24h,
                created_at: new Date()
            });

            await newData.save();
        }
    } catch (error) {
        console.error('Error fetching and storing crypto data:', error);
    }
};

export default fetchAndStoreCryptoData;
