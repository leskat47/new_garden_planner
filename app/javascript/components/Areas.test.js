import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from "react-router-dom";
import configureMockStore from 'redux-mock-store';
import load_areas from '../effects/load_areas';

import Areas from './Areas';

jest.mock('../effects/load_areas', () => jest.fn());

describe('Areas tests', () => {
  const storeBuilder = configureMockStore();

  it('renders list of areas', () => {
    const store = storeBuilder({
      garden: {
        areas: {
          '1': {
            name: 'Area1',
            locations: [2]
          }
        },
        locations: {
          '2': {
            name: 'Location1', 
            plantings: ['10', '11']
          }
        },
        plantings: {
          '10': { plant: { id: '20' }},
          '11': { plant: { id: '21' }}
        }
      },
      plants: {
        plantList: [
          { name: 'Azalea', exposure: 'sun', moisture: 'even', description: 'text' },
          { name: 'Verbena', exposure: 'sun', moisture: 'even', description: 'text' }
        ]
      },
      loadingStatus: { loading: false }  
    });
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Areas/>
        </MemoryRouter>
      </Provider>);
    expect(container.querySelector('h2')).toBeTruthy();
    expect(container.querySelectorAll('table').length).toEqual(1);
  });

});