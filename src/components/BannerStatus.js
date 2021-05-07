import React from 'react';
import styled from 'styled-components';
import COLORS from '../styles/styleValues';

const StyledBannerStatus = styled.div`
    background-color:${COLORS.accentMain};
    color:${COLORS.neutralBlack};
    font-weight:700;
    font-size: 1.2rem;
    text-align:center;
    padding:5px 10px;
`;

const BannerStatus = props => {
    return(
        <StyledBannerStatus>
            <p>Banner Status Message</p>
        </StyledBannerStatus>
    );
}

export default BannerStatus;