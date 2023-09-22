import cn from 'classnames';
import { ITextAriaProps } from "./TextAria.props";

import styles from './TextAria.module.css';

const TextAria = ({ className, ...props }: ITextAriaProps): JSX.Element => {
    return (
        <textarea className={cn(className, styles['TextAria'])} {...props} />
    );
};

export default TextAria;
