import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../store/store';
import '../app/globals.css';

const MyApp = ({ Component, pageProps }: any) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
        </PersistGate>
    </Provider>
);

export default MyApp;
