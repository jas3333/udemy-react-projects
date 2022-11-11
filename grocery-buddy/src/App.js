import { useState } from 'react';
import Form from './components/Form';
import './index.css';

function App() {
    return (
        <section className='container-col align-center'>
            <div className='container-col resize-md shadow-dark-sm margin-top-lg'>
                <h2 className='center'>Grocery Buddy</h2>
                <div className='underline-sm auto white'></div>
                <Form />
            </div>
        </section>
    );
}

export default App;
