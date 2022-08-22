import React from 'react';
import { render } from '@testing-library/react';
import { EventrixProvider } from 'eventrix';
import eventrix from './app/eventrix';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <EventrixProvider store={eventrix}>
      <App />
    </EventrixProvider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
