import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import DSFCheckbox, { DSFCheckboxProps } from "./DSFCheckbox";

const meta: Meta<typeof DSFCheckbox> = {
    component: DSFCheckbox,
    title: "Form/DSFCheckbox",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFCheckbox>;

export const CheckboxSimple: Story = (args: React.JSX.IntrinsicAttributes & DSFCheckboxProps) => (
    <DSFCheckbox data-testId="InputField-id" {...args} />
);
CheckboxSimple.args = {
    id: "checkboxId1",
    hint: "",
    children: "Option 1",
};

export const CheckboxWithHint: Story = (args: React.JSX.IntrinsicAttributes & DSFCheckboxProps) => (
    <DSFCheckbox data-testId="InputField-id" {...args} />
);
CheckboxWithHint.args = {
    id: "checkboxId1",
    hint: "This is a hint",
    children: "Option 1",
};
