import React from 'react';

const SectionTitle = ({ title, subTitle}) => {
    return (
        <div className='text-center'>
            <h6 className='italic text-xs md:text-base text-amber-400'>---{subTitle}---</h6>
            {/* <p className='text-amber-400 mb-2'>---{subTitle}---</p> */}

            <div className='w-2/3 mx-auto divider divide-gray-600'></div>
            {/* <div className='divider divide-gray-600'></div> */}

            <h2 className='uppercase text-xl md:text-4xl'>{title}</h2>
            {/* <h3 className='text-4xl border-y-4 py-4'>{title}</h3> */}

            <div className='w-2/3 mx-auto divider'></div>
            {/* <div className='divider divide-gray-600'></div> */}

        </div>
    );
};

export default SectionTitle;