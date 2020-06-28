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
    this.props.thunkSelectMovie(Number(this.props.match.params.id));
  }

  componentDidUpdate(prevProps: Readonly<FilmProps>): void {
    const getMovieId = (props: Readonly<FilmProps>) => props.match.params.id;
    const getGenre = (props: Readonly<FilmProps>) => props.movie?.genres[0];

    if (getMovieId(this.props) !== getMovieId(prevProps)) {
      this.props.thunkSelectMovie(Number(getMovieId(this.props)));
    }

    if (getGenre(this.props) !== getGenre(prevProps)) {
      this.props.thunkReceiveSimilarByGenre(getGenre(this.props))
    }
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
