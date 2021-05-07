import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/styleValues';

const StyledSearchResults = styled.div`
    background-color:${COLORS.accentLight};
`;

const SearchResults = props => {
    return(
        <StyledSearchResults>
        </StyledSearchResults>
    );
}

export default SearchResults;