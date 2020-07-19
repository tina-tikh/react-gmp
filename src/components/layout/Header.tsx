import * as React from 'react';
import { ReactNode } from 'react';

import { styled } from '../../theme';
import Logo from './Logo';

const HeaderBlock = styled.header`
  padding: 3rem 6rem;
  color: ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.darkest};
`;

const Header = ({ children }: { children: ReactNode }) => (
  <HeaderBlock>
    <Logo />
    {children}
  </HeaderBlock>
);

export default Header;
