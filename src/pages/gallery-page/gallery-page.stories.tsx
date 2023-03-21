import type { Meta } from '@storybook/react';
import { LayoutPageDecorator } from '../layout-page/layout-page';
import { GalleryPage } from './gallery-page';

const Story: Meta<typeof GalleryPage> = {
  component: GalleryPage,
  title: 'Pages/Gallery',
  decorators: [(Story) => <LayoutPageDecorator>{Story()}</LayoutPageDecorator>],
};
export default Story;

export const Primary = {
  args: {},
};
