import { useEffect, useRef } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
    const { submenu, location } = useGlobalContext();
    const container = useRef(null);

    useEffect(() => {
        const selectedMenu = container.current;
        const { center, bottom } = location;
        selectedMenu.style.left = `${center}px`;
        selectedMenu.style.top = `${bottom}px`;
    }, [location]);

    return (
        <aside className={`${submenu ? 'submenu show' : 'submenu'}`} ref={container}>
            Submenu
        </aside>
    );
};

export default Submenu;
