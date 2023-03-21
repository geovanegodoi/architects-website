import type { Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Shared/Button',
};
export default Story;

export const Light = {
  args: {
    variant: 'light',
    children: 'BUTTON',
    pointer: 'left',
  } as ButtonProps,
};

export const Dark = {
  args: {
    variant: 'dark',
    children: 'BUTTON',
    pointer: 'right',
  } as ButtonProps,
};

export const White = {
  args: {
    variant: 'white',
    pointer: 'right',
  } as ButtonProps,
};
