import type { Story } from "@storybook/react";

import * as React from "react";
import { action } from "@storybook/addon-actions";
import DSFSelect, { DSFSelectProps } from "./DSFSelect";

export default {
    title: "Form/DSFSelect",
    id: "DSFSelect",
    component: DSFSelect,
};

const Template: Story<React.ComponentProps<typeof DSFSelect>> = (args) => <DSFSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
    inputProps: { name: "group1", onChange: action("onChange") },
    label: "This is a label",
    children: [
        <option value="0">GOV.UK elements option 1</option>,
        <option value="1">GOV.UK elements option 2</option>,
        <option value="2">GOV.UK elements option 3</option>,
    ],
};

export const SelectWithHintText = Template.bind({});
SelectWithHintText.args = {
    inputProps: { name: "group1", onChange: action("onChange") },
    label: "This is a label",
    hint: "This is and example of hintText/description of what we need from you.",
    children: [
        <option value="0">GOV.UK elements option 1</option>,
        <option value="1">GOV.UK elements option 2</option>,
        <option value="2">GOV.UK elements option 3</option>,
    ],
};

export const SelectWithHintTextError = Template.bind({});
SelectWithHintTextError.args = {
    inputProps: { name: "group1", onChange: action("onChange") },
    label: "This is a label",
    hint: "This is and example of hintText/description of what we need from you.",
    meta: {
        touched: true,
        error: "There is an error",
    },
    children: [
        <option value="0">GOV.UK elements option 1</option>,
        <option value="1">GOV.UK elements option 2</option>,
        <option value="2">GOV.UK elements option 3</option>,
    ],
};
