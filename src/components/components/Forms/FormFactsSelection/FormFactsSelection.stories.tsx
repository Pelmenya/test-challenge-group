import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { initializeStore } from 'redux/store';
import { getInitialState } from 'redux/reducers/getInitalState';

import { WrapperCenter } from '../../WrapperCenter/WrapperCenter';
import { FormFactsSelection } from './FormFactsSelection';

export default {
    title: 'TEST-CHALLENGE-GROUP/components/Forms/FormFactsSelection',
    component: FormFactsSelection,
} as ComponentMeta<typeof FormFactsSelection>;

const { store } = initializeStore(getInitialState());

const Template: ComponentStory<typeof FormFactsSelection> = () => (
    <Provider store={store}>
        <WrapperCenter className="wrapper-center wrapper-center_full-screen-black">
            <FormFactsSelection />
        </WrapperCenter>
    </Provider>
);

export const FormFactsSelectionTemplate = Template.bind({});
