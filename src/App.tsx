import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ErrorBoundary, Film, Footer, NotFound, Page, Search } from './components';

class App extends Component {
  render(): ReactNode {
    return (<Page>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route path="/search/" component={Search}/>
          <Route path="/film/:id" component={Film}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </ErrorBoundary>
      <Footer/>
    </Page>);
  }
}

export default App;
