import { useState, useEffect } from 'react';
import SingleColor from './SingleColor.js';
import rgbToHex from './utils/hexUtils';
import './index.css';

import Values from 'values.js';

function App() {
    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(255);
    const [blue, setBlue] = useState(255);

    const [color, setColor] = useState(rgbToHex(red, green, blue));
    const [list, setList] = useState([]);

    useEffect(() => {
        let colors = new Values(color).all(10);
        setList(colors);
        const hexColor = rgbToHex(red, green, blue);
        setColor(hexColor);
    }, [red, green, blue, color]);

    return (
        <div className='container-col '>
            <form className='container-row align-center'>
                <div className='container-row align-center'>
                    <h4 className='margin-right-sm'>Color Generator: </h4>
                    <div className='hex-background'>
                        <h4>{color}</h4>
                    </div>
                </div>
                <div className='container-row align-center'>
                    <p className='margin-left-md width-sm '>R: {red} </p>
                    <input
                        type='range'
                        name='red'
                        value={red}
                        min={0}
                        max={255}
                        onChange={(event) => setRed(event.target.value)}
                    />
                </div>
                <div className='container-row align-center'>
                    <p className='margin-left-md width-sm'>G: {green}</p>
                    <input
                        type='range'
                        name='green'
                        value={green}
                        min={0}
                        max={255}
                        onChange={(event) => setGreen(event.target.value)}
                    />
                </div>
                <div className='container-row align-center'>
                    <p className='margin-left-md width-sm'>B: {blue}</p>
                    <input
                        type='range'
                        name='blue'
                        value={blue}
                        min={0}
                        max={255}
                        onChange={(event) => setBlue(event.target.value)}
                    />
                </div>
            </form>
            <section className='container-row resize-lg border-rnd-III shadow-dark-sm center '>
                {list.map((color, index) => {
                    return <SingleColor key={index} {...color} />;
                })}
            </section>
        </div>
    );
}

export default App;
