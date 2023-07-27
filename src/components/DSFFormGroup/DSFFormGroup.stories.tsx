import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFFormGroup, { DSFFormGroupProps } from './DSFFormGroup';
import DSFCheckbox from '../DSFCheckbox/DSFCheckbox';
import DSFRadio from '../DSFRadio/DSFRadio';

const meta: Meta<typeof DSFFormGroup> = {
  component: DSFFormGroup,
  title: 'form/DSFFormGroup',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFFormGroup>;

export const FormGroupWithError: Story = (args: React.JSX.IntrinsicAttributes & DSFFormGroupProps) => (
  <DSFFormGroup {...args}></DSFFormGroup>
);
FormGroupWithError.args = {
  name: 'nationality',
  hint: 'This is a form group hint',
  error: 'At least one value is required',
  children: [
    <DSFCheckbox id="nationality" hint="Select this for Greece">
      Greece
    </DSFCheckbox>,
    <DSFCheckbox hint="Select this for Austria">Austria</DSFCheckbox>,
  ],
};

export const FormGroupWithoutError: Story = (args: React.JSX.IntrinsicAttributes & DSFFormGroupProps) => (
  <DSFFormGroup {...args}></DSFFormGroup>
);
FormGroupWithoutError.args = {
  name: 'nationality',
  hint: 'This is a form group hint',
  children: [
    <DSFCheckbox id="nationality" hint="Select this for Greece">
      Greece
    </DSFCheckbox>,
    <DSFCheckbox hint="Select this for Austria">Austria</DSFCheckbox>,
  ],
};

export const FormGroupWithRadioButtons: Story = (args: React.JSX.IntrinsicAttributes & DSFFormGroupProps) => (
  <DSFFormGroup {...args}></DSFFormGroup>
);
FormGroupWithRadioButtons.args = {
  name: 'districtId',
  hint: 'Select from either Larnaca or Nicosia',
  error: 'Please select district',
  children: [
    <DSFRadio id="districtId" hint="Select this for Larnaca">
      Larnaca
    </DSFRadio>,
    <DSFRadio hint="Select this for Nicosia">Nicosia</DSFRadio>,
  ],
};
