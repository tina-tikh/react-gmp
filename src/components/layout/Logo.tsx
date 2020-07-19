import * as React from 'react';
import { PureComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { styled } from '../../theme';

const LogoText = styled(Link)`
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
      <LogoText to="/">
        <em>netflix</em>
        roulette
      </LogoText>
    );
  }
}

export default Logo;
