import * as React from 'react';
import {ReactNode} from 'react';
import {Link} from 'react-router-dom';

import {Movie} from '../models/movie';
import styled from '../styled';

type FilmCardProps = {
    film: Movie;
}

const ListItem = styled(Link)`
    display: inline-block;
    width: 26rem;
    height: 50rem;
    margin: 4rem 3rem;
    color: ${props => props.theme.colors.light};
    text-decoration: none;
    
    &:active, &:visited {
        color: ${props => props.theme.colors.light};
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

class FilmCard extends React.Component<FilmCardProps> {
    render(): ReactNode {
        return <ListItem to={`/film/${this.props.film.id}`}>
            <Poster src={this.props.film.poster_path}/>
            <Info>
                <Year>{this.getYear(this.props.film.release_date)}</Year>
                <Title>{this.props.film.title}</Title>
                <span>{this.props.film.genres[0]}</span>
            </Info>
        </ListItem>;
    }

    getYear(date: string): number {
        return new Date(date).getFullYear();
    }
}

export default FilmCard;
