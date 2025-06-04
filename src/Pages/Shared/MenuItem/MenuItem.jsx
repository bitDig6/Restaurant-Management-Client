import React from 'react';

const MenuItem = ({ item }) => {
    const { image, name, recipe, price } = item;

    return (
        <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
            <figure>
                <img className='lg:w-48 rounded-[50%] lg:rounded-full lg:rounded-tl-none' src={image} alt={name} />
            </figure>
            <div className='space-y-2'>
                <div className='flex justify-between flex-wrap'>
                    <h4 className='font-cinzel text-xl'>{name} ---------</h4>
                    <p className='text-amber-400'>${price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;