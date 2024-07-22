import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface CryptoState {
    data: any[];
    symbol: string;
    loading: boolean;
    error: string | null;
    symbols: string[];
}

const initialState: CryptoState = {
    data: [],
    symbol: 'bitcoin',
    loading: false,
    error: null,
    symbols: ['turbo', 'maga', 'layerzero', 'bebe', 'pepe', 'jupiter', 'bitcoin'],
};

export const fetchCryptoData = createAsyncThunk(
    'crypto/fetchCryptoData',
    async (symbol: string) => {
        const response = await axios.get(`http://localhost:5000/api/data?symbol=${symbol}`);
        return Array.isArray(response.data) ? response.data : [response.data];
    }
);

const priceSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        setSymbol: (state, action) => {
            state.symbol = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCryptoData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCryptoData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchCryptoData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    },
});

export const { setSymbol } = priceSlice.actions;
export const selectCryptoState = (state: any) => state.crypto;

export default priceSlice.reducer;
