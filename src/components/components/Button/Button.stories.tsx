import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../styles/fonts.css';
import { Button } from './Button';
import { WrapperCenter } from '../WrapperCenter/WrapperCenter';

export default {
    title: 'TEST-CHALLENGE-GROUP/components/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <WrapperCenter className="wrapper-center">
        <Button type={args.type} className={args.className} text={args.text}>
            {args.children}
        </Button>
    </WrapperCenter>
);

export const ButtonOrange = Template.bind({});
ButtonOrange.args = {
    text: 'Текст',
    className: 'button button_orange',
    type: 'button',
};

export const ButtonLightOrange = Template.bind({});
ButtonLightOrange.args = {
    text: 'Текст',
    className: 'button button_light-orange',
    type: 'button',
};
