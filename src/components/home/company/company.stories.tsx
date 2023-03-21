import type { Meta } from '@storybook/react';
import { Company } from './company';

const Story: Meta<typeof Company> = {
  component: Company,
  title: 'Components/Home/Company',
};
export default Story;

export const Primary = {
  args: {},
};
