import * as React from 'react';
import { Component, ReactNode } from 'react';
import { match } from 'react-router-dom';

import {
  ActionBar,
  ActionBarCaption,
  FilmList,
  Header,
  Main,
  Movie,
} from '../common';
import movies from '../common/api/movies-mock.json';
import FilmDetails from './FilmDetails';

type FilmProps = {
  match: match<{ id: string }>;
};

type FilmState = {
  movie: Movie;
  similar: Movie[];
};

class Film extends Component<FilmProps, FilmState> {
  render(): ReactNode {
    // todo: implement api calls
    const pathId = Number(this.props.match.params.id);
    const film = movies.data.find((movie: Movie) => movie.id === pathId);
    const genre = film.genres[0];
    const similar = movies.data;

    return (
      <React.Fragment>
        <Header>
          <FilmDetails film={film} />
        </Header>
        <Main>
          <ActionBar>
            <ActionBarCaption>Films by {genre} genre</ActionBarCaption>
          </ActionBar>
          <FilmList films={similar} />
        </Main>
      </React.Fragment>
    );
  }
}

export default Film;
