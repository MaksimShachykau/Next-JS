import { ITopPageAdvantage } from '@/Interfaces/page.interface';
import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface IAdvantagesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {
    advantages: ITopPageAdvantage[]
}
