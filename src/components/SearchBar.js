import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/styleValues';

const StyledSearchBar = styled.div`
    background-color:${COLORS.accentLight};
    color:${COLORS.neutralBlack}
`;

const SearchBar = props => {
    return(
        <StyledSearchBar>
            <p>SearchBar</p>
        </StyledSearchBar>
    );
}

export default SearchBar;