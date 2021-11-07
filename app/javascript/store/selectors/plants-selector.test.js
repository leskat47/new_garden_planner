import plantsSelector  from './plants-selector';

describe('plants selector', () => {

  it('returns plants if they exist', () => {
    const state = { plants: { plantList: [{ name: 'Plant1' }] } };
    const expected = [{ name: 'Plant1' }];
    expect(plantsSelector(state)).toEqual(expected);
  });

   it('returns an empty list if there are no plants loaded', () => {
    const state = { plants: {} };
    const expected = [];
    expect(plantsSelector(state)).toEqual(expected);
  });
});