import * as React from 'react';

import { ActionBar, ActionBarCaption, FilmList, Header, Main, MainMessage, Movie, ToggleGroup } from '../common';
import movies from '../common/api/movies-mock.json';
import SearchBox from './SearchBox';
import SearchCaption from './SearchCaption';
import SearchHeader from './SearchHeader';

type SearchProps = unknown;
type SearchState = {
  searchByValue: string;
  sortByValue: string;
  searchResult: { data: Movie[]; total: number };
};

class Search extends React.Component<SearchProps, SearchState> {
  searchByOpts: string[] = ['Title', 'Genre'];
  sortByOpts: string[] = ['Release', 'Rating'];

  constructor(props: any) {
    super(props);
    this.state = {
      searchByValue: this.searchByOpts[0],
      sortByValue: this.sortByOpts[0],
      searchResult: movies,
    };
  }

  render() {
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
            <ActionBarCaption>{res.total} movie found</ActionBarCaption>
            <ToggleGroup
              label="Sort by"
              value={this.state.sortByValue}
              opts={this.sortByOpts}
              onChange={(e: string) => this.handleSortByChange(e)}
            ></ToggleGroup>
          </ActionBar>
          <FilmList films={res.data} />
          {res.total === 0 && <MainMessage>No films found</MainMessage>}
        </Main>
      </React.Fragment>
    );
  }

  handleSearchByChange(searchByValue: string) {
    this.setState({
      searchByValue,
    });
  }

  handleSortByChange(sortByValue: string) {
    this.setState({
      sortByValue,
    });
  }

  handleSubmit(e: string) {
    this.setState({
      searchResult: {
        data: [],
        total: 0,
      },
    });
  }
}

export default Search;
