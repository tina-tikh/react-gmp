import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Movie } from '../models';
import { styled } from '../theme';

type FilmListProps = {
  films: Movie[];
};
type FilmCardProps = {
  film: Movie;
};

const FilmLink = styled(Link)`
  display: inline-block;
  width: 26rem;
  height: 50rem;
  margin: 4rem 3rem;
  color: ${(props) => props.theme.colors.light};
  text-decoration: none;

  &:active,
  &:visited {
    color: ${(props) => props.theme.colors.light};
  }
`;

const Poster = styled.img`
  height: 40rem;
`;

const Info = styled.span`
  display: block;
`;

const Title = styled.span`
  display: block;
  font-size: 1.4rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 70%;
  overflow: hidden;
`;
const Year = styled.span`
  float: right;
  display: block;
  font-size: 1.4rem;
`;

class FilmCard extends Component<FilmCardProps> {
  render(): ReactNode {
    return (
      <FilmLink to={`/film/${this.props.film.id}`}>
        <Poster src={this.props.film.poster_path} />
        <Info>
          <Year>{this.getYear(this.props.film.release_date)}</Year>
          <Title>{this.props.film.title}</Title>
          <span>{this.props.film.genres[0]}</span>
        </Info>
      </FilmLink>
    );
  }

  getYear(date: string): number {
    return new Date(date).getFullYear();
  }
}

const List = styled.ul`
  list-style-type: none;
  margin: 2rem;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline-block;
`;

class FilmList extends Component<FilmListProps> {
  render(): ReactNode {
    return (
      <List>
        {this.props.films?.map((film: Movie) => (
          <ListItem key={film.id}>
            <FilmCard film={film} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default FilmList;
