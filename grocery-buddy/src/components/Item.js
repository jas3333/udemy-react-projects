import { BsTrashFill } from 'react-icons/bs';
import { AiTwotoneEdit } from 'react-icons/ai';

const Item = ({ thing, removeItem, id }) => {
    return (
        <div className='container-row align-center space-lg resize-md bg-blue-grey pad-md border-rnd-I'>
            <h4>{thing}</h4>
            <div>
                <AiTwotoneEdit className='margin-right-sm fc-green' />
                <BsTrashFill className='fc-red' onClick={() => removeItem(id)} />
            </div>
        </div>
    );
};

export default Item;
