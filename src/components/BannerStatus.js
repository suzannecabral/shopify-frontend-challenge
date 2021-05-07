import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/styleValues';

const StyledBannerStatus = styled.div`
    background-color:${COLORS.accentMain};
    color:${COLORS.neutralBlack};
`;

const BannerStatus = props => {
    return(
        <StyledBannerStatus>
            <p>Banner Status Message</p>
        </StyledBannerStatus>
    );
}

export default BannerStatus;