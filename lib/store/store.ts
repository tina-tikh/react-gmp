import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { moviesReducer, selectedMovieReducer } from './reducers';

const rootReducer = combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export function configureStore(initialState: any): Store {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
