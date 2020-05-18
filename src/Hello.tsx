import * as React from 'react';
import {ReactNode} from 'react';

interface HelloProps {
    toWhat: string;
}

class Hello extends React.PureComponent<HelloProps, Object> {
    render(): ReactNode {
        return React.createElement('div', null, `Hello ${this.props.toWhat}!`);
    }
}

export default Hello;
