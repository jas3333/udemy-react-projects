import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const contextValues = {
        sidebar,
        setSidebar,
        showModal,
        setShowModal,
    };

    return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
