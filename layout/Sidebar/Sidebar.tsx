import React from 'react';

import { ISidebarProps } from './Sidebar.Props';
import Menu from '../Menu';

const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
    return(
        <div {...props}>
            <Menu />
        </div>
    );
};

export default Sidebar;
