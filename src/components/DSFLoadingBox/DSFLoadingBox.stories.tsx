import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DSFLoadingBox, { DSFLoadingBoxProps } from './DSFLoadingBox';

const meta: Meta<typeof DSFLoadingBox> = {
  component: DSFLoadingBox,
  title: 'Utility/DSFLoadingBox',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof DSFLoadingBox>;

export const Primary: Story = (args: React.JSX.IntrinsicAttributes & DSFLoadingBoxProps) => (
  <DSFLoadingBox {...args}>
    <div>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
    </div>
    <br />
    <div>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
    </div>
    <br />
    <div>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
    </div>
    <br />
    <div>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
    </div>
    <br />
    <div>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
    </div>
    <br />
    <div>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
    </div>
    <br />
  </DSFLoadingBox>
);
Primary.args = {
  loading: true,
};
