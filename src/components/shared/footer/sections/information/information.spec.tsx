import { render } from '@testing-library/react';

import Information from './information';

describe('Information', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Information />);
    expect(baseElement).toBeTruthy();
  });
});
