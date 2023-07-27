import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import DSFInputField, { DSFInputFieldProps } from "./DSFInputField";

const meta: Meta<typeof DSFInputField> = {
    component: DSFInputField,
    title: "Form/DSFInputField",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFInputField>;

export const Primary: Story = (args: React.JSX.IntrinsicAttributes & DSFInputFieldProps) => (
    <DSFInputField data-testId="InputField-id" {...args} />
);
Primary.args = {
    meta: {
        touched: false,
        error: "",
    },
    inputProps: {
        disabled: false,
    },
    label: "Primary",
};

export const InputFieldWithHint: Story = (args: React.JSX.IntrinsicAttributes & DSFInputFieldProps) => (
    <DSFInputField data-testId="InputField-id" {...args} />
);
InputFieldWithHint.args = {
    meta: {
        touched: false,
        error: "",
    },
    inputProps: {
        disabled: false,
    },
    label: "Input with Hint message",
    hint: "Hint Message",
};

export const InputFieldWithError: Story = (args: React.JSX.IntrinsicAttributes & DSFInputFieldProps) => (
    <DSFInputField data-testId="InputField-id" {...args} />
);
InputFieldWithError.args = {
    label: "Input With Error",
    meta: {
        touched: true,
        error: "There is an error",
    },
    inputProps: {
        disabled: false,
    },
};

export const Disabled: Story = (args: React.JSX.IntrinsicAttributes & DSFInputFieldProps) => (
    <DSFInputField data-testId="InputField-id" {...args} />
);
Disabled.args = {
    inputProps: {
        disabled: true,
    },
    label: "Disabled",
};
