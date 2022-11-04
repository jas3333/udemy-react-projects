import './index.css';
import Menu from './components/menu';
import { useState } from 'react';
import data from './data';

function App() {
    const [menuItems, setMenuItems] = useState(data);

    const menuCategories = [...new Set(data.map((item) => item.category))];

    const filterItems = (category) => {
        const newItems = data.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    const allItems = () => {
        setMenuItems(data);
    };

    return (
        <header>
            <div className='container'>
                <div className='menu-header'>
                    <h1>Our Menu</h1>
                    <div className='underline'></div>
                </div>
                <Menu menuCategories={menuCategories} items={menuItems} filterItem={filterItems} allItems={allItems} />
            </div>
        </header>
    );
}

export default App;
