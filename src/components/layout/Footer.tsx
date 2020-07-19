import * as React from 'react';
import { PureComponent, ReactNode } from 'react';

import { styled } from '../../theme';
import Logo from './Logo';

const FooterBlock = styled.footer`
  padding: 2.5rem;
  text-align: center;
  background-color: ${(props) => props.theme.colors.dark};
`;

class Footer extends PureComponent {
  render(): ReactNode {
    return (
      <FooterBlock>
        <Logo />
      </FooterBlock>
    );
  }
}

export default Footer;
