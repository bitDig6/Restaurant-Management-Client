import { Link, NavLink } from 'react-router';
import useAuthContext from '../../Hooks/useAuthContext';
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
    const { user, logoutUser } = useAuthContext();

    const navMenus = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/shop/salad'>Our Shop</NavLink></li>
        <li>
            <NavLink to='/'>
                <button className="btn btn-ghost">
                    <TiShoppingCart className='text-2xl mr-4'></TiShoppingCart>
                    <div className="badge badge-sm badge-secondary">+99</div>
                </button>
            </NavLink>
        </li>
    </>

    const handleLogout = () => {
        logoutUser()
            .catch(error => {
                alert(error.message);
            })
    }

    return (
        <div className="navbar fixed max-w-screen-xl z-10 bg-black/20 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navMenus}
                    </ul>
                </div>
                <div className='font-cinzel'>
                    <div className='text-xl lg:text-2xl font-bold lg:font-black'>BISTRO BOSS</div>
                    <div className='text-xs lg:text-sm lg:font-semibold tracking-[0.35rem] lg:tracking-[0.5rem]'>RESTAURANT</div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">
                    {navMenus}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={handleLogout} className='btn btn-ghost btn-xs md:btn-md text-sm lg:text-lg'>Sign Out</button>
                        : <Link to='/login' className="btn btn-ghost btn-xs md:btn-md text-sm lg:text-lg">Sign In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;