import React from 'react';

const MenuItem = ({ item }) => {
    const { image, name, recipe, price } = item;

    return (
        <div className='flex gap-2 items-center justify-center'>
            <figure className=''>
                <img className='w-20 rounded-full rounded-tl-none' src={image} alt={name} />
            </figure>
            <div className='space-y-2'>
                <div className='flex justify-between'>
                    <h4 className='font-cinzel text-xl'>{name} ---------</h4>
                    <p className='text-amber-400'>${price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;