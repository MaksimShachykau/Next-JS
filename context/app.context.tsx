import { createContext, PropsWithChildren, useState } from 'react';
import { IMenuItem } from "@/Interfaces/menu.interface";
import { TopLevelCategory } from "@/Interfaces/page.interface";

export interface IAppContext {
    menu: IMenuItem[];
    firstCategory: TopLevelCategory;
    setMenu?: (menuItems: IMenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Courses });

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element => {
    const [menuState, setMenuItem] = useState<IMenuItem[]>(menu);
    const setMenu = (menuItems: IMenuItem[]) => {
        setMenuItem(menuItems);
    };

    return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
        {children}
    </AppContext.Provider>;
};
