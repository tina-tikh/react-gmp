import * as React from 'react';
import { PureComponent, ReactNode } from 'react';

import { styled } from '../../theme';
import Button from './Button';

type ToggleGroupProps = {
  label?: string;
  value: string;
  values: string[];
  valueLabels: string[];
  onChange?: (i: string) => void;
};

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
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

class ToggleGroup extends PureComponent<ToggleGroupProps> {
  render(): ReactNode {
    return (
      <Container>
        <Label>{this.props.label}</Label>
        {this.props.values?.map((val, i) => (
          <Toggle
            key={val}
            className={`${this.getClassName(val)}`}
            onClick={() => this.handleOnClick(val)}
          >
            {this.props.valueLabels[i]}
          </Toggle>
        ))}
      </Container>
    );
  }

  getClassName(item: string): string {
    return item === this.props.value ? 'active' : '';
  }

  handleOnClick(item: string): void {
    this.props?.onChange(item);
  }
}

export default ToggleGroup;
