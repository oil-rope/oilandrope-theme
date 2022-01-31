import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render } from '@testing-library/react';

import App from '@Components/App';

describe('App suite', () => {
  it('Render correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Main components/)).toBeInTheDocument();
  });
});
