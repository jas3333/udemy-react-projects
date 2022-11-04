import { useState } from 'react';
const Tours = ({ id, name, image, info, price, click }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className='tour'>
            <img src={image} alt={name} />
            <footer>
                <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>${price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)} className='read-more'>
                        {readMore ? '...show less' : 'read more'}
                    </button>
                </p>
                <div className='btn'>
                    <button type='button' className='delete-btn' onClick={click}>
                        Not interested
                    </button>
                </div>
            </footer>
        </article>
    );
};

export default Tours;
