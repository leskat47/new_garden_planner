import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import PlantTable from './PlantTable';

describe('Plant table tests', () => {
  const storeBuilder = configureMockStore();
  it('renders table', () => {
    const store = storeBuilder({plants: {plantList: [{ id: 1 }] } });
    const { container } = render(
      <Provider store={store}>
        <PlantTable plantings={[]} />
      </Provider>);
    expect(container.querySelector('table')).toBeTruthy();  
  });
});