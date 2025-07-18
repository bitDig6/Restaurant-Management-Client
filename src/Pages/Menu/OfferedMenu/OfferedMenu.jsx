import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import useMenus from '../../../Hooks/useMenus';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const OfferedMenu = () => {
    const { menus, loading, error } = useMenus('offered');

    if (loading) {
        return <div className='p-20 flex justify-center items-center'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    }

    if (error) {
        return error;
    }

    return (
        <section className='my-20'>
            <SectionTitle subTitle="Don't miss" title="today's offers"></SectionTitle>
            <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    menus.map(menu => <MenuItem key={menu._id} item={menu}></MenuItem>)
                }
            </div>
            <div className='mt-5 flex justify-center'>
                <button className='btn md:btn-lg btn-outline border-0 border-b-2 rounded-xl'>Order your Favorite Food</button>
            </div>
        </section>
    );
};

export default OfferedMenu;