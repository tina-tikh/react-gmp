import * as React from 'react';
import { mount, shallow } from 'enzyme';

import { Page } from '../common';
import SearchBox from './SearchBox';

describe('<SearchBox />', () => {
  it('should be rendered', () => {
    const component = shallow(<SearchBox />);
    expect(component).toMatchSnapshot();
  });

  it('should control input', () => {
    const inputValue = '12345';
    const component = mount(
      <Page>
        <SearchBox />
      </Page>
    );
    component
      .find('input')
      .simulate('change', { target: { value: inputValue } });
    expect(component.find(SearchBox).state().searchValue).toEqual(inputValue);
  });

  it('should call onSubmit', () => {
    const onSubmit = jest.fn();
    const component = mount(
      <Page>
        <SearchBox onSubmit={onSubmit} />
      </Page>
    );
    component.find('button').simulate('click');
    expect(onSubmit).toHaveBeenCalled();
  });
});
