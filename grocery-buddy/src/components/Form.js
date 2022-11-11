import Item from './Item';
import { useState } from 'react';
const Form = () => {
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);

    const removeItem = (id) => {
        setList(list.filter((item) => item.id !== id));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const newItem = { id: Math.floor(Math.random() * 10000), item: item };
        setList([...list, newItem]);

        setItem('');
    };

    return (
        <div className='container-col'>
            <form className='container-row auto' onSubmit={submitHandler}>
                <input
                    type='text'
                    name='item'
                    value={item}
                    onChange={(event) => setItem(event.target.value)}
                    placeholder='Enter item'
                    className='resize-sm'
                />
                <button type='submit' className='btn-line resize-x-sm margin-left-sm'>
                    Submit
                </button>
            </form>
            {list.map((items, index) => {
                console.log(items.item);
                return (
                    <div className='container-row margin-top-sm' key={index}>
                        <Item thing={items.item} id={items.id} removeItem={removeItem} />
                    </div>
                );
            })}
        </div>
    );
};

export default Form;
