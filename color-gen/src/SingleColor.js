import rgbToHex from './utils/hexUtils';
import { useState, useEffect } from 'react';

const SingleColor = ({ rgb, weight, index }) => {
    const [alert, setAlert] = useState(false);
    const hexString = rgbToHex(...rgb);

    const color = { backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [alert]);

    return (
        <div
            className={`container-square border-rnd-II margin-II shadow-dark-sm ${index <= 10 && 'fc-dark'}`}
            style={color}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hexString);
            }}
        >
            <p>{weight}%</p>
            <h4>{hexString}</h4>
            {alert && <p className='margin-top-lg'>Copied to clipboard</p>}
        </div>
    );
};

export default SingleColor;
