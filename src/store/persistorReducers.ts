import storage from 'redux-persist/lib/storage';
import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage,
      whitelist: ['auth']
    },
    reducers
  );

  return persistedReducer;
}