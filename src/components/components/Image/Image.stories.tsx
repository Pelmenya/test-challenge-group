import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from './Image';
import { WrapperCenter } from '../WrapperCenter/WrapperCenter';

import imgCloseCross from '../../../../static/images/close-cross.svg';
import imgLogo from '../../../../static/images/logo.svg';
import imgErrorLogo from '../../../../static/images/error-logo.svg';

export default {
    title: 'TEST-CHALLENGE-GROUP/components/Images',
    component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
    <WrapperCenter className="wrapper-center">
        <Image className={args.className} imagePath={args.imagePath} />
    </WrapperCenter>
);

export const ImageCloseCross = Template.bind({});
ImageCloseCross.args = {
    className: 'image_close-cross',
    imagePath: imgCloseCross,
};

export const ImageLogo = Template.bind({});
ImageLogo.args = {
    className: 'image_logo',
    imagePath: imgLogo,
};

export const ImageErrorLogo = Template.bind({});
ImageErrorLogo.args = {
    className: 'image_logo',
    imagePath: imgErrorLogo,
};
