import rgbToHex from './utils/hexUtils';
const SingleColor = ({ rgb }) => {
    const hexString = rgbToHex(...rgb);

    const color = { backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` };

    return (
        <div className='container-square border-rnd-II margin-II shadow-dark-sm ' style={color}>
            <h4>{hexString}</h4>
        </div>
    );
};

export default SingleColor;
