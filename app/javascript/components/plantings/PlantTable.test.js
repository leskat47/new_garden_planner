import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import PlantTable from './PlantTable';

describe('Plant table tests', () => {
  const storeBuilder = configureMockStore();
  it('renders table', () => {
    const store = storeBuilder(
      {
        garden: {
          plantings: {1: { plant: { name: "Bruce" }}}
        },
        plants: {
          plantList: [{ id: 1, name: 'Bruce'}]
        }
      }
    );
    const { container } = render(
      <Provider store={store}>
        <PlantTable plantings={[1]} />
      </Provider>);
    expect(container.querySelector('table')).toBeTruthy();  
  });
});