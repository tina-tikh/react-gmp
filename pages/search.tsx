import * as React from 'react';

import { Search } from '../lib/components';
import { SearchBy, SearchParams, SortBy } from '../lib/api/models';
import { thunkReceiveMovies } from '../lib/thunks';
import { Store } from 'redux';

type SearchProps = {
  searchParams: SearchParams
}

const SearchPage = ({ searchParams }: SearchProps) => {
  return (
    <Search params={searchParams}></Search>
  );
}

type InitialSearchParams = {
  query: {
    q: string,
    searchBy: SearchBy,
    sortBy: SortBy
  },
  store: Store
}

SearchPage.getInitialProps = async ({query, store}: InitialSearchParams) => {
  const searchParams = {
    search: query.q || '',
    searchBy: query.searchBy || SearchBy.Title,
    sortBy: query.sortBy || SortBy.Release
  };
  await store.dispatch(thunkReceiveMovies(searchParams));
  return { searchParams };
}

export default SearchPage;
