import * as React from 'react';

import styled from '../styled';

const ActionBar = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 6rem;
    background-color: ${(props) => props.theme.colors.dark};
`;

export default ActionBar;
