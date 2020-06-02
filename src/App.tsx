import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ErrorBoundary, Footer, Page } from './common';
import { Search } from './search';
import { Film } from './film';

class App extends Component {
  render(): ReactNode {
    return (
      <Page>
        <ErrorBoundary>
          <Switch>
            <Route path="/film/:id" component={Film} />
            <Route path="/" component={Search} />
          </Switch>
        </ErrorBoundary>
        <Footer></Footer>
      </Page>
    );
  }
}

export default App;
