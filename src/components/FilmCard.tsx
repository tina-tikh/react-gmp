import * as React from 'react';

import { Link } from 'react-router-dom';

import { Movie } from '../api/models';
import { styled } from '../theme';

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

const getYear = (date: string) => new Date(date).getFullYear();

const FilmCard = ({ film }: FilmCardProps) => (
  <FilmLink to={`/film/${film.id}`}>
    <Poster src={film.poster_path} width="267" height="400" />
    <Info>
      <Year>{getYear(film.release_date)}</Year>
      <Title>{film.title}</Title>
      <span>{film.genres[0]}</span>
    </Info>
  </FilmLink>
);

export default FilmCard;
