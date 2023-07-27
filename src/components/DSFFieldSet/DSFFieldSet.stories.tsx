import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFFieldSet, { DSFFieldSetProps } from './DSFFieldSet';
import DSFFormGroup from '../DSFFormGroup/DSFFormGroup';
import DSFCheckbox from '../DSFCheckbox/DSFCheckbox';

const meta: Meta<typeof DSFFieldSet> = {
  component: DSFFieldSet,
  title: 'form/DSFFieldSet',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFFieldSet>;

export const WithStringLegend: Story = (args: React.JSX.IntrinsicAttributes & DSFFieldSetProps) => (
  <DSFFieldSet {...args}></DSFFieldSet>
);
WithStringLegend.args = {
  legend: 'This is a normal string legend',
};

export const WithHeaderLegend: Story = (args: React.JSX.IntrinsicAttributes & DSFFieldSetProps) => (
  <DSFFieldSet {...args}></DSFFieldSet>
);
WithHeaderLegend.args = {
  legend: <h1>This is a header legend</h1>,
};

export const WithFormGroupAndCheckboxes: Story = (args: React.JSX.IntrinsicAttributes & DSFFieldSetProps) => (
  <DSFFieldSet {...args}>
    <DSFFormGroup name="nationality" hint="Select at least one nationality" error="Select at least one nationality">
      <DSFCheckbox id="nationality" hint="Select this for Greece">
        Greece
      </DSFCheckbox>
      ,<DSFCheckbox hint="Select this for Austria">Austria</DSFCheckbox>,
    </DSFFormGroup>
  </DSFFieldSet>
);
WithFormGroupAndCheckboxes.args = {
  legend: 'Select your nationality',
};
