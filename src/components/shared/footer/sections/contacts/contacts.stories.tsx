import type { Meta } from '@storybook/react';
import { Contacts } from './contacts';

const Story: Meta<typeof Contacts> = {
  component: Contacts,
  title: 'Components/Shared/Footer/Contacts',
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
