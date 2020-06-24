import * as React from 'react';
import { Component, ReactNode } from 'react';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';

import { ActionBar, ActionBarCaption, Header, Main } from '../layout';
import FilmList from '../FilmList';
import { Movie, Movies } from '../../store/types';
import { thunkReceiveSimilarByGenre, thunkSelectMovie } from '../../thunks';
import { AppState } from '../../store';
import FilmDetails from './FilmDetails';

type FilmProps = {
  match: match<{ id: string }>;
  movies: Movies,
  movie: Movie,
  thunkReceiveSimilarByGenre: typeof thunkReceiveSimilarByGenre
  thunkSelectMovie: typeof thunkSelectMovie
};

type FilmState = {
  movieId: string
};

class Film extends Component<FilmProps, FilmState> {
  componentDidMount(): void {
    this.refresh();
  }

  componentDidUpdate(prevProps: Readonly<FilmProps>): void {
    const pathId = prevProps.match.params.id;
    const prevPathId = this.props.match.params.id;
    if (pathId !== prevPathId) {
      this.refresh()
    }
  }

  refresh() {
    const pathId = this.props.match.params.id;
    this.props.thunkSelectMovie(Number(pathId));

    const movie = this.props.movie;
    const genre: string = movie && movie.genres[0];

    this.props.thunkReceiveSimilarByGenre(genre);
  }

  render(): ReactNode {
    return (
      <React.Fragment>
        <Header>
          <FilmDetails film={this.props?.movie}/>
        </Header>
        <Main>
          <ActionBar>
            <ActionBarCaption>
              Films by {this.props?.movie?.genres[0]} genre
            </ActionBarCaption>
          </ActionBar>
          <FilmList films={this.props?.movies?.data}/>
        </Main>
      </React.Fragment>
    );
  }
}

const getMovieById = (state: AppState) => {
  const id = state.selectedMovie.movieId;
  return id && state.movies.data.find((movie) => movie.id === id);
};

const mapStateToProps = (state: AppState) => ({
  movies: state.selectedMovie.similar,
  movie: getMovieById(state)
});

export default connect(
  mapStateToProps,
  { thunkReceiveSimilarByGenre, thunkSelectMovie }
)(Film);
