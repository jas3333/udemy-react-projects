import Item from './Item';
import Alert from './Alert';
import { useState, useEffect } from 'react';

const getLocalStorage = () => {
    let list = localStorage.getItem('list');

    if (list) return JSON.parse(localStorage.getItem('list'));
    else return [];
};

const Form = () => {
    const [item, setItem] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [edit, setEdit] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });

    const removeItem = (id) => {
        setList(list.filter((item) => item.id !== id));
        showAlert(true, 'success', 'Successfully removed item.');
    };
    const editItem = (id) => {
        const selectedItem = list.find((item) => item.id === id);
        setEdit(true);
        setEditID(id);
        setItem(selectedItem.item);
    };
    const showAlert = (show = false, type = '', message = '') => {
        setAlert({ show, type, message });
    };

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    const submitHandler = (event) => {
        event.preventDefault();

        if (!item) {
            showAlert(true, 'error', 'Enter an item before submitting.');
        } else if (item && edit) {
            setList(
                list.map((items) => {
                    if (items.id === editID) {
                        return { ...items, item: item };
                    }
                    return items;
                })
            );
            setItem('');
            setEditID(null);
            setEdit(false);
        } else {
            const newItem = { id: Math.floor(Math.random() * 10000), item: item };
            setList([...list, newItem]);
            setItem('');
            showAlert(true, 'success', 'Item added');
        }
    };

    return (
        <>
            <div className='alert'>{alert.show && <Alert {...alert} showAlert={showAlert} />}</div>
            <div className='container-col '>
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
                        {edit ? 'Edit' : 'Submit'}
                    </button>
                </form>
                {list.map((items, index) => {
                    return (
                        <div className='container-row margin-top-sm' key={index}>
                            <Item items={items} id={items.id} removeItem={removeItem} editItem={editItem} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Form;
