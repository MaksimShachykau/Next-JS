import React from 'react';

import { ISidebarProps } from './Sidebar.Props';

const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
    return(
        <div {...props}>
            Sidebar
        </div>
    );
};

export default Sidebar;
