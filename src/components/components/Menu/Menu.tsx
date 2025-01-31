import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { Menu } from '@headlessui/react';

import { ROUTES } from '../../../utils/constants/routes';

import './Menu.css';
import imageMenuButton from '../../../../static/images/menu.svg';
import { Image } from '../Image/Image';

/** Использовать с BrowserRouter React, так как компонент Link */
export const MenuComponent = () => (
    <Menu>
        <Menu.Button className="menu-item menu-item_button">
            <Image className="image image_icon" imagePath={imageMenuButton} />
        </Menu.Button>
        <Menu.Items className="menu-items">
            {ROUTES.map((item) => (
                <Menu.Item key={item.name}>
                    {({ active }) => (
                        <Link
                            key={`${item.name}-link`}
                            to={item.link}
                            className={cn('menu-item', { 'menu-item_active': active })}
                        >
                            {item.name}
                        </Link>
                    )}
                </Menu.Item>
            ))}
        </Menu.Items>
    </Menu>
);
