import { useState } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { IoDice } from 'react-icons/io5';
import data from '../data.js';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = data[index];

    const next = () => {
        index === data.length - 1 ? setIndex(0) : setIndex(index + 1);
    };

    const prev = () => {
        index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);
    };

    const random = () => {
        const randomNumber = Math.trunc(Math.random() * data.length);
        setIndex(randomNumber);
    };

    return (
        <div className='review-container'>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h4>{job}</h4>
            <p className='review-text'>{text}</p>
            <div className='button-container'>
                <button className='btn-prev' type='button' onClick={prev}>
                    <GoChevronLeft />
                </button>
                <button type='button' className='btn-random' onClick={random}>
                    <IoDice />
                </button>
                <button className='btn-next' type='button' onClick={next}>
                    <GoChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Review;
