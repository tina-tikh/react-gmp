import { ThunkAction } from "redux-thunk";

import { AppState, getSelectedMovie } from './store';
import {
  receiveMovies,
  receiveSimilarMovies,
  receiveMovie,
  updateMovie
} from './store/actions';
import { ActionTypes } from './store/types';
import { Movie, Movies, MovieService, SearchBy, SearchParams } from './api';

export const thunkReceiveMovies = (opts?: SearchParams): ThunkAction<void, AppState, null, ActionTypes> => async (dispatch, getState): Promise<void> => {
  const movies: Movies = await MovieService.getMovies(opts);
  dispatch(
    receiveMovies(movies)
  );
};

export const thunkReceiveSimilarByGenre = (genre: string): ThunkAction<void, AppState, null, ActionTypes> => async (dispatch, getState): Promise<void> => {
  const opts = {
    search: genre,
    searchBy: SearchBy.Genres
  };
  const movies: Movies = await MovieService.getMovies(opts);
  dispatch(
    receiveSimilarMovies(movies)
  );
};

export const thunkSelectMovie = (movieId: number): ThunkAction<void, AppState, null, ActionTypes> => async (dispatch, getState): Promise<void> => {
  dispatch(receiveMovie(movieId));

  const cachedMovie = getSelectedMovie(getState());

  if (!cachedMovie) {
    const movie: Movie = await MovieService.getMovie(movieId);
    dispatch(
      updateMovie(movie)
    );
  }
};
