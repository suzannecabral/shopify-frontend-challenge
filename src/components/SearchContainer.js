import React from 'react';
import styled from 'styled-components';
// import COLORS from '../styles/styleValues';

import SearchResults from './SearchResults';
import SelectedList from './SelectedList';

const StyledSearchContainer = styled.div`

`;

const SearchContainer = props => {
    return(
        <StyledSearchContainer>
            <SearchResults />
            <SelectedList />
        </StyledSearchContainer>
    );
}

export default SearchContainer;