import type { Meta } from '@storybook/react';
import { Title, TitleProps } from './title';

const Story: Meta<typeof Title> = {
  component: Title,
  title: 'Components/Shared/Title',
};
export default Story;

export const Primary = {
  args: {
    values: ['DIGITAL', 'PRODUCT'],
  } as TitleProps,
};
