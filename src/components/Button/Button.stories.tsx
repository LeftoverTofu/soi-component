import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Marbella/Button",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Primary.args = {
  variant: "primary",
  disabled: false,
  text: "Primary",
};

export const Secondary: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Secondary.args = {
  variant: "primary",
  disabled: false,
  text: "Secondary",
};

export const Disabled: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Disabled.args = {
  variant: "primary",
  disabled: true,
  text: "Disabled",
};

export const Small: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Small.args = {
  variant: "primary",
  disabled: false,
  size: "small",
  text: "Small",
};

export const Medium: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Medium.args = {
  variant: "primary",
  disabled: false,
  size: "medium",
  text: "Medium",
};

export const Large: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Large.args = {
  variant: "primary",
  disabled: false,
  size: "large",
  text: "Large",
};
