import type { Meta } from '@storybook/react';
import { Information } from './information';

const Story: Meta<typeof Information> = {
  component: Information,
  title: 'Components/Shared/Footer/Information',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
