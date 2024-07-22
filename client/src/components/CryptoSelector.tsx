import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCryptoState, setSymbol } from '../store/priceSlice';

interface CryptoSelectorProps {
    onAdd: (symbol: string) => void;
}

const CryptoSelector: React.FC<CryptoSelectorProps> = ({ onAdd }) => {
    const dispatch = useDispatch();
    const { symbol } = useSelector(selectCryptoState);

    const hardcodedSymbols = [
        'turbo', 'maga', 'layerzero', 'bebe', 'pepe', 'jupiter', 'bitcoin'
    ];

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSymbol = event.target.value.toLowerCase();
        dispatch(setSymbol(selectedSymbol));
        onAdd(selectedSymbol);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Select a Cryptocurrency</h2>
            <select
                onChange={handleChange}
                value={symbol}
                className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {hardcodedSymbols.map((symbol) => (
                    <option key={symbol} value={symbol.toLowerCase()}>
                        {symbol.charAt(0).toUpperCase() + symbol.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CryptoSelector;
