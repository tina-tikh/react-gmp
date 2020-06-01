import * as React from 'react';
import {ErrorInfo} from 'react';
import Main from './Main';
import styled from '../styled';

type ErrorBoundaryState = {
    hasError: boolean
}

const ErrorMessage = styled.h1`
    margin: 3rem;
    text-align: center;
    font-size: 3rem;
`;

export class ErrorBoundary extends React.Component<Object, ErrorBoundaryState> {
    constructor(props: Object) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(error);
    }

    render() {
        if (this.state.hasError) {
            return <Main>
                <ErrorMessage>Something went wrong.</ErrorMessage>
            </Main>;
        }

        return this.props.children;
    }
}
