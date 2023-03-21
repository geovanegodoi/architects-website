import React from 'react';
import { RouterProviderDecorator } from '../src/routes';

export const decorators = [
  (Story: () => JSX.Element) => (
    <RouterProviderDecorator>{Story()}</RouterProviderDecorator>
  ),
];

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#2c2c2c',
      },
    ],
  },
};
