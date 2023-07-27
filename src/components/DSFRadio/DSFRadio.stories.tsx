import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFRadio, { DSFRadioProps } from './DSFRadio';
import DSFFormGroup, { DSFFormGroupProps } from '../DSFFormGroup/DSFFormGroup';
import DSFInputField, { DSFInputFieldProps } from '../DSFInputField/DSFInputField';

const meta: Meta<typeof DSFRadio> = {
  component: DSFRadio,
  title: 'Form/DSFRadio',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFRadio>;

export const RadioSimple: Story = (args: React.JSX.IntrinsicAttributes & DSFRadioProps) => <DSFRadio {...args} />;
RadioSimple.args = {
  hint: '',
  children: <>Yes</>,
};

export const RadioWithHint: Story = (args: React.JSX.IntrinsicAttributes & DSFRadioProps) => (
  <DSFRadio data-testId="InputField-id" {...args} />
);
RadioWithHint.args = {
  id: 'RadioId1',
  hint: 'This is a hint',
  children: 'Option 1',
};

type FormGroupStory = StoryObj<typeof DSFFormGroup>;
export const FormGroupWithError: FormGroupStory = (args: React.JSX.IntrinsicAttributes & DSFFormGroupProps) => (
  <DSFFormGroup {...args}></DSFFormGroup>
);
FormGroupWithError.args = {
  name: 'districtId',
  hint: 'This is a form group hint',
  error: 'Please select district',
  children: [
    <DSFRadio id="districtId" hint="Select this for Greece">
      Larnaca
    </DSFRadio>,
    <DSFRadio hint="Select this for Austria">Nicosia</DSFRadio>,
  ],
};

export const FormGroupWithInlineRadio: FormGroupStory = (args: React.JSX.IntrinsicAttributes & DSFFormGroupProps) => (
  <DSFFormGroup {...args}></DSFFormGroup>
);
FormGroupWithInlineRadio.args = {
  name: 'districtId',
  hint: 'This is a form group hint',
  children: [
    <DSFRadio id="districtId" hint="Select this for Greece" inline={true}>
      Larnaca
    </DSFRadio>,
    <DSFRadio hint="Select this for Austria" inline={true}>
      Nicosia
    </DSFRadio>,
  ],
};

export const FormGroupWithConditionalRadio: FormGroupStory = (
  args: React.JSX.IntrinsicAttributes & DSFFormGroupProps
) => <DSFFormGroup {...args}></DSFFormGroup>;
FormGroupWithConditionalRadio.args = {
  name: 'email',
  hint: 'What email should we use',
  children: [
    <DSFRadio
      name="email"
      value="porfyriosv@netu.com.cy"
      collapsed={{
        className: 'email',
      }}
    >
      Use existing email address
    </DSFRadio>,
    <DSFRadio
      name="email"
      collapsed={{
        className: 'email',
        node: (
          <DSFInputField
            label="Email Address"
            hint="We'll only use this for application"
            id="email"
            meta={{}}
          ></DSFInputField>
        ),
      }}
    >
      No, use different email address
    </DSFRadio>,
  ],
};
