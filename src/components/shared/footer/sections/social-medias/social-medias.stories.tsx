import type { Meta } from '@storybook/react';
import { SocialMedias } from './social-medias';

const Story: Meta<typeof SocialMedias> = {
  component: SocialMedias,
  title: 'Components/Shared/Footer/SocialMedias',
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
