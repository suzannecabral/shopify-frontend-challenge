import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/styleValues';

import MovieCard from './MovieCard';
import data from '../dummy';

const StyledSelectedList = styled.div`
    background-color:${COLORS.neutralLight};
    color:${COLORS.neutralBlack};
    border:1px solid cyan;
`;

const SelectedList = props => {
    const movies = data;
    return(
        <StyledSelectedList>
            <p>SelectedList</p>
            {
                movies.map((movie, i) => (
                    <MovieCard movie={movie} key={i} />
                ))
            }
        </StyledSelectedList>
    );
}

export default SelectedList;