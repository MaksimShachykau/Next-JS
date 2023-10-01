import cn from 'classnames';
import { forwardRef, ForwardedRef } from 'react';
import { ITextAriaProps } from "./TextAria.props";

import styles from './TextAria.module.css';

const TextAria = forwardRef(({ className, error, ...props }: ITextAriaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(className, styles.textAriaWrapper)}>
            <textarea className={cn(styles['TextAria'], {
                [styles.textAriaError]: !!error
            })} ref={ref} {...props} />
            <span className={styles.errorText}>{error?.message}</span>
        </div>
    );
});

export default TextAria;
