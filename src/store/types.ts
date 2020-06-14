export interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: null;
}

export interface Movies {
  data: Movie[];
  total: number;
}

export enum SearchBy {
  Title = 'title',
  Genres = 'genres'
}

export enum SortBy {
  'Release' = 'release_date',
  'Rating' = 'vote_average'
}

export interface SearchParams {
  search: string;
  searchBy: SearchBy;
  sortBy: SortBy;
}

export const MOVIES_RECEIVE = 'MOVIES_RECEIVE';
export const MOVIES_GET = 'MOVIES_GET';
export const SEARCH_QUERY_SET = 'SEARCH_QUERY_SET';
export const SEARCH_BY_SET = 'SEARCH_BY_SET';
export const SORT_BY_SET = 'SORT_BY_SET';

interface ReceiveMoviesAction {
  type: typeof MOVIES_RECEIVE;
  payload: Movies;
}

interface GetMoviesAction {
  type: typeof MOVIES_GET;
  payload: Movies
}

interface SetSearchQueryAction {
  type: typeof SEARCH_QUERY_SET;
  payload: string
}

interface SetSearchByAction {
  type: typeof SEARCH_BY_SET;
  payload: SearchBy;
}

interface SetSortByAction {
  type: typeof SORT_BY_SET;
  payload: SortBy;
}

export type ActionTypes = ReceiveMoviesAction | GetMoviesAction | SetSearchQueryAction | SetSearchByAction | SetSortByAction;
