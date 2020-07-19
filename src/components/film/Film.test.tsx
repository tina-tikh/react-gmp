import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import thunk from 'redux-thunk';
import fetch from 'jest-fetch-mock';

import { MemoryRouter } from 'react-router';
import { renderWithTheme } from '../../../test';
import { initialSelectedMovieState } from '../../store/reducers';
import { Movie, Movies } from '../../api';
import Film from './Film';

/* eslint-disable react/jsx-props-no-spreading */

describe('<Film />', () => {
  let store: Store;
  const mockStore = configureStore([thunk]);
  const propsMock = {
    history: {} as any,
    location: {} as any,
    match: {
      params: {
        id: '123',
      },
    } as any,
  };

  const moviesResponseMock: Movies = { data: [], total: 0 };
  const movieMock: Movie = {
    id: 123,
    title: '',
    tagline: '',
    vote_average: 0,
    vote_count: 9,
    release_date: '1995-12-17T03:24:00',
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
      selectedMovie: initialSelectedMovieState,
    });

    fetch.resetMocks();
    fetch.doMock();
  });

  it('should render a film', async () => {
    fetch.mockResponse((req) => Promise.resolve(JSON.stringify(
      req.url.endsWith(propsMock.match.params.id) ? movieMock : moviesResponseMock,
    )));

    const { asFragment } = renderWithTheme(
      <MemoryRouter>
        <Provider store={store}><Film {...propsMock} /></Provider>
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
