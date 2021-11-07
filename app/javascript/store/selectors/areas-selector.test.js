import areasSelector  from './areas-selector';

describe('areas selector', () => {

  it('returns areas if they exist', () => {
    const state = { areas: { areasList: [{ name: 'Area1' }] } };
    const expected = [{ name: 'Area1' }];
    expect(areasSelector(state)).toEqual(expected);
  });
  it('returns an empty list if there are no areas loaded', () => {
    const state = { areas: {} };
    const expected = [];
    expect(areasSelector(state)).toEqual(expected);
  });
});