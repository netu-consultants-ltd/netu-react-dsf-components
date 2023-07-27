import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFHeader from './DSFHeader';
import { DSFHeaderProps } from './DSFHeader';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta: Meta<typeof DSFHeader> = {
  component: DSFHeader,
  title: 'Layout/DSFHeader',
  decorators: [withRouter],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFHeader>;

export const Simple: Story = (args: React.JSX.IntrinsicAttributes & DSFHeaderProps) => <DSFHeader {...args} />;
Simple.args = {
  headerTitle: 'Header Title',
  showLang: false,
};

export const WithMenuAndLang: Story = (args: React.JSX.IntrinsicAttributes & DSFHeaderProps) => <DSFHeader {...args} />;
WithMenuAndLang.args = {
  headerTitle: 'Header Title',
  menu: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'FormPage',
      href: '/FormPage',
    },
  ],
  showLang: true,
};

export const WithMenuAndNoLang: Story = (args: React.JSX.IntrinsicAttributes & DSFHeaderProps) => (
  <DSFHeader {...args} />
);
WithMenuAndNoLang.args = {
  headerTitle: 'Header Title',
  showLang: false,
  menu: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'FormPage',
      href: '/FormPage',
    },
  ],
};
