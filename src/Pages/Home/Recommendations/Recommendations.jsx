import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import useMenus from '../../../Hooks/useMenus';
import MenuCard from '../../Shared/MenuCard/MenuCard';

const Recommendations = () => {
    const category = "offered";
    const { menus, loading, error } = useMenus(category);

    if (loading) {
        return <div className='p-20 flex justify-center items-center'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    }

    if (error) {
        return error;
    }

    return (
        <section className='my-20 space-y-10'>
            <SectionTitle subTitle="Should Try" title="chef recommendations"></SectionTitle>
            <div className='lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    menus.map( menu => <MenuCard key={menu._id} item={menu}></MenuCard>)
                }
            </div>
        </section>
    );
};

export default Recommendations;