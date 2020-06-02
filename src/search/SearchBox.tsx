import * as React from 'react';
import { PureComponent, ReactNode } from 'react';

import { Button, styled } from '../common';

type SearchBoxProps = {
  onSubmit: (query: string) => void;
};

type SearchBoxState = {
  searchValue: string;
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

class SearchBox extends PureComponent<SearchBoxProps, SearchBoxState> {
  constructor(props: SearchBoxProps) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  render(): ReactNode {
    return (
      <Container>
        <Input
          placeholder="Search"
          value={this.state.searchValue}
          onChange={(e) => this.handleSearchValueChange(e)}
        ></Input>
        <SearchButton onClick={() => this.handleOnSubmit()}>
          Search
        </SearchButton>
      </Container>
    );
  }

  handleSearchValueChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      searchValue: e.target.value,
    });
  }

  handleOnSubmit(): void {
    this.props.onSubmit(this.state.searchValue);
  }
}

export default SearchBox;
