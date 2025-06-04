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

    console.log(menus);

    return (
        <section className='w-4/5 mx-auto my-20'>
            <SectionTitle subTitle="Check it out" title="from our menu"></SectionTitle>
            <div className='pt-5 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    menus.map( menu => <MenuItem key={menu._id} item={menu}></MenuItem>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;