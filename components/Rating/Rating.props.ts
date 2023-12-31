import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IRatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    rating: number,
    isEditable?: boolean,
    error?: FieldError,
    withText?: boolean,
    setRating?: (rating: number) => void
}