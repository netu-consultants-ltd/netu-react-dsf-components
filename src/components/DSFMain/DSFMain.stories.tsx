import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFMain from './DSFMain';
import { DSFMainProps } from './DSFMain';

const meta: Meta<typeof DSFMain> = {
  component: DSFMain,
  title: 'Layout/DSFMain',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFMain>;
