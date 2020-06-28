import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { moviesReducer, searchParamsReducer, selectedMovieReducer } from './reducers';
import { Persistor } from "redux-persist/es/types";

const rootReducer = combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
  searchParams: searchParamsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(): { store: Store, persistor: Persistor } {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  const persistor = persistStore(store);

  return { store, persistor };
}
