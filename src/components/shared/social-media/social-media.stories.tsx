import type { Meta } from '@storybook/react';
import { SocialMedia, SocialMediaProps } from './social-media';

const Story: Meta<typeof SocialMedia> = {
  component: SocialMedia,
  title: 'Components/Shared/Social Media',
};
export default Story;

export const Facebook = {
  args: { variant: 'facebook' } as SocialMediaProps,
};

export const Twitter = {
  args: { variant: 'twitter' } as SocialMediaProps,
};

export const Linkedin = {
  args: { variant: 'linkedin' } as SocialMediaProps,
};

export const Pinterest = {
  args: { variant: 'pinterest' } as SocialMediaProps,
};
