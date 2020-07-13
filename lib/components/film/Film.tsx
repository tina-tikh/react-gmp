import * as React from 'react';
import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import { ActionBar, ActionBarCaption, Header, Main } from '../layout';
import { Movie } from '../../api';
import { AppState, getSelectedMovie, getSimilarMovies } from '../../store';
import FilmList from '../FilmList';
import FilmDetails from './FilmDetails';
import { LinkButton } from '../form';

interface FilmProps {
  similar: Movie[],
  similarTotal: number,
  movie: Movie,
}

type FilmState = {
  movieId: string
};

class Film extends Component<FilmProps, FilmState> {
  render(): ReactNode {
    return (
      <React.Fragment>
        <Header>
          <LinkButton onClick={() => this.handleBackToSearch()}>Back to search</LinkButton>
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

  handleBackToSearch(): void {
    history.back();
  }
}

const mapStateToProps = (state: AppState) => ({
  movie: getSelectedMovie(state),
  similar: getSimilarMovies(state),
  similarTotal: state.selectedMovie.similar.total
});

export default connect(
  mapStateToProps
)(Film);
