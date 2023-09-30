import cn from 'classnames';
import { forwardRef, ForwardedRef } from 'react';
import { ITextAriaProps } from "./TextAria.props";

import styles from './TextAria.module.css';

const TextAria = forwardRef(({ className, ...props }: ITextAriaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <textarea className={cn(className, styles['TextAria'])} ref={ref} {...props} />
    );
});

export default TextAria;
