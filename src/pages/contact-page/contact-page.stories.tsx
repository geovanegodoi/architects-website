import type { Meta } from '@storybook/react';
import { LayoutPageDecorator } from '../layout-page/layout-page';
import { ContactPage } from './contact-page';

const Story: Meta<typeof ContactPage> = {
  component: ContactPage,
  title: 'Pages/Contact',
  decorators: [(Story) => <LayoutPageDecorator>{Story()}</LayoutPageDecorator>],
};
export default Story;

export const Primary = {
  args: {},
};
