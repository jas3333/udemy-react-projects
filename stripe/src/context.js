import { createContext, useContext, useState } from 'react';
import sublinks from './data';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [submenu, setSubmenu] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: '', links: [] });

    const openSidebar = () => {
        setSidebar(true);
    };
    const closeSidebar = () => {
        setSidebar(false);
    };

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setSubmenu(true);
    };
    const closeSubmenu = () => {
        setSubmenu(false);
    };

    const contextValues = {
        // --State
        sidebar,
        submenu,
        location,
        page,

        // --Functions
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
    };

    return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
