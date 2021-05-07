import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/styleValues';

const StyledSearchResults = styled.div`
    background-color:${COLORS.neutralLight};
    color:${COLORS.neutralBlack};
`;

const SearchResults = props => {
    return(
        <StyledSearchResults>
            <p>SearchResults</p>
        </StyledSearchResults>
    );
}

export default SearchResults;