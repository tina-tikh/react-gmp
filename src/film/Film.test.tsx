import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { match } from 'react-router-dom';
import { mocked } from 'ts-jest/utils';

import Film from './Film';
import { MoviesQueryResponse, Page } from '../common';
import * as MovieService from "../common/api/movie-service";

jest.mock('react-router-dom');
jest.mock('../common/api/movie-service');

describe("<Film />", () => {
  const matchParams: match<{ id: string }> = {
    params: {
      id: '123',
    },
    isExact: false,
    path: '',
    url: ''
  };
  const movieResponse: MoviesQueryResponse = {
    data: [],
    total: 0
  };

  beforeEach(() => {
    mocked(MovieService).retrieveMovies.mockResolvedValue(Promise.resolve(movieResponse));
  });

  it("should be rendered", () => {
    const component = shallow(<Page><Film match={matchParams}/></Page>);
    expect(component).toMatchSnapshot();
  });

  it("should fetch corresponding movie", () => {
    const component = mount(<Page><Film match={matchParams}/></Page>);
    expect(component).toMatchSnapshot();
  });
});
