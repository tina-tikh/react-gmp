import * as React from 'react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'emotion-theming';

import { styled, theme } from '../../theme';

const Article = styled.article`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const Page = ({ children }: { children: ReactNode }) => (
  <Article>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Article>
);

export default Page;
