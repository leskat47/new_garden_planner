import React from 'react';
import { render, screen, getByText, fireEvent } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Plants from './Plants';

describe('Plants tests', () => {
  const storeBuilder = configureMockStore();
  const store = storeBuilder({
    plants: {
      plantList: [
        {
          "key": 1,
          "id": 1,
          "name": "Azalea",
          "exposure": "sun",
          "moisture": "keep moist",
          "description": "perennial"
        },
        {
          "key": 2,
          "id": 2,
          "name": "Cape Daisy",
          "exposure": "sun to shade",
          "moisture": "keep moist",
          "description": "Perennial. Sprawling with daisy flowers with curled leaves."
        },
        {
          "key": 3,
          "id": 3,
          "name": "Cyclamen",
          "exposure": "shade",
          "moisture": "keep",
          "description": "low growing bulb"
        }
      ]
    },
    loadingStatus: {loading: false}
  });

  it('renders plant catalog table', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Plants />
        </MemoryRouter>
      </Provider>);
    expect(container.querySelector('table')).toBeTruthy();
    const cell = container.querySelectorAll('tbody>tr>td')[0];
    expect(getByText(cell, 'Azalea')).toBeTruthy();
  });

  it('shows plant add form', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Plants />
        </MemoryRouter>
      </Provider>);
    const addButton = screen.getByTestId('add-plant');
    expect(screen.queryByTestId('add-plant-modal')).toBeFalsy();
    fireEvent.click(addButton);
    expect(screen.queryByTestId('add-plant-modal')).toBeTruthy();
  });
});