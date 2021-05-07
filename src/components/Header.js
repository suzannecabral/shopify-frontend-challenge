import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/styleValues';

const StyledHeader = styled.div`
    background-color:${COLORS.neutralBlack};
`;

const Header = props => {
    return(
        <StyledHeader>
            <h1>The Shoppies</h1>
        </StyledHeader>
    );
}

export default Header;