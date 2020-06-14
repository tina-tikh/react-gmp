import * as React from 'react';
import { match } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { mocked } from 'ts-jest/utils';

import { renderWithTheme } from '../../../test';
import { MovieService } from '../../api';
import Film from './Film';

jest.mock('react-router-dom');
jest.mock('../common/api/movie-service');

describe('<Film />', () => {
  // const matchParams: match<{ id: string }> = {
  //   params: {
  //     id: '123',
  //   },
  //   isExact: false,
  //   path: '',
  //   url: '',
  // };
  //
  // const moviesResponseMock: Movie[] = [];
  // const movieMock: Movie = {
  //   id: 123,
  //   title: '',
  //   tagline: '',
  //   vote_average: 0,
  //   vote_count: 9,
  //   release_date: '2020-05-01',
  //   poster_path: 'link',
  //   overview: '',
  //   budget: 0,
  //   revenue: 0,
  //   genres: ['Action', 'Adventure', 'Science Fiction'],
  //   runtime: null,
  // };

  // beforeEach(() => {
  //   mocked(MovieService).retrieveMovies.mockResolvedValue(moviesResponseMock);
  //   mocked(MovieService).getMovie.mockResolvedValue(movieMock);
  // });

  // it('should render a film', () => {
  //   const {asFragment} = renderWithTheme(<Film match={matchParams}/>);
  //   expect(asFragment()).toMatchSnapshot();
  // });
});
