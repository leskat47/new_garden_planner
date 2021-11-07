import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import load_areas from '../effects/load_areas';

import Areas from './Areas';

jest.mock('../effects/load_areas', () => jest.fn());

const dispatch = jest.fn();

describe('Areas tests', () => {
  const storeBuilder = configureMockStore();

  it('renders list of areas', () => {
    const store = storeBuilder({
      areas: {
        areasList: [{ name: 'Area1',
        locations: [
                  { name: 'Location1', 
                    plantings: [{plant: {name: 'Geranium' }}]
                  }
                 ],
          }]
        },
      loadingStatus: {loading: false}  
    });
    const { container } = render(
      <Provider store={store}>
        <Areas/>
      </Provider>);
    expect(container.querySelector('h2')).toBeTruthy();
    expect(container.querySelectorAll('table').length).toEqual(1);
  });

  it.skip('makes a call for areas', () => {
    // TODO: Come back to this. May need to set up thunk to suport testing the async.
    const store = storeBuilder({areas: {}, loadingStatus: {loading: false} });
    render(
      <Provider store={store}>
        <Areas/>
      </Provider>);
    expect(load_areas).toHaveBeenCalled();
  });

});