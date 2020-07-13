import * as React from 'react';
import { PureComponent, ReactNode } from 'react';
import Link from 'next/link';

import { styled } from '../../theme';

const LogoText = styled.a`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;

  em {
    font-weight: bold;
    font-style: normal;
  }
`;

class Logo extends PureComponent {
  render(): ReactNode {
    return (
      <Link href="/">
        <LogoText>
          <em>netflix</em>roulette
        </LogoText>
      </Link>
    );
  }
}

export default Logo;
