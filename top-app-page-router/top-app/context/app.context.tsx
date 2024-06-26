import { MenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/toppage.interface";
import { PropsWithChildren, ReactNode, createContext, useEffect, useState } from "react";

export interface IAppContext {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    setMenu?: (newMenu: MenuItem[]) => void
}
export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Courses });

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element => {
    const [menuState, setMenuState] = useState<MenuItem[]>(menu);
    const setMenu = (newMenu: MenuItem[]) => {
        setMenuState(newMenu);
    };
    useEffect(() => {
        setMenuState(menu);
    }, [menu])
    return (
        <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
            {children}
        </AppContext.Provider>
    );
};
