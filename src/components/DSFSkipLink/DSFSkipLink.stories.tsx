import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFSkipLink, { DSFSkipLinkProps } from './DSFSkipLink';

const meta: Meta<typeof DSFSkipLink> = {
  component: DSFSkipLink,
  title: 'Navigation/DSFSkipLink',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFSkipLink>;

export const Default: Story = (args: React.JSX.IntrinsicAttributes & DSFSkipLinkProps) => <DSFSkipLink {...args} />;

Default.args = {};
