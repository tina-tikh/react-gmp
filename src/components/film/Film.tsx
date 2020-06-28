import * as React from 'react';
import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { ActionBar, ActionBarCaption, Header, Main } from '../layout';
import { thunkReceiveSimilarByGenre, thunkSelectMovie } from '../../thunks';
import { Movie } from '../../api';
import { AppState, getSelectedMovie, getSimilarMovies } from '../../store';
import FilmList from '../FilmList';
import FilmDetails from './FilmDetails';

interface FilmProps extends RouteComponentProps<{ id: string }> {
  similar: Movie[],
  similarTotal: number,
  movie: Movie,
  thunkReceiveSimilarByGenre: typeof thunkReceiveSimilarByGenre
  thunkSelectMovie: typeof thunkSelectMovie
}

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
          <FilmDetails film={this.props.movie}/>
        </Header>
        <Main>
          <ActionBar>
            <ActionBarCaption>
              Films by {this.props.movie?.genres[0]} genre
            </ActionBarCaption>
          </ActionBar>
          <FilmList films={this.props.similar}/>
        </Main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  movie: getSelectedMovie(state),
  similar: getSimilarMovies(state),
  similarTotal: state.selectedMovie.similar.total
});

export default connect(
  mapStateToProps,
  { thunkReceiveSimilarByGenre, thunkSelectMovie }
)(Film);
