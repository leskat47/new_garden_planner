import reducer from './loading-reducer';
import ACTIONS from '../actions/actionTypes';

describe('areas reducer', () => {
  let initialState = {loading: false};

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should set the value of loading to true when loading begins', () => {
    expect(reducer(
      initialState,
      { type: ACTIONS.START_LOAD })
    ).toEqual(
      { loading: true }
    );
  });

  it('should set the value of loading to false when a call succeeds', () => {
    expect(reducer(
      initialState,
      { type: ACTIONS.GET_AREAS_SUCCESS })
    ).toEqual(
      { loading: false }
    );
  });
});