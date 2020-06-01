import * as React from 'react';
import { match } from 'react-router-dom';

import Header from '../common/components/Header';
import Main from '../common/components/Main';
import ActionBarCaption from '../common/components/ActionBarCaption';
import ActionBar from '../common/components/ActionBar';
import FilmList from '../common/components/FilmList';
import movies from '../movies.json';
import { Movie } from '../common/models/movie';
import FilmDetails from './FilmDetails';

type FilmProps = {
    match: match<{ id: string }>;
};

type FilmState = {
    movie: Movie;
    similar: Movie[];
};

class Film extends React.Component<FilmProps, FilmState> {
    render() {
        // todo: implement api calls
        const pathId = Number(this.props.match.params.id);
        const film = movies.data.find((movie: Movie) => movie.id === pathId);
        const genre = film.genres[0];
        const similar = movies.data;

        return (
            <React.Fragment>
                <Header>
                    <FilmDetails film={film} />
                </Header>
                <Main>
                    <ActionBar>
                        <ActionBarCaption>
                            Films by {genre} genre
                        </ActionBarCaption>
                    </ActionBar>
                    <FilmList films={similar} />
                </Main>
            </React.Fragment>
        );
    }
}

export default Film;
