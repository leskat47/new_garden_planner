import reducer from './areas-reducer';
import ACTIONS from '../actions/actionTypes';

describe('areas reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
        areasList: [
          {name: 'Area1', id: 'area1',  
            locations: [
              { 
                id: 'loc2',
                plantings: [
                  {
                    id: 'planting3',
                    plant: {id: 'plant4'}
                  }
                ]
              }
            ]
          }
        ]
      };
    });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
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

  it('should update plantings for an area and location', () => {
    const data = {
        type: ACTIONS.ADD_PLANTING_SUCCESS,
        data: {
          planting: {id: 'planting5', plant: { id: 'plant6' }},
          location_id: 'loc2',
          area_id: 'area1'
        }
    };
    const result = reducer(initialState, data);
    const new_state_plantings = result.areasList[0].locations[0].plantings;
    expect(new_state_plantings.length).toEqual(2);
    expect(new_state_plantings[1].id).toEqual('planting5');
  });
  it('should not update plantings if area is missing', () => {
      const data = {
          type: ACTIONS.ADD_PLANTING_SUCCESS,
          data: {
            planting: {id: 'planting5', plant: { id: 'plant6' }},
            location_id: 'loc2',
            area_id: 'area2'
          }
      };
      const result = reducer(initialState, data);
      const new_state_plantings = result.areasList[0].locations[0].plantings;
      expect(new_state_plantings.length).toEqual(1);
    });
    it('should not update plantings if area is missing', () => {
      const data = {
          type: ACTIONS.ADD_PLANTING_SUCCESS,
          data: {
            planting: {id: 'planting5', plant: { id: 'plant6' }},
            location_id: 'loc99',
            area_id: 'area1'
          }
      };
      const result = reducer(initialState, data);
      const new_state_plantings = result.areasList[0].locations[0].plantings;
      expect(new_state_plantings.length).toEqual(1);
    });
});