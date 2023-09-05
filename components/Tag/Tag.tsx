import React from 'react';
import cn from 'classnames';

import { ITagProps } from './Tag.props';

import styles from './Tag.module.css';

const Tag = ({ children, href, className, size='m', color='primary' }: ITagProps): JSX.Element => {
    return (
        <div className={
            cn(
                styles.Tag,
                className,
                {
                    [styles.small]: size === 's',
                    [styles.medium]: size === 'm',
                    [styles.red]: color === 'red',
                    [styles.ghost]: color === 'ghost',
                    [styles.grey]: color === 'grey',
                    [styles.primary]: color === 'primary',
                    [styles.green]: color === 'green',
                }
            )
        }>
            { href ? <a href={ href }>{ children }</a> : <>{ children }</> }
        </div>
    );
};

export default Tag;
