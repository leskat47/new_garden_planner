import reducer from './plants-reducer';
import ACTIONS from '../actions/actionTypes';

describe('plants reducer', () => {
  let initialState = {};

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should set the value of plants on success', () => {
    expect(reducer(
      initialState,
      {
        type: ACTIONS.GET_PLANTS_SUCCESS, data: [{name: 'Plant1'}]
      })
    ).toEqual(
      {
        ...initialState,
        plantList: [{name: 'Plant1'}]
      }
    );
  });


  it('should replace the value of plants on success', () => {
    initialState = {plantList: [{name: 'Plant1'}]};
    expect(reducer(
      initialState,
      {
        type: ACTIONS.GET_PLANTS_SUCCESS, data: [{name: 'Plant2'}]
      })
    ).toEqual(
      {
        ...initialState,
        plantList: [{name: 'Plant2'}]
      }
    );
  });

  it('should do nothing if result is missing', () => {
    initialState = {plantList: [{name: 'Plant1'}]};
    expect(reducer(
      initialState,
      {
        type: ACTIONS.GET_PLANTS_SUCCESS, data: null
      })
    ).toEqual(
      {
        ...initialState,
        plantList: [{name: 'Plant1'}]
      }
    );
  });

});