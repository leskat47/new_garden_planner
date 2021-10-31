import React from 'react';
import { render } from '@testing-library/react';

import Areas from './Areas';

describe('Areas tests', () => {

  it('renders list of areas', () => {
    const areas = [{ name: 'Area1',  plants: [{name: 'Geranium' }] }];
    const { container } = render(<Areas areas={areas} />);
    expect(container.querySelector('h2')).toBeTruthy();
    expect(container.querySelectorAll('table').length).toEqual(1);
  });

});