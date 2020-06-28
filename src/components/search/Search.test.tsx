import * as React from 'react';
import { Store } from 'redux';
import configureStore from 'redux-mock-store';
import { fireEvent, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import fetch from 'jest-fetch-mock';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router';

import { renderWithTheme } from '../../../test';
import { Movies, SearchBy, SortBy } from '../../api';
import Search from './Search';

describe('<Search />', () => {
  let store: Store;
  let renderResult: RenderResult;
  const mockStore = configureStore([thunk]);
  const moviesResponseMock: Movies = {
    data: [
      {
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
      },
    ],
    total: 1
  };
  const searchParamsMock: any = {};
  const searchLabels: string[] = Object.keys(SearchBy);
  const sortLabels: string[] = Object.keys(SortBy);
  const propsMock = {
    history: {
      push: jest.fn()
    } as any,
    location: {} as any,
    match: {} as any,
  }

  beforeEach(async () => {
    store = mockStore({
      movies: moviesResponseMock
    });

    store.dispatch = jest.fn();

    renderResult = renderWithTheme(<MemoryRouter>
      <Provider store={store}><Search {...propsMock}/></Provider>
    </MemoryRouter>);
  });

  it('should render search', () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchSnapshot();
  });

  it('should handle search query', () => {
    const query = '123';
    const { getByText, getByPlaceholderText } = renderResult;

    fireEvent.change(getByPlaceholderText('Search'), { target: { value: query } });
    fireEvent.click(getByText('Search'));

    expect(propsMock.history.push).toHaveBeenCalled();
  });

  it('should handle search filter', () => {
    fetch.mockResponseOnce(JSON.stringify(moviesResponseMock));
    const { asFragment, getByText } = renderResult;
    fireEvent.click(getByText(searchLabels[1]));
    expect(asFragment()).toMatchSnapshot();
  });

  it('should handle sort filter', () => {
    fetch.mockResponseOnce(JSON.stringify(moviesResponseMock));
    const { asFragment, getByText } = renderResult;
    fireEvent.click(getByText(sortLabels[1]));
    expect(asFragment()).toMatchSnapshot();
  });
});
