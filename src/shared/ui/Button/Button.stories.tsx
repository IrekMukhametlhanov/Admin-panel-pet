import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

export const PrimaryBtn = Template.bind({});
PrimaryBtn.args = {
    children: 'Text',
    theme: ThemeButton.Primary
}

export const PrimaryBtnDark = Template.bind({});
PrimaryBtnDark.args = {
    children: 'Text',
    theme: ThemeButton.Primary
}



OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryBtnDark.decorators = [ThemeDecorator(Theme.DARK)];