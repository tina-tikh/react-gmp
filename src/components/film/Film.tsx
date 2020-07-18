import * as React from 'react';
import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { List, Record } from 'immutable';

import { ActionBar, ActionBarCaption, Header, Main } from '../layout';
import { thunkReceiveSimilarByGenre, thunkSelectMovie } from '../../thunks';
import { Movie } from '../../api';
import { AppState, getSelectedMovie, getSimilarMovies, getSimilarMoviesTotal } from '../../store';
import FilmList from '../FilmList';
import FilmDetails from './FilmDetails';
import { LinkButton } from '../form';

interface FilmProps extends RouteComponentProps<{ id: string }> {
  similar: List<Record<Movie>>,
  similarTotal: number,
  movie: Record<Movie>,
  thunkReceiveSimilarByGenre: typeof thunkReceiveSimilarByGenre
  thunkSelectMovie: typeof thunkSelectMovie
}

type FilmState = {
  movieId: string
};

const getGenre = (props: Readonly<FilmProps>) => props.movie?.getIn(['genres', 0]);

class Film extends Component<FilmProps, FilmState> {
  componentDidMount(): void {
    this.props.thunkSelectMovie(Number(this.props.match.params.id));
  }

  componentDidUpdate(prevProps: Readonly<FilmProps>): void {
    const getMovieId = (props: Readonly<FilmProps>) => props.match.params.id;

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
          <LinkButton onClick={() => this.handleBackToSearch()}>Back to search</LinkButton>
          <FilmDetails film={this.props.movie?.toJS() as Movie}/>
        </Header>
        <Main>
          <ActionBar>
            <ActionBarCaption>
              Films by {getGenre(this.props)} genre
            </ActionBarCaption>
          </ActionBar>
          <FilmList films={this.props.similar?.toJS()}/>
        </Main>
      </React.Fragment>
    );
  }

  handleBackToSearch(): void {
    this.props.history.goBack();
  }
}

const mapStateToProps = (state: AppState) => ({
  movie: getSelectedMovie(state),
  similar: getSimilarMovies(state),
  similarTotal: getSimilarMoviesTotal(state)
});

export default connect(
  mapStateToProps,
  { thunkReceiveSimilarByGenre, thunkSelectMovie }
)(Film);
