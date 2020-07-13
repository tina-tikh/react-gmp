import * as React from 'react';
import { Component, ReactNode } from 'react';
import { ThemeProvider } from 'emotion-theming';

import { styled, theme } from '../../theme';

const Article = styled.article`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

class Page extends Component {
  render(): ReactNode {
    return (
      <Article>
        <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
      </Article>
    );
  }
}

export default Page;
