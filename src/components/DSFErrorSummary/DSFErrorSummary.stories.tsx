import type { StoryObj } from "@storybook/react";

import * as React from "react";
import { DSFErrorSummaryProps } from "./DSFErrorSummary";
import DSFErrorSummary from "./DSFErrorSummary";

export default {
    title: "Form/DSFErrorSummary",
    id: "DSFErrorSummary",
    component: DSFErrorSummary,
};

type Story = StoryObj<typeof DSFErrorSummary>;

export const Default: Story = (args: React.JSX.IntrinsicAttributes & DSFErrorSummaryProps) => (
    <DSFErrorSummary {...args} />
);
Default.args = {
    errors: [
        { text: "Error 1", targetName: "error1" },
        { text: "Error 2", targetName: "error2" },
        { text: "Error 3", targetName: "error3" },
    ],
};
