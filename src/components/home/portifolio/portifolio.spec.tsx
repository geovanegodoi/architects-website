import { render } from '@testing-library/react';

import Portifolio from './portifolio';

describe('Highlights', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Portifolio />);
    expect(baseElement).toBeTruthy();
  });
});
