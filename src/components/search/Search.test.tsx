import * as React from 'react';
import { mocked } from 'ts-jest/utils';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { renderWithTheme } from '../../../test';
import { MovieService } from '../../api';
import Search from './Search';

jest.mock('react-router-dom');
jest.mock('../common/api/movie-service');

describe('<Search />', () => {
  // const moviesResponseMock: Movie[] = [
  //   {
  //     id: 123,
  //     title: '',
  //     tagline: '',
  //     vote_average: 0,
  //     vote_count: 9,
  //     release_date: '',
  //     poster_path: 'link',
  //     overview: '',
  //     budget: 0,
  //     revenue: 0,
  //     genres: ['Action', 'Adventure', 'Science Fiction'],
  //     runtime: null,
  //   },
  // ];

  // beforeEach(async () => {
  //   mocked(MovieService).retrieveMovies.mockResolvedValue(moviesResponseMock);
  // });
  //
  // it('should render search', () => {
  //   const { asFragment } = renderWithTheme(<Search />);
  //   expect(asFragment()).toMatchSnapshot();
  // });
  //
  // it('should handle search query',  () => {
  //   const query = '123';
  //   const { getByText, getByPlaceholderText } = renderWithTheme(<Search />);
  //
  //   mocked(MovieService).searchBy.mockResolvedValue([]);
  //
  //   fireEvent.change(getByPlaceholderText('Search'), { target: { value: query } });
  //   fireEvent.click(getByText('Search'));
  //
  //   expect(getByText('No films found')).toBeInTheDocument();
  // });
  //
  // it('should handle search filter', () => {
  //   const { asFragment, getByText} = renderWithTheme(<Search />);
  //   fireEvent.click(getByText('Genre'));
  //   expect(asFragment()).toMatchSnapshot();
  // });
  //
  // it('should handle sort filter', () => {
  //   const { asFragment, getByText} = renderWithTheme(<Search />);
  //   fireEvent.click(getByText('Rating'));
  //   expect(asFragment()).toMatchSnapshot();
  // });
});
