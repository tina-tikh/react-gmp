import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  ErrorBoundary, Film, Footer, NotFound, Page, Search,
} from './components';

const App = () => (
  <Page>
    <ErrorBoundary>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/search/" component={Search} />
        <Route path="/film/:id" component={Film} />
        <Route path="*" component={NotFound} />
      </Switch>
    </ErrorBoundary>
    <Footer />
  </Page>
);

export default App;
