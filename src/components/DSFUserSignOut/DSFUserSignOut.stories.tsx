import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFUserSignOut, { DSFUserSignOutProps } from './DSFUserSignOut';

const meta: Meta<typeof DSFUserSignOut> = {
  component: DSFUserSignOut,
  title: 'Page/DSFUserSignOut',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFUserSignOut>;

export const RadioSimple: Story = (args: React.JSX.IntrinsicAttributes & DSFUserSignOutProps) => (
  <DSFUserSignOut {...args} />
);
RadioSimple.args = {
  fullName: 'John Does',
};
