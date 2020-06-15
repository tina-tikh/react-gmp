import * as React from 'react';
import { Component, ReactNode } from 'react';

import {
  ActionBar,
  ActionBarCaption,
  FilmList,
  Header,
  Main,
  MainMessage,
  Movie,
  MovieService,
  ToggleGroup,
} from '../common';
import SearchBox from './SearchBox';
import SearchCaption from './SearchCaption';
import SearchHeader from './SearchHeader';

type SearchProps = unknown;
type SearchState = {
  searchByValue: string;
  sortByValue: string;
  searchResult: Movie[];
};

class Search extends Component<SearchProps, SearchState> {
  searchByOpts: string[] = ['Title', 'Genre'];
  sortByOpts: string[] = ['Release', 'Rating'];

  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchByValue: this.searchByOpts[0],
      sortByValue: this.sortByOpts[0],
      searchResult: [],
    };
  }

  componentDidMount(): void {
    MovieService.retrieveMovies().then((movies) => {
      this.setState({
        searchResult: movies,
      });
    });
  }

  render(): ReactNode {
    const res = this.state.searchResult;
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
              value={this.state.searchByValue}
              opts={this.searchByOpts}
              onChange={(e: string) => this.handleSearchByChange(e)}
            ></ToggleGroup>
          </SearchHeader>
        </Header>
        <Main>
          <ActionBar>
            <ActionBarCaption>{res?.length} movie found</ActionBarCaption>
            <ToggleGroup
              label="Sort by"
              value={this.state.sortByValue}
              opts={this.sortByOpts}
              onChange={(e: string) => this.handleSortByChange(e)}
            ></ToggleGroup>
          </ActionBar>
          <FilmList films={res} />
          {res?.length === 0 && <MainMessage>No films found</MainMessage>}
        </Main>
      </React.Fragment>
    );
  }

  handleSearchByChange(searchByValue: string): void {
    this.setState({
      searchByValue,
    });
  }

  handleSortByChange(sortByValue: string): void {
    MovieService.retrieveMovies().then((movies) => {
      this.setState({
        searchResult: movies,
      });
    });
    this.setState({
      sortByValue,
    });
  }

  handleSubmit(query: string): void {
    MovieService.searchBy(query).then((searchResult) => {
      this.setState({ searchResult: [] });
    });
  }
}

export default Search;
