import { render } from '@testing-library/react';

import ConnectForm from './connect-form';

describe('ConnectForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConnectForm />);
    expect(baseElement).toBeTruthy();
  });
});
