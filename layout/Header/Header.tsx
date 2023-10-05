import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import cn from 'classnames';

import { IHeaderProps } from './Header.props';
import Logo from '../../icons/Logo.svg';
import ButtonIcon from '@/components/ButtonIcon';

import styles from './Header.module.css';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar';

const Header = ({ className, ...props }: IHeaderProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const route = useRouter();

    useEffect(() => {
        setIsOpen(false);
    }, [route]);

    const variant = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20,
            }
        },
        closed: {
            opacity: 0,
            x: '100%'
        }
    };

    return (
        <div className={cn(className, styles.header)} {...props}>
            <Logo />
            <ButtonIcon appearance='primary' icon='menu' onClick={ () =>  setIsOpen(true) }/>
            <motion.div
                animate={isOpen ? 'opened' : 'closed'}
                initial="closed"
                variants={variant}
                className={styles.moduleMenu}

            >
                <Sidebar className={styles.sidebar} />
                <ButtonIcon appearance='white' icon='close' className={styles.closeButton} onClick={ () =>  setIsOpen(false) }/>
            </motion.div>
        </div>
    );
};

export default Header;
