import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [submenu, setSubmenu] = useState(true);
    const [location, setLocation] = useState({});

    const openSidebar = () => {
        setSidebar(true);
    };
    const closeSidebar = () => {
        setSidebar(false);
    };

    const openSubmenu = (text, coordinates) => {
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
