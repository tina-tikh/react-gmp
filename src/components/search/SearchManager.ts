import * as H from 'history';

import { SearchBy, SearchParams, SortBy } from '../../api';

class SearchManager<T> {
  private location: H.Location<T>;
  private _queryParams: URLSearchParams;

  public set queryParams(q: string) {
    this._queryParams = new URLSearchParams(q);
  }

  public get queryParams(): string {
    return this._queryParams.toString();
  }

  constructor(location: H.Location<T>) {
    this.location = location;
    this.queryParams = location.search;
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
      sortBy: this._queryParams.get('sortBy') as SortBy || SortBy.Release,
    };
  }
}

export default SearchManager;
