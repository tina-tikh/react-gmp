import * as React from 'react';

import { styled } from '../theme';
import { Movie } from '../api';
import FilmCard from './FilmCard';

type FilmListProps = {
  films: Movie[];
};

const List = styled.ul`
  list-style-type: none;
  margin: 2rem;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline-block;
`;

const FilmList = ({ films }: FilmListProps) => (
  <List>
    {films?.map((film) => (
      <ListItem key={film.id}>
        <FilmCard film={film} />
      </ListItem>
    ))}
  </List>
);

export default FilmList;
