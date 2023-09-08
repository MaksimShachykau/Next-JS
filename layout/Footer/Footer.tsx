import React from 'react';
import cn from 'classnames';
import { format } from 'date-fns';

import { IFooterProps } from './Footer.props';
import styles from './Footer.module.css';

const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
    return (
        <footer {...props} className={cn(className, styles.footer)}>
            <div className={styles.owlText}>OwlTop © 2020 - {format(new Date(), 'yyyy')} All rights reserved</div>
            <a href='#' target='_bank' className={styles.terms}>Terms of use</a>
            <a href='#' target='_bank' className={styles.policy}>Privacy Policy</a>
        </footer>
    );
};

export default Footer;
