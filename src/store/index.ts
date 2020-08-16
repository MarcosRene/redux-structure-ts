import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga'; 
import { Middleware } from 'redux';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistorReducers from './persistorReducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

const store = createStore(persistorReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };