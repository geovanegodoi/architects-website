import { render } from '@testing-library/react';

import ImageAsync from './image-async';

describe('ImageAsync', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageAsync />);
    expect(baseElement).toBeTruthy();
  });
});
