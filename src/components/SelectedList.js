import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/styleValues';

const StyledSelectedList = styled.div`
    background-color:${COLORS.neutralLight};
    color:${COLORS.neutralBlack};
`;

const SelectedList = props => {
    return(
        <StyledSelectedList>
            <p>SelectedList</p>
        </StyledSelectedList>
    );
}

export default SelectedList;