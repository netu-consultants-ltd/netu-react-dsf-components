import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFFooter from './DSFFooter';
import { DSFFooterProps } from './DSFFooter';

const meta: Meta<typeof DSFFooter> = {
  component: DSFFooter,
  title: 'Layout/DSFFooter',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFFooter>;

export const Primary: Story = (args: React.JSX.IntrinsicAttributes & DSFFooterProps) => <DSFFooter {...args} />;
Primary.args = {
  privacyStatementUrl: '#privacyStatementUrl',
  cookiePolicyUrl: '#cookiePolicyUrl',
  accessibilityStatementUrl: '#accessibilityStatementUrl',
};
