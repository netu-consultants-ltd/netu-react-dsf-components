import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFBackLink from './DSFBackLink';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof DSFBackLink> = {
  component: DSFBackLink,
  title: 'Navigation/DSFBackLink',
  decorators: [withRouter],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFBackLink>;
