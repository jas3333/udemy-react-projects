import Review from './components/review';
import './app.css';

function App() {
    return (
        <div className='container'>
            <div className='header'>
                <h1>Our Reviews</h1>
                <div className='underline'></div>
            </div>
            <Review />
        </div>
    );
}

export default App;
