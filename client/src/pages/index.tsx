import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoData, setSymbol, selectCryptoState } from '../store/priceSlice';
import PriceTable from '../components/PriceTable';
import CryptoSelector from '../components/CryptoSelector';
import Modal from '../components/Modal';
import { AppDispatch } from '../store/store';

const REFRESH_INTERVAL = 30 * 1000; // Refresh every 30 seconds

const HomePage = () => {
    const dispatch: AppDispatch = useDispatch();
    const { data, symbol, loading, error } = useSelector(selectCryptoState);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    useEffect(() => {
        dispatch(fetchCryptoData(symbol));

        const intervalId = setInterval(() => {
            dispatch(fetchCryptoData(symbol));
        }, REFRESH_INTERVAL);

        return () => clearInterval(intervalId);
    }, [dispatch, symbol]);

    const handleAddSymbol = (newSymbol: string) => {
        dispatch(setSymbol(newSymbol));
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Crypto Price Tracker</h1>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setIsModalOpen(true)}
            >
                Change Crypto
            </button>
            <PriceTable data={data} loading={loading} error={error} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <CryptoSelector onAdd={handleAddSymbol} />
            </Modal>
        </div>
    );
};

export default HomePage;
