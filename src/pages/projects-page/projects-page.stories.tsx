import type { Meta } from '@storybook/react';
import { LayoutPageDecorator } from '../layout-page/layout-page';
import { ProjectsPage } from './projects-page';

const Story: Meta<typeof ProjectsPage> = {
  component: ProjectsPage,
  title: 'Pages/Projects',
  decorators: [(Story) => <LayoutPageDecorator>{Story()}</LayoutPageDecorator>],
};
export default Story;

export const Primary = {
  args: {},
};
