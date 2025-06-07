import useMenus from '../../../Hooks/useMenus';
import MenuCard from '../../Shared/MenuCard/MenuCard';

const MenuTab = ({ category }) => {
    const { menus, loading, error } = useMenus(category);

    if (loading) {
        return (
            <div className='p-20 flex justify-center items-center'>
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }

    if(error){
        return error;
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                menus.map( menu => <MenuCard key={menu._id} item={menu}></MenuCard>)
            }
        </div>
    );
};

export default MenuTab;