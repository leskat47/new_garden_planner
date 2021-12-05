import areasSelector  from './areas-selector';

describe('areas selector', () => {

  it('returns areas if they exist', () => {
    const state = { garden: { areas: { 1: { name: 'Area1' } } } };
    const expected = {1: { name: 'Area1' } };
    expect(areasSelector(state)).toEqual(expected);
  });
  it('returns an empty list if there are no areas loaded', () => {
    const state = { garden: {} };
    const expected = null;
    expect(areasSelector(state)).toEqual(expected);
  });
});