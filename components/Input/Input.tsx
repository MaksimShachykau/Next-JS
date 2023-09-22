import cn from 'classnames';
import { IInputProps } from "./Input.props";

import styles from './Input.module.css';

const Input = ({ className, ...props }: IInputProps): JSX.Element => {
    return (
        <input className={cn(className, styles['Input'])} {...props} />
    );
};

export default Input;
