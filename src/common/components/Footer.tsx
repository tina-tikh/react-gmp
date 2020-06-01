import * as React from 'react';

import Logo from './Logo';
import styled from '../styled';

const FooterBlock = styled.footer`
    padding: 2.5rem;
    text-align: center;
    background-color: ${(props) => props.theme.colors.dark};
`;

class Footer extends React.PureComponent {
    render() {
        return (
            <FooterBlock>
                <Logo></Logo>
            </FooterBlock>
        );
    }
}

export default Footer;
