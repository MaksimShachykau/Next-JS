import cn from 'classnames';
import { forwardRef, ForwardedRef } from 'react';
import { IInputProps } from "./Input.props";

import styles from './Input.module.css';

const Input = forwardRef(({ className, ...props }: IInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <input className={cn(className, styles['Input'])} ref={ref} {...props} />
    );
});

export default Input;
