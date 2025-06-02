import React from 'react';

const ChefBistro = () => {
    return (
        <div className='w-4/5 mx-auto my-20 p-10 lg:px-20 lg:py-36 bg-[url("https://i.ibb.co/M5pz42xf/chef-service.jpg")] bg-cover bg-no-repeat bg-center flex justify-center items-center'>

            <div className='bg-white text-black text-center p-10 space-y-3'>
                <h1 className='text-2xl font-semibold uppercase font-cinzel'>bistro boss</h1>
            <p className='text-wrap text-xs md:text-base'>We have world class chefs prepare the meals. Our menus include several famous cuisines varying from Chinese, French, Indian, Korean, and, Turkish. Our kitchen is handle by Skilled and Experienced Chefs in a very Hygienic Environment.</p>
            </div>

        </div>
    );
};

export default ChefBistro;