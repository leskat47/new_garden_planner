import reducer from './areas-reducer';
import ACTIONS from '../actions/actionTypes';

describe('areas reducer', () => {
  let initialState = {};

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should set the value of areas on success', () => {
    expect(reducer(
      initialState,
      {
        type: ACTIONS.GET_AREAS_SUCCESS, data: [{name: 'Area1'}]
      })
    ).toEqual(
      {
        ...initialState,
        areasList: [{name: 'Area1'}]
      }
    );
  });


  it('should replace the value of areas on success', () => {
    initialState = {areasList: [{name: 'Area1'}]};
    expect(reducer(
      initialState,
      {
        type: ACTIONS.GET_AREAS_SUCCESS, data: [{name: 'Area2'}]
      })
    ).toEqual(
      {
        ...initialState,
        areasList: [{name: 'Area2'}]
      }
    );
  });

  it('should do nothing if result is missing', () => {
    initialState = {areasList: [{name: 'Area1'}]};
    expect(reducer(
      initialState,
      {
        type: ACTIONS.GET_AREAS_SUCCESS, data: null
      })
    ).toEqual(
      {
        ...initialState,
        areasList: [{name: 'Area1'}]
      }
    );
  });

});