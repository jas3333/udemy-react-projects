import { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

const Questions = ({ title, info }) => {
    const [show, setShow] = useState(false);
    return (
        <div className='questions'>
            <div className='question'>
                <h3>{title}</h3>
                {show ? (
                    <button className='btn' onClick={() => setShow(!show)}>
                        <AiOutlineMinusCircle />
                    </button>
                ) : (
                    <button className='btn' onClick={() => setShow(!show)}>
                        <AiOutlinePlusCircle />
                    </button>
                )}
            </div>
            {show && <p>{info}</p>}
        </div>
    );
};

export default Questions;
