import * as React from 'react';
import {ReactNode} from 'react';

import {Movie} from '../models/movie';
import FilmCard from './FilmCard';
import styled from '../styled';

type FilmListProps = {
    films: Movie[];
}

const List = styled.ul`
    list-style-type: none;
    margin: 2rem;
    padding: 0;
`;

const ListItem = styled.li`
    display: inline-block;
`;

class FilmList extends React.Component<FilmListProps> {
    render(): ReactNode {
        return <List>
            {this.props.films.map((film: Movie) => <ListItem key={film.id}>
                <FilmCard film={film}/>
            </ListItem>)}
        </List>
    }
}

export default FilmList;
