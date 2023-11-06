import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    isOpen: true,
    children: 'xuila100',

};

export const Dark = Template.bind({});

Dark.args = {
    isOpen: true,
    children: 'xuila100',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
