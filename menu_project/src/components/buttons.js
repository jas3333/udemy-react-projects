const Buttons = ({ menuCategories, filterItem, allItems }) => {
    return (
        <div className='btn-container'>
            <button className='btn' onClick={allItems}>
                All
            </button>
            {menuCategories.map((item) => {
                return (
                    <button className='btn' onClick={() => filterItem(item)}>
                        {item}
                    </button>
                );
            })}
        </div>
    );
};

export default Buttons;
