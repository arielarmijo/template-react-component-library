import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from '@storybook/addon-actions'
import Button from "./Button";
import { log } from '../../utils';

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hola Mundo',
  onClick: action('onClick')
};
