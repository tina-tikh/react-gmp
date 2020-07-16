// import {
//   initialMoviesState,
//   initialSelectedMovieState,
//   moviesReducer,
//   selectedMovieReducer
// } from './reducers';
// import {
//   receiveMovies,
//   receiveSimilarMovies,
//   selectMovie,
//   updateMovie
// } from './actions';
// import { ActionTypes, MoviesState } from './types';
// import { Movie, Movies } from '../api';
//
// describe('Reducers', () => {
//   const dumpAction: any = { type: '' };
//
//   describe('Movies reducer', () => {
//     it('should return the initial state', () => {
//       expect(moviesReducer(undefined, dumpAction)).toBe(initialMoviesState);
//     });
//
//     it('should handle MOVIES_RECEIVE', () => {
//       const movie = {
//         id: 123,
//         title: 'title'
//       } as Movie;
//       const movies: Movies = {
//         data: [movie],
//         total: 1
//       };
//       const action: ActionTypes = receiveMovies(movies);
//
//       expect(moviesReducer(initialMoviesState, action)).toEqual({
//         cache: {
//           [movie.id]: movie
//         },
//         search: {
//           total: movies.total,
//           moviesIds: [movie.id]
//         }
//       });
//     });
//
//     it('should handle MOVIE_UPDATE', () => {
//       const movie = {
//         id: 123
//       } as Movie;
//       const movies: MoviesState = {
//         cache: {
//           [movie.id]: movie
//         },
//         search: {
//           moviesIds: [movie.id],
//           total: 1
//         }
//       };
//
//       const newMovie = {
//         id: 123,
//         title: "New title"
//       } as Movie;
//       const action: ActionTypes = updateMovie(newMovie);
//       const newState = moviesReducer(movies, action);
//
//       expect(newState.cache[newMovie.id]).toEqual(newMovie);
//     });
//   });
//
//   describe('Selected movie reducer', () => {
//     it('should return the initial state', () => {
//       expect(selectedMovieReducer(undefined, dumpAction)).toEqual(initialSelectedMovieState);
//     });
//
//     it('should handle MOVIE_SELECT', () => {
//       const id = 123;
//       const action: ActionTypes = selectMovie(id);
//       const res = selectedMovieReducer(initialSelectedMovieState, action);
//
//       expect(res.movieId).toEqual(id);
//     });
//
//     it('should handle MOVIES_RECEIVE_SIMILAR', () => {
//       const movie = {
//         id: 123
//       } as Movie;
//       const movies: Movies = {
//         data: [movie],
//         total: 1
//       };
//       const action: ActionTypes = receiveSimilarMovies(movies);
//       const res = selectedMovieReducer(initialSelectedMovieState, action);
//
//       expect(res.similar).toEqual({
//         moviesIds: [movie.id],
//         total: movies.total
//       });
//     });
//   });
// });
