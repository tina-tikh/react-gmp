import * as React from 'react';
import { shallow } from 'enzyme';
import { match } from 'react-router-dom';

import Film from './Film';

describe('<Film />', () => {
  const matchParams: match<{ id: string }> = {
    params: {
      id: '123',
    },
    isExact: false,
    path: '',
    url: '',
  };

  it('should be rendered', () => {
    const component = shallow(<Film match={matchParams} />);
    expect(component).toMatchSnapshot();
  });
});
