import Item from './Item';
import { useState } from 'react';
const Form = () => {
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);

    const removeItem = (selected) => {
        setList(list.filter((item) => selected === item));
        console.log(selected);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setList([...list, { item: item, id: Math.floor(Math.random() * 1000) }]);
        console.log(list);
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
                return (
                    <div className='container-row margin-top-sm' key={index}>
                        <Item {...items} removeItem={removeItem} />
                    </div>
                );
            })}
        </div>
    );
};

export default Form;
