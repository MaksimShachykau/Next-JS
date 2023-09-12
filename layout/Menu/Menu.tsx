import { AppContext } from '@/context/app.context';
import React, { useContext } from 'react';

const Menu = ():JSX.Element => {
    const { menu } = useContext(AppContext);

    return (
        <ul>
          {menu && menu.map(m => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}
        </ul>
    );
};

export default Menu;
