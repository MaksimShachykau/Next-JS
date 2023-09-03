import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IHTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>{
    tag: 'h1' | 'h2' | 'h3',
    children: ReactNode
}
