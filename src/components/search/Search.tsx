import * as React from 'react';
import { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { List, Record } from 'immutable';

import { AppState, getSearchMovies, getSearchMoviesTotal } from '../../store';
import { thunkReceiveMovies } from '../../thunks';
import { Movie, SearchBy, SortBy } from '../../api';
import { ActionBar, ActionBarCaption, Header, Main, MainMessage } from '../layout';
import { ToggleGroup } from '../form';
import FilmList from '../FilmList';
import SearchBox from './SearchBox';
import SearchCaption from './SearchCaption';
import SearchHeader from './SearchHeader';
import SearchManager from './SearchManager';

interface SearchProps extends RouteComponentProps {
  movies: List<Record<Movie>>,
  total: number,
  thunkReceiveMovies: typeof thunkReceiveMovies
}

class Search extends Component<SearchProps> {
  private searchManager: SearchManager<unknown>;

  constructor(props: SearchProps) {
    super(props);
    this.searchManager = new SearchManager(props.location);
  }

  componentDidMount(): void {
    this.refresh();
  }

  componentDidUpdate(prevProps: Readonly<SearchProps>) {
    if (this.props.location !== prevProps.location) {
      this.refresh();
    }
  }

  render(): ReactNode {
    const params = this.searchManager.getSearchParamsObj();
    const total = this.props.total;
    const movies = this.props.movies.toJS();

    return (
      <React.Fragment>
        <Header>
          <SearchHeader>
            <SearchCaption>Find your movie</SearchCaption>
            <SearchBox searchValue={params.search}
                       onSubmit={(e: string) => this.handleSubmit(e)}
            ></SearchBox>
            <ToggleGroup
              label="Search by"
              value={params.searchBy}
              values={Object.values(SearchBy)}
              valueLabels={Object.keys(SearchBy)}
              onChange={(e: string) => this.handleSearchByChange(e)}
            ></ToggleGroup>
          </SearchHeader>
        </Header>
        <Main>
          <ActionBar>
            <ActionBarCaption>{total} movie found</ActionBarCaption>
            <ToggleGroup
              label="Sort by"
              value={params.sortBy}
              values={Object.values(SortBy)}
              valueLabels={Object.keys(SortBy)}
              onChange={(e: string) => this.handleSortByChange(e)}
            ></ToggleGroup>
          </ActionBar>
          <FilmList films={movies}/>
          {total === 0 && <MainMessage>No films found</MainMessage>}
        </Main>
      </React.Fragment>
    );
  }

  handleSearchByChange(searchByValue: string): void {
    this.searchManager.setSearchBy(searchByValue as SearchBy);
    this.applySearchParams();
  }

  handleSortByChange(sortByValue: string): void {
    this.searchManager.setSortBy(sortByValue as SortBy);
    this.applySearchParams();
  }

  handleSubmit(q: string): void {
    this.searchManager.setQuery(q);
    this.applySearchParams();
  }

  refresh(): void {
    const params = this.searchManager.getSearchParamsObj();
    this.props.thunkReceiveMovies(params);
  }

  applySearchParams(): void {
    this.props.history.push('/search?' + this.searchManager.queryParams);
  }
}

const mapStateToProps = (state: AppState) => ({
  movies: getSearchMovies(state),
  total: getSearchMoviesTotal(state)
});

export default connect(
  mapStateToProps,
  { thunkReceiveMovies }
)(Search);
