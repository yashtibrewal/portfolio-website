import React from 'react';

const CheckMark: React.FC = () => {
    return (
        <span>
            <svg
                className='w-6 h-6'
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
            >
                <polygon
                    className='fill-green-500'
                    points="226.4,283.284 134.616,192.636 74.096,259.316 233.48,416.708 512,73.084 444.792,13.812"
                />
                <polygon
                    className='fill-green-700'
                    points="274.04,149.996 274.04,109.996 0,109.996 0,498.188 345.88,498.188 345.88,409.204 
        305.88,409.204 305.88,458.188 40,458.188 40,149.996"
                />
            </svg>
        </span>
    );
};

export default CheckMark;
