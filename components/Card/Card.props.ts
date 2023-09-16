import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface ICardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    background?: 'white' | 'blue';
    children: ReactNode
}
