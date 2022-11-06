import { useState } from 'react';
import './index.css';

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className='container-col align-center'>
            <h1>Create better Lorem!</h1>
            <div className='underline-lg white'></div>
            <div className='container-col border-sm margin-top-md '>
                <form className='center' onSubmit={handleSubmit}>
                    <div className='container-row align-center '>
                        <label for='amount' className='margin-right-sm'>
                            Paragraphs
                        </label>
                        <input
                            type='number'
                            value={count}
                            onChange={(event) => setCount(event.target.value)}
                            id='amount'
                            className='input-sm'
                        />
                    </div>
                    <button type='submit' className='btn-line resize-sm '>
                        Generate
                    </button>
                </form>
            </div>
            <article></article>
        </section>
    );
}

export default App;
