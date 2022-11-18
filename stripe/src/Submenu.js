import { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
    const {
        submenu,
        location,
        page: { page, links },
    } = useGlobalContext();

    const container = useRef(null);
    const [columns, setColumns] = useState('col-2');

    useEffect(() => {
        setColumns('col-2');

        const selectedMenu = container.current;
        const { center, bottom } = location;

        selectedMenu.style.left = `${center}px`;
        selectedMenu.style.top = `${bottom}px`;

        if (links.length === 3) setColumns('col-3');
        if (links.length > 3) setColumns('col-4');
    }, [location]);

    return (
        <aside className={`${submenu ? 'submenu show' : 'submenu'}`} ref={container}>
            <h4>{page}</h4>
            <div className={`submenu-center ${columns}`}>
                {links.map((link, index) => {
                    const { label, icon, url } = link;
                    return (
                        <a href={url} key={index}>
                            {icon}
                            {label}
                        </a>
                    );
                })}
            </div>
        </aside>
    );
};

export default Submenu;
