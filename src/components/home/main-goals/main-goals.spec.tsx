import { render } from '@testing-library/react';

import MainGoals from './main-goals';

describe('MainGoals', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainGoals />);
    expect(baseElement).toBeTruthy();
  });
});
