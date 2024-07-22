import mongoose, { Schema, Document } from 'mongoose';

interface ICrypto extends Document {
    symbol: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
    high_24h: number;
    low_24h: number;
    created_at: Date;
}

const cryptoSchema: Schema = new Schema({
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    current_price: { type: Number, required: true },
    price_change_percentage_24h: { type: Number, required: true },
    high_24h: { type: Number, required: true },
    low_24h: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
});

cryptoSchema.index({ symbol: 1, created_at: 1 }, { unique: true });

const CryptoModel = mongoose.model<ICrypto>('Crypto', cryptoSchema);

export default CryptoModel;
