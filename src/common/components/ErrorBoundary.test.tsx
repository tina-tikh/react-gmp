import * as React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from './ErrorBoundary';
import { MainMessage } from './layout';

describe("<ErrorBoundary />", () => {
  it("should be able to display error", () => {
    const component = shallow(<ErrorBoundary>Text</ErrorBoundary>);
    component.setState({
      error: {},
      errorInfo: {}
    });
    expect(component.find(MainMessage).length).not.toBe(0);
  });
});
