import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Main, MainMessage } from './layout';

class NotFound extends Component<any, any> {
  render(): ReactNode {
    return <Main>
      <MainMessage>404 not found</MainMessage>
    </Main>;
  }
}

export default NotFound;
