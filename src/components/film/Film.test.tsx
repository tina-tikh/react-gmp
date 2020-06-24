import * as React from 'react';
import { match } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import fetch from 'jest-fetch-mock';

import { renderWithTheme } from '../../../test';
import { Movie, Movies } from '../../store/types';
import Film from './Film';
import thunk from 'redux-thunk';
import { initialSearchState, initialSelectedMovieState } from '../../store/reducers';

jest.mock('react-router-dom');

describe('<Film />', () => {
  let store: Store;
  const mockStore = configureStore([thunk]);
  const matchParams: match<{ id: string }> = {
    params: {
      id: '123',
    },
    isExact: false,
    path: '',
    url: '',
  };

  const moviesResponseMock: Movies = { data: [], total: 0 };
  const movieMock: Movie = {
    id: 123,
    title: '',
    tagline: '',
    vote_average: 0,
    vote_count: 9,
    release_date: '2020-05-01',
    poster_path: 'link',
    overview: '',
    budget: 0,
    revenue: 0,
    genres: ['Action', 'Adventure', 'Science Fiction'],
    runtime: null,
  };

  beforeEach(() => {
    store = mockStore({
      movies: moviesResponseMock,
      searchParams: initialSearchState,
      selectedMovie: initialSelectedMovieState
    });

    fetch.resetMocks();
    fetch.doMock();
  });

  it('should render a film', async () => {
    fetch.mockResponse((req) => Promise.resolve(JSON.stringify(
      req.url.endsWith(matchParams.params.id) ? movieMock : moviesResponseMock
    )));

    const { asFragment } = renderWithTheme(<Provider store={store}><Film match={matchParams}/></Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
