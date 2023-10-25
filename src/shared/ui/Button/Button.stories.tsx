import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ThemeButton } from './Button';

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

export const BACKGROUND_Inverted = Template.bind({});
BACKGROUND_Inverted.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_Inverted
}

export const BACKGROUND = Template.bind({});
BACKGROUND.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND
}

export const square = Template.bind({});
square.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    square: true
}

export const squareSizeM = Template.bind({});
squareSizeM.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: ButtonSize.m
}

export const squareSizel = Template.bind({});
squareSizel.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: ButtonSize.l
}

export const squareSizeXl = Template.bind({});
squareSizeXl.args = {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: ButtonSize.xl
}







OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
PrimaryBtnDark.decorators = [ThemeDecorator(Theme.DARK)];