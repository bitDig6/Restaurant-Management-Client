import React from 'react';

const SectionTitle = ({ sub, title}) => {
    return (
        <div className='text-center'>
            <h5 className='italic'>---{sub}---</h5>
            <div className='w-1/3 mx-auto divider'></div>
            <h2 className='uppercase'>{title}</h2>
            <div className='w-1/3 mx-auto divider'></div>
        </div>
    );
};

export default SectionTitle;