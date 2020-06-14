import { ThunkAction } from "redux-thunk";

import { AppState } from './store';
import { receiveMovies, setSearchBy, setSearchQuery, setSortBy } from './store/actions';
import { ActionTypes, Movies, SearchBy, SortBy } from './store/types';
import { MovieService } from './api';

export const thunkReceiveMovies = (): ThunkAction<void, AppState, null, ActionTypes> => async (dispatch, getState): Promise<void> => {
  const opts = getState().searchParams;
  const movies: Movies = await MovieService.getMovies(opts);
  dispatch(
    receiveMovies(movies)
  );
};

export const thunkReceiveSimilarByGenre = (genre: string): ThunkAction<void, AppState, null, ActionTypes> => async (dispatch, getState): Promise<void> => {
  const searchParams = getState().searchParams;
  const opts = {
    search: genre,
    searchBy: SearchBy.Genres,
    sortBy: searchParams.sortBy
  };
  const movies: Movies = await MovieService.getMovies(opts);
  dispatch(
    receiveMovies(movies)
  );
};

export const thunkSetSearchQuery = (search: string): ThunkAction<void, AppState, null, ActionTypes> => async (dispatch, getState): Promise<void> => {
  dispatch(setSearchQuery(search));
  const opts = getState().searchParams;
  const movies: Movies = await MovieService.getMovies(opts);
  dispatch(
    receiveMovies(movies)
  );
};

export const thunkSetSearchBy = (searchBy: SearchBy): ThunkAction<void, AppState, null, ActionTypes> => async (dispatch, getState): Promise<void> => {
  dispatch(setSearchBy(searchBy));
  const opts = getState().searchParams;
  const movies: Movies = await MovieService.getMovies(opts);
  dispatch(
    receiveMovies(movies)
  );
};

export const thunkSetSortBy = (sortBy: SortBy): ThunkAction<void, AppState, null, ActionTypes> => async (dispatch, getState): Promise<void> => {
  dispatch(setSortBy(sortBy));
  const opts = getState().searchParams;
  const movies: Movies = await MovieService.getMovies(opts);
  dispatch(
    receiveMovies(movies)
  );
};
