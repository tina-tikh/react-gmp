import * as React from 'react';
import { mount } from 'enzyme';

import { Movie, Page } from '../common';
import FilmDetails from './FilmDetails';

describe("<FilmDetails />", () => {
  const film: Movie = {
    "id": 447365,
    "title": "Guardians of the Galaxy Vol. 3",
    "tagline": "",
    "vote_average": 0,
    "vote_count": 9,
    "release_date": "2020-05-01",
    "poster_path": "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
    "overview": "The third film based on Marvel's Guardians of the Galaxy.",
    "budget": 0,
    "revenue": 0,
    "genres": ["Action", "Adventure", "Science Fiction"],
    "runtime": null
  };

  it("should be rendered", () => {
    const component = mount(<Page><FilmDetails film={film}/></Page>);
    expect(component).toMatchSnapshot();
  });
});
