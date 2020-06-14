import * as React from 'react';
import { Component, ReactNode } from 'react';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';

import { ActionBar, ActionBarCaption, Header, Main } from '../layout';
import FilmList from '../FilmList';
import { Movie, Movies } from '../../store/types';
import { MovieService } from '../../api';
import { thunkReceiveSimilarByGenre } from '../../thunks';
import { AppState } from '../../store';
import FilmDetails from './FilmDetails';

type FilmProps = {
  match: match<{ id: string }>;
  movies: Movies,
  thunkReceiveSimilarByGenre: typeof thunkReceiveSimilarByGenre
};

type FilmState = {
  movie: Movie;
  genre: string;
};

class Film extends Component<FilmProps, FilmState> {
  componentDidMount(): void {
    this.refresh();
  }

  componentDidUpdate(prevProps: Readonly<FilmProps>): void {
    const pathId = prevProps.match.params.id;
    const prevPathId = this.props.match.params.id;
    if (pathId !== prevPathId) {
      this.refresh();
    }
  }

  refresh() {
    const pathId = this.props.match.params.id;
    MovieService.getMovie(pathId)
      .then((movie) => {
        const genre: string = movie && movie.genres[0];

        this.props.thunkReceiveSimilarByGenre(genre);

        this.setState({
          movie,
          genre,
        });
      });
  }

  render(): ReactNode {
    return (
      <React.Fragment>
        <Header>
          <FilmDetails film={this.state?.movie}/>
        </Header>
        <Main>
          <ActionBar>
            <ActionBarCaption>
              Films by {this.state?.genre} genre
            </ActionBarCaption>
          </ActionBar>
          <FilmList films={this.props?.movies.data}/>
        </Main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  { thunkReceiveSimilarByGenre }
)(Film);
