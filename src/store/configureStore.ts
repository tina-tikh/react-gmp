import {
  applyMiddleware, combineReducers, createStore, Store,
} from 'redux';
import { Persistor } from 'redux-persist/es/types';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import { moviesReducer, selectedMovieReducer } from './reducers';

const rootReducer = combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export function configureStore(): { store: Store, persistor: Persistor } {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const persistConfig = {
    key: 'root',
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    composeWithDevTools(middleWareEnhancer),
  );
  const persistor = persistStore(store);

  return { store, persistor };
}
