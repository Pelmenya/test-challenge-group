import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { WrapperCenter } from '../../WrapperCenter/WrapperCenter';
import { FormFactsSelection } from './FormFactsSelection';

export default {
    title: 'TEST-CHALLENGE-GROUP/components/Forms/FormFactsSelection',
    component: FormFactsSelection,
} as ComponentMeta<typeof FormFactsSelection>;

const Template: ComponentStory<typeof FormFactsSelection> = () => (
    <WrapperCenter className="wrapper-center wrapper-center_full-screen-black">
        <FormFactsSelection />
    </WrapperCenter>
);

export const FormFactsSelectionTemplate = Template.bind({});
