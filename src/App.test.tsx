import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import configureStore from 'redux-mock-store';

import App from './App';
import { initialMoviesState, initialSelectedMovieState } from './store/reducers';

describe('<App />', () => {
  let store: Store;
  const mockStore = configureStore([]);

  beforeEach(() => {
    store = mockStore({
      movies: initialMoviesState,
      selectedMovie: initialSelectedMovieState,
    });
  });

  it('should render NotFound page', async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/random']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );

    expect(getByText('404 not found')).toBeInTheDocument();
  });
});
