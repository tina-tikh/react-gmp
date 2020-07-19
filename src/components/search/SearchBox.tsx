import * as React from 'react';
import { PureComponent, ReactNode, RefObject } from 'react';

import { styled } from '../../theme';
import { Button } from '../form';

type SearchBoxProps = {
  searchValue: string;
  onSubmit?: (query: string) => void;
};

const Container = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  flex: 1;
  max-width: 80rem;
  padding: 1.5rem;
  margin-right: 1rem;
  border: none;
  border-radius: 0.4rem;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.light};
  background-color: rgba(255, 255, 255, 0.2);

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled(Button)`
  width: 23rem;
  font-size: 2rem;
  font-weight: bold;
`;

class SearchBox extends PureComponent<SearchBoxProps> {
  private inputRef: RefObject<HTMLInputElement> = React.createRef();

  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.handleOnSubmit();
    }
  }

  handleOnSubmit(): void {
    const { current: { value } } = this.inputRef;
    const { onSubmit } = this.props;

    onSubmit(value);
  }

  render(): ReactNode {
    const { searchValue } = this.props;
    return (
      <Container>
        <Input
          ref={this.inputRef}
          placeholder="Search"
          defaultValue={searchValue}
          onKeyDown={(e) => this.handleKeyDown(e)}
        />
        <SearchButton onClick={() => this.handleOnSubmit()}>
          Search
        </SearchButton>
      </Container>
    );
  }
}

export default SearchBox;
