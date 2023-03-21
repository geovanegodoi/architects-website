import { render } from '@testing-library/react';

import SocialMedias from './social-medias';

describe('SocialMedias', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialMedias />);
    expect(baseElement).toBeTruthy();
  });
});
