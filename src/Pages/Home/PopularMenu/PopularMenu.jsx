import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import useMenus from '../../../Hooks/useMenus';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const category = 'popular';
    const { menus, error, loading } = useMenus(category);

    if(loading){
        return <div className='p-20 flex justify-center items-center'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    }

    if(error){
        return error;
    }

    return (
        <section className='my-20 space-y-10'>
            <SectionTitle subTitle="Check it out" title="from our menu"></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    menus.map( menu => <MenuItem key={menu._id} item={menu}></MenuItem>)
                }
            </div>
            <div className='flex justify-center items-center'>
                <button className='btn lg:btn-lg rounded-xl shadow-neutral shadow-xl'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;