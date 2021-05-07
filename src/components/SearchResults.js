import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/styleValues';

import MovieCard from './MovieCard';
import data from '../dummy';


const StyledSearchResults = styled.div`
background-color:${COLORS.neutralLight};
color:${COLORS.neutralBlack};
border: 1px solid blue;
`;

const SearchResults = props => {
    const movies = data;
    return(
        <StyledSearchResults>
            <p>Search Results:</p>
            {
                movies.map((movie, i) => (
                    <MovieCard movie={movie} key={i} />
                ))
            }
        </StyledSearchResults>
    );
}

export default SearchResults;