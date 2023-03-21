import type { Meta } from '@storybook/react';
import { ConnectForm } from './connect-form';

const Story: Meta<typeof ConnectForm> = {
  component: ConnectForm,
  title: 'Components/Home/Connect Form',
};
export default Story;

export const Primary = {
  args: {},
};
