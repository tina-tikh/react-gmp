import * as React from 'react';
import { mount, shallow } from 'enzyme';

import { Page } from '../layout';
import ToggleGroup from './ToggleGroup';

const opts = ['1', '2', '3'];
const value = '1';

describe('<ToggleGroup />', () => {
  it('should be rendered', () => {
    const component = shallow(
      <ToggleGroup label="Sort" opts={opts} value={value} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should call onChange', () => {
    const onChange = jest.fn();
    const component = mount(
      <Page>
        <ToggleGroup
          label="Sort"
          opts={opts}
          value={value}
          onChange={onChange}
        />
      </Page>
    );
    component.find('button').at(0).simulate('click');
    expect(onChange).toHaveBeenCalled();
  });
});
