import * as React from 'react';

import movies from '../movies.json';
import Header from '../common/components/Header';
import Main from '../common/components/Main';
import ToggleGroup from '../common/components/ToggleGroup';
import SearchBox from './SearchBox';
import ActionBar from '../common/components/ActionBar';
import {Movie} from '../common/models/movie';
import ActionBarCaption from '../common/components/ActionBarCaption';
import SearchCaption from './SearchCaption';
import FilmList from '../common/components/FilmList';
import SearchHeader from './SearchHeader';
import MainMessage from '../common/components/MainMessage';

type SearchProps = {}
type SearchState = {
    searchResult: { data: Movie[], total: number }
}

class Search extends React.Component<SearchProps, SearchState> {
    searchByOpts: string[] = ['Title', 'Genre'];
    sortByOpts: string[] = ['Release', 'Rating'];

    constructor(props: any) {
        super(props);
        this.state = {
            searchResult: movies
        };
    }

    render() {
        const res = this.state.searchResult;
        return <React.Fragment>
            <Header>
                <SearchHeader>
                    <SearchCaption>Find your movie</SearchCaption>
                    <SearchBox onSubmit={(e: string) => this.handleSubmit(e)}></SearchBox>
                    <ToggleGroup label="Search by"
                                 value="Title"
                                 opts={this.searchByOpts}
                                 onChange={(e: string) => this.handleSearchByChange(e)}>
                    </ToggleGroup>
                </SearchHeader>
            </Header>
            <Main>
                <ActionBar>
                    <ActionBarCaption>{res.total} movie found</ActionBarCaption>
                    <ToggleGroup label="Sort by"
                                 value="Release"
                                 opts={this.sortByOpts}
                                 onChange={(e: string) => this.handleSortByChange(e)}>
                    </ToggleGroup>
                </ActionBar>
                <FilmList films={res.data}>
                </FilmList>
                {
                    res.total === 0 && <MainMessage>No films found</MainMessage>
                }
            </Main>
        </React.Fragment>;
    }

    handleSearchByChange(e: string) {
        console.error("TODO: implement search by", e);
    }

    handleSortByChange(e: string) {
        console.error("TODO: implement sort by", e);
    }

    handleSubmit(e: string) {
        console.error("TODO: implement search", e);
        this.setState({
            searchResult: {
                data: [],
                total: 0
            }
        });
    }
}

export default Search;
