import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';

const Slide = ({ image, quote, title, name, position, next, prev }) => {
    return (
        <article className={position}>
            <BsChevronDoubleRight className='next' onClick={next} />
            <img src={image} alt='' className='profile-md' />
            <h2>{name}</h2>
            <h3 className='title'>{title}</h3>
            <p>{quote}</p>
            <BsChevronDoubleLeft className='prev' onClick={prev} />
        </article>
    );
};

export default Slide;
