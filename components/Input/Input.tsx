import cn from 'classnames';
import { forwardRef, ForwardedRef } from 'react';
import { IInputProps } from "./Input.props";

import styles from './Input.module.css';

const Input = forwardRef(({ className, error, ...props }: IInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <div className={cn(className, styles.inputWrapper)}>
            <input
                className={cn(styles['Input'], {
                    [styles.InputError]: !!error
                })}
                ref={ref}
                {...props}
            />
            <span className={styles.errorText}>{error?.message}</span>
        </div>
    );
});

export default Input;
