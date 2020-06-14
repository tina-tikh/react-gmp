import * as React from 'react';
import { Component, ReactNode } from 'react';

import { styled } from '../../theme';
import { Movie } from '../../store/types';

type FilmDetailsProps = {
  film: Movie;
};

const Poster = styled.img`
  float: left;
  height: 40rem;
  margin-right: 2rem;
`;

const Title = styled.h4`
  margin: 2rem;
  font-size: 3rem;
`;

const Vote = styled.span`
  display: inline-block;
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  border-radius: 5rem;
  text-align: center;
  line-height: 5.2rem;
  font-size: 2.5rem;
  font-weight: normal;
  color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.light};
`;

const Info = styled.div`
  margin: 2rem;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};

  span + span {
    margin-left: 2rem;
  }
`;

const Overview = styled.div`
  margin: 2rem;
  font-size: 2rem;
`;

class FilmDetails extends Component<FilmDetailsProps> {
  render(): ReactNode {
    return (
      <div>
        <Poster src={this.props.film?.poster_path} />
        <div>
          <Title>
            {this.props.film?.title}
            <Vote>{this.props.film?.vote_average}</Vote>
          </Title>
          <Info>
            <span>{this.getYear(this.props.film?.release_date)}</span>
            <span>{this.props.film?.runtime}</span>
          </Info>
          <Overview>{this.props.film?.overview}</Overview>
        </div>
      </div>
    );
  }

  getYear(date: string): number {
    return date && new Date(date).getFullYear();
  }
}

export default FilmDetails;
