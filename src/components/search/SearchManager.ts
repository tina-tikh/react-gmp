import { Location } from 'history';

import { SearchBy, SearchParams, SortBy } from '../../api';

class SearchManager {
  private location: Location;

  private queryParamsBF: URLSearchParams;

  public set queryParams(q: string) {
    this.queryParamsBF = new URLSearchParams(q);
  }

  public get queryParams(): string {
    return this.queryParamsBF.toString();
  }

  constructor(location: Location) {
    this.location = location;
    this.queryParams = location.search;
  }

  setSearchBy(searchBy: SearchBy): void {
    this.queryParamsBF.set('searchBy', searchBy);
  }

  setSortBy(sortBy: SortBy): void {
    this.queryParamsBF.set('sortBy', sortBy);
  }

  setQuery(q: string): void {
    this.queryParamsBF.set('q', q);
  }

  getSearchParamsObj(): SearchParams {
    return {
      search: this.queryParamsBF.get('q'),
      searchBy: this.queryParamsBF.get('searchBy') as SearchBy || SearchBy.Title,
      sortBy: this.queryParamsBF.get('sortBy') as SortBy || SortBy.Release,
    };
  }
}

export default SearchManager;
