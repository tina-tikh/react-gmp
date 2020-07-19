import * as React from 'react';
import { Component, ErrorInfo, ReactNode } from 'react';

import { styled } from '../theme';
import { Main, MainMessage } from './layout';

type ErrorBoundaryState = {
  error: Error;
  errorInfo: ErrorInfo;
};

const ErrorDetails = styled.section`
  margin: 2rem;
  font-size: 2rem;
`;

export default class ErrorBoundary extends Component<unknown, ErrorBoundaryState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });
  }

  render(): ReactNode {
    const { children } = this.props;
    const { error, errorInfo } = this.state;

    if (error !== null) {
      return (
        <Main>
          <MainMessage>Oops! Something went wrong</MainMessage>
          <ErrorDetails>{error?.toString()}</ErrorDetails>
          <ErrorDetails>{errorInfo.componentStack}</ErrorDetails>
        </Main>
      );
    }

    return children;
  }
}
