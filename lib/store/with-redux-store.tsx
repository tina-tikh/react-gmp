import * as React from 'react';
import { Component } from 'react';
import { AppState, configureStore } from './store';
import { Store } from 'redux';
import { NextComponentType, NextPageContext } from 'next';

const __NEXT_REDUX_STORE__: any = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState?: AppState) {
  // if server
  if (typeof window === 'undefined') {
    return configureStore(initialState);
  }

  // if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = configureStore(initialState) as any;
  }

  return window[__NEXT_REDUX_STORE__];
}

type AppContext = {
  ctx: {
    store: Store
  }
}

export function withReduxStore(App: NextComponentType) {
  return class AppWithRedux extends Component<{initialReduxState: AppState}> {
    static async getInitialProps(appContext: AppContext & NextPageContext) {
      const store: Store = getOrCreateStore() as Store;

      appContext.ctx.store = store;

      return {
        ...(App.getInitialProps ? await App.getInitialProps(appContext) : {}),
        initialReduxState: store.getState(),
      };
    }

    render() {
      const { initialReduxState } = this.props;
      const store = getOrCreateStore(initialReduxState);
      return <App {...this.props} store={store} />;
    }
  }
}
