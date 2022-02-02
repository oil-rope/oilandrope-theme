import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render } from '@testing-library/react';

import Main from '@Components/Main';

describe('Main suite', () => {
  it('Render correctly', () => {
    const { getByText } = render(<Main />);
    expect(getByText(/Main components/)).toBeInTheDocument();
  });
});
