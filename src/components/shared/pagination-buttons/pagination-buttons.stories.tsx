import type { Meta } from '@storybook/react';
import { PaginationButtons } from './pagination-buttons';

const Story: Meta<typeof PaginationButtons> = {
  component: PaginationButtons,
  title: 'Components/Shared/Pagination',
};
export default Story;

export const Primary = {
  args: {},
};
