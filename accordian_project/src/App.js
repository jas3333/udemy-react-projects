import './app.css';
import { useState } from 'react';
import data from './data';
import Questions from './components/Questions';

function App() {
    const [questions, setQuestions] = useState(data);
    return (
        <div className='container'>
            <div className='title'>
                <h2>Questions and Answers About Login</h2>
            </div>
            <div>
                {questions.map((question) => {
                    return <Questions key={question.id} {...question} />;
                })}
            </div>
        </div>
    );
}

export default App;
