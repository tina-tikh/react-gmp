import * as React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

describe('<Search />', () => {
  it('should be rendered', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });
});
