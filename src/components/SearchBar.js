import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/styleValues';

const StyledSearchBar = styled.div`
    background-color:${COLORS.neutralDark};
    color:${COLORS.neutralWhite};
    input{
        background-color:${COLORS.neutralOffWhite};
        border: 1px solid ${COLORS.neutralWhite};
        border-radius:.3rem;
        padding:.2rem;
        margin:.4rem .2rem;

    }
`;

const SearchBar = props => {
    return(
        <StyledSearchBar>
            <form>
                <input type="text" placeholder="Movie Title"></input>
            </form>
        </StyledSearchBar>
    );
}

export default SearchBar;