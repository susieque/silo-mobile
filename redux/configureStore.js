import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { packages } from './packages';

const config = {
    key: 'root',
    storage,
    debug: true
}

export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config,{
            packages
        }),
        // applyMiddleware(thunk, logger)
        applyMiddleware(thunk)
    );

    const persistor = persistStore(store);

    return { persistor, store };
};
