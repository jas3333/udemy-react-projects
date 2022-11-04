import { useState, useEffect } from 'react';
import './app.css';

import Loading from './components/loading';
import Tours from './components/tours';

const URL = 'https://course-api.com/react-tours-project';

function App() {
    const [loading, setLoading] = useState(false);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        setLoading(true);
        const response = await fetch(URL);
        const tourData = await response.json();

        setTours(tourData);
        setLoading(false);
    };

    const clickHandler = (id) => {
        setTours(tours.filter((tour) => tour.id !== id));
    };

    useEffect(() => {
        fetchTours();
    }, []);

    if (loading) {
        return (
            <div className='loading'>
                <Loading />
            </div>
        );
    }

    return (
        <section className='main'>
            <div className='title'>
                <h2>Our Tours</h2>
                <div className='underline'></div>
            </div>
            <div>
                {tours.map((tour) => (
                    <Tours {...tour} click={() => clickHandler(tour.id)} />
                ))}
            </div>
        </section>
    );
}

export default App;
