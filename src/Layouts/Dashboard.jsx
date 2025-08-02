import React from 'react';
import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { GoCodeReview } from "react-icons/go";
import { NavLink, Outlet } from 'react-router';
import useCart from '../Hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart();

    //the developer should set an admin
    //this 1st admin will make other admins and normal users
    //we're doing this initially
    //TODO: get isAdmin value from the database
    const isAdmin = true;

    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className="menu p-4">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to='/dashboard/adminHome'>
                                        <FaHome></FaHome>
                                        Admin Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/addItems'>
                                        <FaUtensils></FaUtensils>
                                        Add Items
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/manageItems'>
                                        <FaList></FaList>
                                        Manage Items
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/manageBookings'>
                                        <FaBook></FaBook>
                                        Manage Bookings
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/allUsers'>
                                        <FaUsers></FaUsers>
                                        All Users
                                    </NavLink>
                                </li>
                            </>
                            : <>
                                <li>
                                    <NavLink to='/dashboard/cart'>
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/userHome'>
                                        <FaHome></FaHome>
                                        User Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/reservation'>
                                        <FaCalendar></FaCalendar>
                                        Reservation
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/review'>
                                        <GoCodeReview></GoCodeReview>
                                        Add Review
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/bookings'>
                                        <GoCodeReview></GoCodeReview>
                                        My Bookings
                                    </NavLink>
                                </li>
                            </>
                    }

                    {/* nav links shared by admin and normal user */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/shop/salad'>
                            <FaShoppingBag></FaShoppingBag>
                            Menu
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/shop/salad'>
                            <FaEnvelope></FaEnvelope>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;