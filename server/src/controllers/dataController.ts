import { Request, Response } from 'express';
import CryptoModel from '../models/crypto';

export const getLatestData = async (req: Request, res: Response) => {
    try {
        const symbol = req.query.symbol;

        if (!symbol || typeof symbol !== 'string') {
            return res.status(400).json({ message: 'Symbol query parameter is required and must be a string' });
        }

        const formattedSymbol = symbol.charAt(0).toUpperCase() + symbol.slice(1).toLowerCase();

        const latestData = await CryptoModel.find({ name: formattedSymbol })
            .sort({ _id: -1 })
            .limit(20);

        res.status(200).json(latestData);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch data', error });
    }
};
