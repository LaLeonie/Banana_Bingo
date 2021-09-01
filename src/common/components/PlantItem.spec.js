import React from 'react';
import { render } from '@testing-library/react';

import { PlantItem } from '.';

describe.skip('PlantItem renders expected component', () => {
  it('renders expected header', () => {
    const expectedHeader = 'banana';
    const { getByText } = render(<PlantItem name={expectedHeader} />);
    expect(getByText(expectedHeader)).toBeInTheDocument();
  });
  it('renders expected amound', () => {
    const expectedAmount = 4;
    const { getByText } = render(<PlantItem amount={expectedAmount} />);
    expect(getByText(expectedAmount)).toBeInTheDocument();
  });
});
