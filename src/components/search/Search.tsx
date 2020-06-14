import * as React from 'react';
import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import { Movies, SearchBy, SearchParams, SortBy } from '../../store/types';
import { AppState } from '../../store';
import { thunkReceiveMovies, thunkSetSearchQuery, thunkSetSearchBy, thunkSetSortBy } from '../../thunks';
import { ActionBar, ActionBarCaption, Header, Main, MainMessage } from '../layout';
import { ToggleGroup } from '../form';
import FilmList from '../FilmList';
import SearchBox from './SearchBox';
import SearchCaption from './SearchCaption';
import SearchHeader from './SearchHeader';

type SearchProps = {
  movies: Movies,
  searchParams: SearchParams,
  thunkSetSearchQuery: typeof thunkSetSearchQuery,
  thunkReceiveMovies: typeof thunkReceiveMovies,
  thunkSetSearchBy: typeof thunkSetSearchBy,
  thunkSetSortBy: typeof thunkSetSortBy
};

class Search extends Component<SearchProps> {
  componentDidMount(): void {
    this.props.thunkReceiveMovies();
  }

  render(): ReactNode {
    const movies = this.props.movies;
    const searchBy = this.props.searchParams.searchBy;
    const sortBy = this.props.searchParams.sortBy;
    return (
      <React.Fragment>
        <Header>
          <SearchHeader>
            <SearchCaption>Find your movie</SearchCaption>
            <SearchBox
              onSubmit={(e: string) => this.handleSubmit(e)}
            ></SearchBox>
            <ToggleGroup
              label="Search by"
              value={searchBy}
              values={Object.values(SearchBy)}
              valueLabels={Object.keys(SearchBy)}
              onChange={(e: string) => this.handleSearchByChange(e)}
            ></ToggleGroup>
          </SearchHeader>
        </Header>
        <Main>
          <ActionBar>
            <ActionBarCaption>{movies?.total} movie found</ActionBarCaption>
            <ToggleGroup
              label="Sort by"
              value={sortBy}
              values={Object.values(SortBy)}
              valueLabels={Object.keys(SortBy)}
              onChange={(e: string) => this.handleSortByChange(e)}
            ></ToggleGroup>
          </ActionBar>
          <FilmList films={movies?.data}/>
          {movies?.total === 0 && <MainMessage>No films found</MainMessage>}
        </Main>
      </React.Fragment>
    );
  }

  handleSearchByChange(searchByValue: string): void {
    this.props.thunkSetSearchBy(searchByValue as SearchBy);
  }

  handleSubmit(query: string): void {
    this.props.thunkSetSearchQuery(query);
  }

  handleSortByChange(sortByValue: string): void {
    this.props.thunkSetSortBy(sortByValue as SortBy);
  }
}

const mapStateToProps = (state: AppState) => ({
  movies: state.movies,
  searchParams: state.searchParams
});

export default connect(
  mapStateToProps,
  { thunkReceiveMovies, thunkSetSearchBy, thunkSetSortBy, thunkSetSearchQuery }
)(Search);
