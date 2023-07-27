import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFFileUpload, { DSFFileUploadProps } from './DSFFileUpload';

const meta: Meta<typeof DSFFileUpload> = {
  component: DSFFileUpload,
  title: 'Form/DSFFileUpload',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFFileUpload>;

export const FileUploadSimple: Story = (args: React.JSX.IntrinsicAttributes & DSFFileUploadProps) => (
  <DSFFileUpload {...args} />
);

FileUploadSimple.args = {
  id: 'fileUploadSimple',
  label: 'Simple File Upload',
};

export const FileUploadHint: Story = (args: React.JSX.IntrinsicAttributes & DSFFileUploadProps) => (
  <DSFFileUpload {...args} />
);

FileUploadHint.args = {
  id: 'fileUploadSimple',
  hint: 'This must be a PDF',
  label: 'Simple File Upload',
};

export const FileUploadError: Story = (args: React.JSX.IntrinsicAttributes & DSFFileUploadProps) => (
  <DSFFileUpload {...args} />
);

FileUploadError.args = {
  id: 'fileUploadSimple',
  meta: { error: 'File is required', touched: true },
  label: 'Simple File Upload',
};
