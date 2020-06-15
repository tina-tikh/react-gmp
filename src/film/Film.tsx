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
  MovieService,
} from '../common';
import FilmDetails from './FilmDetails';

type FilmProps = {
  match: match<{ id: string }>;
};

type FilmState = {
  movie: Movie;
  similar: Movie[];
  genre: string;
};

class Film extends Component<FilmProps, FilmState> {
  componentDidMount(): void {
    const pathId = Number(this.props.match.params.id);

    Promise.all([
      MovieService.getMovie(pathId),
      MovieService.getSimilarMovies(pathId)
    ])
      .then(([movie, similar]) => {
        this.setState({
          movie,
          similar,
          genre: movie && movie.genres[0],
        });
      });
  }

  render(): ReactNode {
    return (
      <React.Fragment>
        <Header>
          <FilmDetails film={this.state?.movie} />
        </Header>
        <Main>
          <ActionBar>
            <ActionBarCaption>
              Films by {this.state?.genre} genre
            </ActionBarCaption>
          </ActionBar>
          <FilmList films={this.state?.similar} />
        </Main>
      </React.Fragment>
    );
  }
}

export default Film;
