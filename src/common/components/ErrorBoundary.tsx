import * as React from 'react';
import { ErrorInfo } from 'react';

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

export default class ErrorBoundary extends React.Component<
  unknown,
  ErrorBoundaryState
> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.error !== null) {
      return (
        <Main>
          <MainMessage>Oops! Something went wrong</MainMessage>
          <ErrorDetails>{this.state.error?.toString()}</ErrorDetails>
          <ErrorDetails>{this.state.errorInfo.componentStack}</ErrorDetails>
        </Main>
      );
    }

    return this.props.children;
  }
}
