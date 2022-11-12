import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import links from '.././data';
const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <nav>
            <div className='navbar'>
                <div className='nav-header'>
                    <h1>jas-devs</h1>
                    <FaBars
                        onClick={() => setShowLinks(!showLinks)}
                        className={`toggle-icon ${showLinks ? 'rotate-true' : ''}`}
                    />
                </div>
                <div className={`${showLinks ? 'links-container show-container' : 'links-container'}`}>
                    {links.map((link) => {
                        const { id, url, text } = link;
                        return (
                            <a href={url} key={id}>
                                {text}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
