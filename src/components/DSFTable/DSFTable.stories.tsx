import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFTable from './DSFTable';
import { DSFTableProps } from './DSFTable';

const meta: Meta<typeof DSFTable> = {
  component: DSFTable,
  title: 'Form/DSFTable',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFTable>;

export const TableWithNumbers: Story = (args: React.JSX.IntrinsicAttributes & DSFTableProps) => <DSFTable {...args} />;

TableWithNumbers.args = {
  columns: [
    { header: 'Name', type: 'text' },
    { header: 'Age', type: 'number' },
    { header: 'Score', type: 'number' },
  ],
  rowData: [
    ['John Doe', 25, 85],
    ['Jane Smith', 30, 92],
    ['Bob Johnson', 28, 78],
  ],
};
