import React from 'react';
import './Loader.css'
const Loader = () => {
    return (
        <div className='waterWrapper'>
            <div className="water"></div>
            <h1 className={'x'}>
                <span>l</span>
                <span>o</span>
                <span>a</span>
                <span>d</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </h1>
        </div>
    );
};

export default Loader;
