import { Link } from "react-router";
import useMenus from "../../../Hooks/useMenus";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const CategoryMenu = ({image, category, title}) => {
    const { menus, loading, error} = useMenus(category);

     if (loading) {
        return <div className='p-20 flex justify-center items-center'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    }

    if (error) {
        return error;
    }

    return (
        <section className="my-20 space-y-10">
            <Cover image={image} title={title}></Cover>
            <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    menus.map(menu => <MenuItem key={menu._id} item={menu}></MenuItem>)
                }
            </div>
            <div className='mt-5 flex justify-center'>
                <Link to={`/shop/${category}`} className='btn md:btn-lg btn-outline border-0 border-b-2 rounded-xl'>Order your Favorite Food</Link>
            </div>
        </section>
    );
};

export default CategoryMenu;