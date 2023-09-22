import React from 'react';
import cn from 'classnames';

import { ISidebarProps } from './Sidebar.Props';
import Logo from '../../icons/Logo.svg';

import styles from './Sidebar.module.css';
import Menu from '../Menu';
import Search from '@/components/Search';

const Sidebar = ({ className, ...props }: ISidebarProps): JSX.Element => {
    return(
        <div className={cn(className, {
            [styles['sidebar']]: true
        })} {...props}>
            <Logo className={styles['logo']} />
            <Search />
            <Menu />
        </div>
    );
};

export default Sidebar;
