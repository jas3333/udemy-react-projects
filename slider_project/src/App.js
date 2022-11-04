import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import data from './data';

function App() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < 0) {
            setIndex(people.length - 1);
        }
        if (index > people.length - 1) setIndex(0);
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 7000);
        return () => clearInterval(slider);
    }, [index]);

    return (
        <div className='container-row '>
            <div className='container-col margin-auto align-center'>
                <h2>
                    <span style={{ color: 'red' }}>/</span> Reviews
                </h2>
                <div className='underline-md white'></div>
                <section className='section-center'>
                    {people.map((person, personIndex) => {
                        const { id, image, name, title, quote } = person;
                        let position = 'nextSlide';
                        if (personIndex === index) {
                            position = 'activeSlide';
                        }

                        if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                            position = 'lastSlide';
                        }
                        return (
                            <article key={id} className={position}>
                                <button className='next' onClick={() => setIndex(index + 1)}>
                                    <BsChevronDoubleRight />
                                </button>
                                <img src={image} alt='' className='profile-md' />
                                <h2>{name}</h2>
                                <h3 className='light'>{title}</h3>
                                <p>{quote}</p>
                                <button className='prev' onClick={() => setIndex(index - 1)}>
                                    <BsChevronDoubleLeft />
                                </button>
                            </article>
                        );
                    })}
                </section>
            </div>
        </div>
    );
}

export default App;
