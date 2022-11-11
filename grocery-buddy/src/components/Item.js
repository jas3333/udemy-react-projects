import { BsTrashFill } from 'react-icons/bs';
import { AiTwotoneEdit } from 'react-icons/ai';

const Item = ({ items, removeItem, editItem }) => {
    const { id, item } = items;
    return (
        <div className='container-row align-center space-lg resize-md bg-blue-grey pad-md border-rnd-I'>
            <h4>{item}</h4>
            <div>
                <AiTwotoneEdit className='margin-right-sm fc-green' onClick={() => editItem(id)} />
                <BsTrashFill className='fc-red' onClick={() => removeItem(id)} />
            </div>
        </div>
    );
};

export default Item;
