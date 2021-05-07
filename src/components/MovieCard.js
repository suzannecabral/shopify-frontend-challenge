import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/styleValues';

const StyledMovieCard = styled.div`
    background-color:${COLORS.neutralLight};
    color:${COLORS.neutralBlack};
    border: 1px solid red;
    padding:15px 20px;
    margin:5px;
`;

const MovieCard = props => {
    const { Title, Year, Genre } = props.movie;
    return(
        <StyledMovieCard>
            <p>Title: {Title}</p>
            <p>Year: {Year}</p>
            <p>Genre: {Genre}</p>
        </StyledMovieCard>
    );
}

export default MovieCard;