import * as React from 'react';
import {ReactNode} from 'react';

import styled from '../styled';
import Button from './Button';

type ToggleGroupProps = {
    label: string,
    opts: string[],
    value: string,
    onChange: (i: string) => void
}

type ToggleGroupState = {
    value: string
}

const Container = styled.div`
    display: inline-block;
    font-size: 1.6rem;
    text-transform: uppercase;
`;
const Label = styled.label`
    margin-right: 2rem;
`;
const Toggle = styled(Button)`
    background-color: rgba(255, 255, 255, 0.2);
    
    & + button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    
    &:first-of-type {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    
    &:focus {
        outline: none;
    }

    &.active {
        background-color: ${props => props.theme.colors.primary};
    }
`;

class ToggleGroup extends React.PureComponent<ToggleGroupProps, ToggleGroupState> {
    constructor(props: ToggleGroupProps) {
        super(props);
        this.state = {value: this.props.value};
    }

    render(): ReactNode {
        return <Container>
            <Label>{this.props.label}</Label>
            {
                this.props.opts.map((item, i) => <Toggle
                    key={item}
                    className={`${this.getClassName(item)}`}
                    onClick={() => this.handleOnClick(item)}
                >{item}</Toggle>)
            }
        </Container>;
    }

    getClassName(item: string): string {
        return item == this.state.value ? "active" : "";
    }

    handleOnClick(item: string): void {
        this.setState({
            value: item
        });
        this.props.onChange(item);
    }
}

export default ToggleGroup;
