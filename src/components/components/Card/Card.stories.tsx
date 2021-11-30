// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../styles/fonts.css';

import { Card } from './Card';

import { WrapperCenter } from '../WrapperCenter/WrapperCenter';

export default {
    title: 'TEST-CHALLENGE-GROUP/components/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
    <WrapperCenter className="wrapper-center">
        <Card {...args} />
    </WrapperCenter>
);

export const CardTemplate = Template.bind({});
CardTemplate.args = {
    title: 'Cats',
    date: '15, november, 2020',
    verified: 'Yes',
};
