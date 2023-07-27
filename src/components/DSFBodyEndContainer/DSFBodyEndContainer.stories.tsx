import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFBodyEndContainer, { DSFBodyEndContainerProps } from './DSFBodyEndContainer';

const meta: Meta<typeof DSFBodyEndContainer> = {
  component: DSFBodyEndContainer,
  title: 'Layout/DSFBodyEndContainer',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFBodyEndContainer>;

export const Primary: Story = (args: React.JSX.IntrinsicAttributes & DSFBodyEndContainerProps) => (
  <DSFBodyEndContainer {...args} />
);
Primary.args = {};
