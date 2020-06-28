import * as React from 'react';
import { Component, ReactNode } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { ErrorBoundary, Film, Footer, Page, Search } from './components';

class App extends Component {
  render(): ReactNode {
    return (<BrowserRouter>
      <Page>
        <ErrorBoundary>
          <Switch>
            <Route path="/film/:id" component={Film}/>
            <Route path="/" component={Search}/>
          </Switch>
        </ErrorBoundary>
        <Footer/>
      </Page>
    </BrowserRouter>);
  }
}

export default App;
