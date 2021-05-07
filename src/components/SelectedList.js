import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/styleValues';

const StyledSelectedList = styled.div`
    background-color:${COLORS.accentLight};
`;

const SelectedList = props => {
    return(
        <StyledSelectedList>
        </StyledSelectedList>
    );
}

export default SelectedList;