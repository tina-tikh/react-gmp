import { SearchBy, SearchParams, SortBy } from '../../api';

class SearchManager<T> {
  private _queryParams: URLSearchParams;

  constructor(params: SearchParams) {
    this._queryParams = new URLSearchParams({
      q: params.search,
      searchBy: params.searchBy,
      sortBy: params.sortBy
    });
  }

  setSearchBy(searchBy: SearchBy) {
    this._queryParams.set("searchBy", searchBy);
  }

  setSortBy(sortBy: SortBy) {
    this._queryParams.set("sortBy", sortBy);
  }

  setQuery(q: string) {
    this._queryParams.set("q", q);
  }

  getSearchParamsObj(): SearchParams {
    return {
      search: this._queryParams.get('q'),
      searchBy: this._queryParams.get('searchBy') as SearchBy || SearchBy.Title,
      sortBy: this._queryParams.get('sortBy') as SortBy || SortBy.Release
    };
  }

  getQueryString(): string {
    return this._queryParams.toString();
  }
}

export default SearchManager;
