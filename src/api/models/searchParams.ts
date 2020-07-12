export enum SearchBy {
  Title = 'title',
  Genres = 'genres'
}

export enum SortBy {
  'Release' = 'release_date',
  'Rating' = 'vote_average'
}

export interface SearchParams {
  search?: string;
  searchBy?: SearchBy;
  sortBy?: SortBy;
}
