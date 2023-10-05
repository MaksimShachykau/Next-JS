import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import up from './icons/ArrowUp.svg';
import close from './icons/Close.svg';
import menu from './icons/Menu.svg';
import glass from './icons/glass.svg';

export const icons = {
    up,
    close,
    menu,
    glass
};

export type IconsType = keyof typeof icons;

export interface IButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'primary' | 'white',
    icon: IconsType
}
