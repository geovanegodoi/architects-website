import type { Meta } from '@storybook/react';
import { LayoutPageDecorator } from '../layout-page/layout-page';
import { HomePage } from './home-page';

const Story: Meta<typeof HomePage> = {
  component: HomePage,
  title: 'Pages/Home',
  decorators: [(Story) => <LayoutPageDecorator>{Story()}</LayoutPageDecorator>],
};
export default Story;

export const Primary = {
  args: {},
};
