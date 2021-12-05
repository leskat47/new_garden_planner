import reducer from './garden-reducer';
import ACTIONS from '../actions/actionTypes';

describe('locations reducer', () => {
let initialState;
  beforeEach(() => {
    initialState = {
      locations: {
        1: {
          name: 'Back yard',
          plantings: [2]
          }  
      },
      plantings: {
        2: {
          plantId: 3
        }
      }
    };
  });

  it('should set the value of locations on success', () => {
    const example = [
      {
        "id": 1,
        "name": "Area 1",
        "locations": [
          {
            "id": 2,
            "name": "Location1",
            "plantings": [
              {
                "id": 3,
                "date_planted": "2021-11-03",
                "location": {
                  "id": 1,
                  "name": "Location1"
                },
                "plant": {
                    "id": 4,
                }
              }
            ]
          }
        ]
      },
      {
        "id": 21,
        "name": "Area 21",
        "locations": [
          {
            "id": 22,
            "name": "Location22",
            "plantings": [
              {
                "id": 23,
                "date_planted": "2021-11-03",
                "plant": {
                    "id": 24,
                }
              }
            ]
          }
        ]
      }
    ];
    const result = {
      ...initialState,
      areas: {
        1: {
          id: 1,
          name: "Area 1",
          locations: [2]
        },
        21:{
          id: 21,
          name: "Area 21",
          locations: [22]
        }
      },
      locations: {
        2: {
          id: 2,
          name: 'Location1',
          plantings: [3]
        },
        22: {
          id: 22,
          name: 'Location22',
          plantings: [23]
        }
      },
      plantings: {
        3: {
          id: 3,
          date_planted: "2021-11-03",
          plant: {id: 4},
          location: {id: 1, name: 'Location1'}
        },
        23: {
          id: 23,
          date_planted: "2021-11-03",
          plant: {id: 24}
        }
      }
    }
    expect(reducer(
      initialState,
      {
        type: ACTIONS.GET_AREAS_SUCCESS, data: 
        example
      })
    ).toEqual(
      {
        ...initialState,
        ...result
      }
    );
  });

  it('should update the plantings when a new planting is added', () => {
    const newPlanting = {
      id: 47,
      date_planted: '2020-01-01',
      description: 'text',
      plant: {id: 74},
      location_id: 1
    };

    const result = {
      locations: {
        1: {
          name: 'Back yard',
          plantings: [2, 47]
          }  
      },
      plantings: {
        2: {
          plantId: 3
        },
        47: {
          id: 47,
          date_planted: '2020-01-01',
          description: 'text',
          plant: {id: 74}
        }
      }
    };

    const action = {type: ACTIONS.ADD_PLANTING_SUCCESS, data: newPlanting};
    expect(reducer(initialState, action)).toEqual(result);
  });

  it('should update plantings when a planting is removed', () => {
    const result = {
      locations: {
        1: {
          name: 'Back yard',
          plantings: []
          }  
      },
      plantings: {}
    };
    const action = { type: ACTIONS.REMOVE_PLANTING, data: {id: 2, locationId: 1} };
    expect(reducer(initialState, action)).toEqual(result);
  });
});

