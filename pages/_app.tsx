import * as React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { Store } from 'redux';

import { ErrorBoundary, Footer, Page } from '../lib/components';
import { withReduxStore } from '../lib/store';

import 'normalize.css';
import '../lib/styles/index.css';

type Props = AppPropsType & {
  store: Store
}

class ReactGMPApp extends App<Props> {
  render() {
    const { Component, pageProps, store } = this.props;

    return <Provider store={store}>
      <Page>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
        <Footer/>
      </Page>
    </Provider>;
  }
}

export default withReduxStore(ReactGMPApp);
