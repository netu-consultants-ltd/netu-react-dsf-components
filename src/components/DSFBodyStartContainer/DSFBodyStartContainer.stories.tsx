import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFBodyStartContainer, { DSFBodyStartContainerProps } from './DSFBodyStartContainer';

const meta: Meta<typeof DSFBodyStartContainer> = {
  component: DSFBodyStartContainer,
  title: 'Layout/DSFBodyStartContainer',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFBodyStartContainer>;

export const Primary: Story = (args: React.JSX.IntrinsicAttributes & DSFBodyStartContainerProps) => (
  <DSFBodyStartContainer {...args} />
);
Primary.args = {};
