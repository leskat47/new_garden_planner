import React from 'react';
import { render } from '@testing-library/react';

import PlantTable from './PlantTable';

describe('Plant table tests', () => {

  it('renders table', () => {
    const { container } = render(<PlantTable plants={[]} />);
    expect(container.querySelector('table')).toBeTruthy();  
  });

});