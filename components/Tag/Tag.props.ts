import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    size?: 's' | 'm',
    color?: 'ghost' | 'red' | 'green' | 'primary' | 'grey',
    href?: string
}
