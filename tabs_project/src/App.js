import { useState, useEffect } from 'react';
import './index.css';

import Job from './components/job';

const URL = 'https://course-api.com/react-tabs-project';

function App() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const changeJob = (index) => {
        setValue(index);
    };

    const fetchJobs = async () => {
        setLoading(true);

        const response = await fetch(URL);
        const jobsData = await response.json();

        setJobs(jobsData);
        setLoading(false);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    if (loading) {
        return (
            <div className='container-row center margin-top-lg'>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <main>
            <div className='container-row center'>
                <div className='container-col margin-top-lg margin-right-lg'>
                    {jobs.map((job, index) => {
                        return (
                            <button
                                className={`btn ${index === value && 'btn-active'}`}
                                onClick={() => changeJob(index)}
                            >
                                {job.company}
                            </button>
                        );
                    })}
                </div>
                <Job {...jobs[value]} />
            </div>
        </main>
    );
}

export default App;
