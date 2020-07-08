import React from 'react';
import { render } from '@testing-library/react';

import Home from './home';

test('renders create-react-app boilerplate', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/create-react-app boilerplate/i);

  expect(linkElement).toBeTruthy();
});
