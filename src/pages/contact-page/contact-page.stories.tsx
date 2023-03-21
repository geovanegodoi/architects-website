import type { Meta } from '@storybook/react';
import { ContactPage } from './contact-page';

const Story: Meta<typeof ContactPage> = {
  component: ContactPage,
  title: 'Pages/Contact',
};
export default Story;

export const Primary = {
  args: {},
};
