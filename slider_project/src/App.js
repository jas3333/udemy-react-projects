import SlideController from './components/SlideController';

function App() {
    return (
        <>
            <div className='container-row '>
                <div className='container-col margin-auto align-center'>
                    <h2>
                        <span style={{ color: 'red' }}>/</span> Reviews
                    </h2>
                    <div className='underline-md white'></div>
                </div>
            </div>
            <SlideController />
        </>
    );
}

export default App;
