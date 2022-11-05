import { useState, useEffect } from 'react';
import data from '../data';

import Slide from './Slide';

const SlideController = () => {
    const [person, setPerson] = useState(data);
    const [index, setIndex] = useState(0);
    const length = person.length - 1;

    const next = () => {
        index === length ? setIndex(0) : setIndex(index + 1);
    };
    const prev = () => {
        index === 0 ? setIndex(length) : setIndex(index - 1);
    };

    useEffect(() => {
        if (index < 0) setIndex(length);
        if (index > length) setIndex(0);
    }, [index, person, length]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 8000);

        return () => clearInterval(slider);
    }, [index, length]);

    return (
        <section className='section-center'>
            {person.map((value, valueIndex) => {
                let position = 'nextSlide';

                if (valueIndex === index) position = 'activeSlide';
                if (valueIndex === index - 1 || (index === 0 && valueIndex === length)) {
                    position = 'lastSlide';
                }
                return <Slide key={valueIndex} position={position} {...value} next={next} prev={prev} />;
            })}
        </section>
    );
};

export default SlideController;
