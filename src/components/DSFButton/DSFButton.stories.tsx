import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFButton, { DSFButtonProps } from './DSFButton';

const meta: Meta<typeof DSFButton> = {
  component: DSFButton,
  title: 'Form/DSFButton',
  argTypes: {
    children: { control: 'object' },
  },
};
export default meta;

type Story = StoryObj<typeof DSFButton>;

export const Primary: Story = {
  args: {
    id: 'testId1',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    id: 'testId1',
    children: 'Secondary',
    className: 'govcy-btn-secondary',
  },
};
