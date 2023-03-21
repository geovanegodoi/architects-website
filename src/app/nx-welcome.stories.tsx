import type { Meta } from '@storybook/react';
import { NxWelcome } from './nx-welcome';

const Story: Meta<typeof NxWelcome> = {
  component: NxWelcome,
  title: 'Components/NxWelcome',
};
export default Story;

export const Primary = {
  args: {},
};
