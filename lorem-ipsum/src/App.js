import { useState } from 'react';
import './index.css';
import data from './data';

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let amount = parseInt(count);

        if (count <= 0) amount = 1;
        if (count > 8) amount = 8;

        setText(data.slice(0, amount));
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
            <article>
                {text.map((item, index) => {
                    return (
                        <div className='container-md'>
                            <p key={index}>{item}</p>
                        </div>
                    );
                })}
            </article>
        </section>
    );
}

export default App;
