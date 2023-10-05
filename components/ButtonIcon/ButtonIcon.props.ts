import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import up from './ArrowUp.svg';
import close from './Close.svg';
import menu from './Menu.svg';

export const icons = {
    up,
    close,
    menu
};

export type IconsType = keyof typeof icons;

export interface IButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'primary' | 'white',
    icon: IconsType
}
