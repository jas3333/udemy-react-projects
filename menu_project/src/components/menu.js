import Button from './buttons';

const Menu = ({ menuCategories, items, filterItem, allItems }) => {
    return (
        <div className='container'>
            <Button menuCategories={menuCategories} filterItem={filterItem} allItems={allItems} />
            <div className='section-center'>
                {items.map((menuItem) => {
                    const { id, price, img, desc, title } = menuItem;
                    return (
                        <article key={id} className='menu-item'>
                            <img src={img} alt={title} className='photo' />
                            <div className='item-info'>
                                <h2>{title}</h2>
                                <p>{desc}</p>
                                <h3>${price}</h3>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default Menu;
