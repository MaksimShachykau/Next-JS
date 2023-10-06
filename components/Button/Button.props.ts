import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface IButtonProps extends
Omit<
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'ref'
> {
    appearance: 'primary' | 'ghost',
    children: ReactNode,
    arrow?: 'right' | 'down' | 'none'
}
