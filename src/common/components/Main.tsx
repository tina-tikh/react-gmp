import * as React from 'react';

import styled from '../styled';

const Main = styled.main`
    flex: 1;
    color: ${(props) => props.theme.colors.light};
    background-color: ${(props) => props.theme.colors.darker};
`;

export default Main;
