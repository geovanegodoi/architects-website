import type { Meta } from '@storybook/react';
import { Card, CardProps } from './card';
import project1 from '../../../../public/assets/projects/project1.png';

const Story: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Projects/Card',
};
export default Story;

export const Primary = {
  args: {
    image: project1,
    title: 'Comprehensive school',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  } as CardProps,
};
