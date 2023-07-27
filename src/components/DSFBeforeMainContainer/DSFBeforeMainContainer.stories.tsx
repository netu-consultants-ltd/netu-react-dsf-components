import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFBeforeMainContainer from './DSFBeforeMainContainer';
import { DSFBeforeMainContainerProps } from './DSFBeforeMainContainer';

const meta: Meta<typeof DSFBeforeMainContainer> = {
  component: DSFBeforeMainContainer,
  title: 'Layout/DSFBeforeMainContainer',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFBeforeMainContainer>;

export const Primary: Story = (args: React.JSX.IntrinsicAttributes & DSFBeforeMainContainerProps) => (
  <DSFBeforeMainContainer {...args} />
);
Primary.args = {};
