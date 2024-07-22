import express from 'express';
import mongoose from 'mongoose';
import router from './routes/index';
import fetchAndStoreCryptoData from './services/cryptoService';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.use('/api', router);

mongoose.connect('mongodb://localhost:27017/crypto')
    .then(() => console.log('Database connected'))
    .catch((error) => console.error('Database connection error:', error));

const startFetchingData = () => {
    console.log('Starting data fetch interval');
    fetchAndStoreCryptoData();

    setInterval(() => {
        console.log('Fetching and storing crypto data');
        fetchAndStoreCryptoData();
    }, 50000);
};

startFetchingData();

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
