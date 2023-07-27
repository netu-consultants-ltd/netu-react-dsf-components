import type { StoryObj } from '@storybook/react';

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import DSFDateInput, { DSFDateInputProps } from './DSFDateInput';

export default {
  title: 'Form/DSFDateInput',
  id: 'DSFDateInput',
  component: DSFDateInput,
};

type Story = StoryObj<typeof DSFDateInput>;

export const Default: Story = (args: React.JSX.IntrinsicAttributes & DSFDateInputProps) => <DSFDateInput {...args} />;
Default.args = {
  inputProps: { onChange: action('onChange'), onBlur: action('onBlur'), onFocus: action('onFocus') },
  label: 'Date of birth',
  id: 'dob',
};

export const DefaultWithInitialValue: Story = (args: React.JSX.IntrinsicAttributes & DSFDateInputProps) => (
  <DSFDateInput {...args} />
);
DefaultWithInitialValue.args = {
  inputProps: {
    onChange: action('onChange'),
    onBlur: action('onBlur'),
    onFocus: action('onFocus'),
  },
  inputs: {
    day: { disabled: false },
    month: { disabled: false },
    year: { disabled: false },
  },
  defaultValues: {
    day: '10',
    month: '09',
    year: '2000',
  },
  label: 'Field Label',
  id: 'dob',
};

export const DefaultWithInitialValueDisabled: Story = (args: React.JSX.IntrinsicAttributes & DSFDateInputProps) => (
  <DSFDateInput {...args} />
);
DefaultWithInitialValueDisabled.args = {
  inputProps: {
    onChange: action('onChange'),
    onBlur: action('onBlur'),
    onFocus: action('onFocus'),
  },
  defaultValues: {
    day: '10',
    month: '09',
    year: '2000',
  },
  inputs: {
    day: { disabled: true },
    month: { disabled: true },
    year: { disabled: true },
  },
  label: 'Field Label',
  id: 'dob',
};

export const DSFDateInputWithHint: Story = (args: React.JSX.IntrinsicAttributes & DSFDateInputProps) => (
  <DSFDateInput {...args} />
);
DSFDateInputWithHint.args = {
  inputProps: {
    onChange: action('onChange'),
    onBlur: action('onBlur'),
    onFocus: action('onFocus'),
  },
  inputs: {
    day: { disabled: true },
    month: { disabled: true },
    year: { disabled: true },
  },
  label: 'This is a label',
  hint: 'This is and example of hintText/description of what we need from you.',
};

export const DSFDateInputWithHintAndError: Story = (args: React.JSX.IntrinsicAttributes & DSFDateInputProps) => (
  <DSFDateInput {...args} />
);
DSFDateInputWithHintAndError.args = {
  inputProps: {
    onChange: action('onChange'),
    onBlur: action('onBlur'),
    onFocus: action('onFocus'),
  },
  id: 'dob',
  label: 'This is a label',
  hint: 'This is and example of hintText/description of what we need from you.',
  errorText: 'There is an error',
};
