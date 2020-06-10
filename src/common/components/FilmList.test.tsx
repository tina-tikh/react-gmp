import * as React from 'react';
import { mount, shallow } from 'enzyme';

import FilmList from './FilmList';
import { Movie } from '../models';
import { Page } from './layout';

const films: Movie[] = [
  {
    id: 447365,
    title: 'Guardians of the Galaxy Vol. 3',
    tagline: '',
    vote_average: 0,
    vote_count: 9,
    release_date: '2020-05-01',
    poster_path:
      'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
    overview: "The third film based on Marvel's Guardians of the Galaxy.",
    budget: 0,
    revenue: 0,
    genres: ['Action', 'Adventure', 'Science Fiction'],
    runtime: null,
  },
  {
    id: 424785,
    title: 'Transformers 7',
    tagline: '',
    vote_average: 0,
    vote_count: 0,
    release_date: '2019-06-26',
    poster_path:
      'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
    overview: 'Plot unknown.',
    budget: 0,
    revenue: 0,
    genres: ['Science Fiction', 'Action', 'Adventure'],
    runtime: null,
  },
];

jest.mock('react-router-dom');

describe('<FilmList />', () => {
  it('should be rendered', () => {
    const component = shallow(<FilmList films={[]} />);
    expect(component).toMatchSnapshot();
  });

  it('should render passed films', () => {
    const component = mount(
      <Page>
        <FilmList films={films} />
      </Page>
    );
    expect(component.find('li').length).toEqual(films.length);
  });
});
