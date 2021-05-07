import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/styleValues';

const StyledHeader = styled.div`
    background-color:${COLORS.neutralBlack};
    color:${COLORS.neutralWhite};
    padding: 18px;
    font-size:1.3rem;
`;

const Header = props => {
    return(
        <StyledHeader>
            <h1>The Shoppies</h1>
        </StyledHeader>
    );
}

export default Header;