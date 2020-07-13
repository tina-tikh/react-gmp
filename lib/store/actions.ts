import {
  ActionTypes,
  MOVIE_RECEIVE,
  MOVIE_UPDATE,
  MOVIES_RECEIVE,
  MOVIES_RECEIVE_SIMILAR
} from './types';
import { Movie, Movies } from '../api';

export const receiveMovies = (movies: Movies): ActionTypes => ({
  type: MOVIES_RECEIVE,
  payload: movies
});

export const receiveMovie = (opt: number): ActionTypes => ({
  type: MOVIE_RECEIVE,
  payload: opt
});

export const updateMovie = (opt: Movie): ActionTypes => ({
  type: MOVIE_UPDATE,
  payload: opt
});

export const receiveSimilarMovies = (movies: Movies): ActionTypes => ({
  type: MOVIES_RECEIVE_SIMILAR,
  payload: movies
});
