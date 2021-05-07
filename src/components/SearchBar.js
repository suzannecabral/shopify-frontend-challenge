import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/styleValues';

const StyledSearchBar = styled.div`
    background-color:${COLORS.accentLight};
`;

const SearchBar = props => {
    return(
        <StyledSearchBar>
        </StyledSearchBar>
    );
}

export default SearchBar;