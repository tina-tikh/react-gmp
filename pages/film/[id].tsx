import * as React from 'react';
import { thunkReceiveSimilarByGenre, thunkSelectMovie } from '../../lib/thunks';
import { Film } from '../../lib/components/film';
import { getSelectedMovie } from '../../lib/store';

const FilmPage = () => {
  return <Film></Film>;
}

FilmPage.getInitialProps = async ({query, store}: any) => {
  await store.dispatch(thunkSelectMovie(query.id));
  const movie = getSelectedMovie(store.getState());
  await store.dispatch(thunkReceiveSimilarByGenre(movie?.genres[0]));
  return {  };
}

export default FilmPage;