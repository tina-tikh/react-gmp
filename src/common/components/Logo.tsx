import * as React from 'react';
import {Link} from 'react-router-dom';

import styled from '../styled';

const LogoText = styled(Link)`
    font-size: 2rem;
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    
    em {
        font-weight: bold;
        font-style: normal;
    }
`;

class Logo extends React.PureComponent {
    render() {
        return <LogoText to="/"><em>netflix</em>roulette</LogoText>;
    }
}

export default Logo;
