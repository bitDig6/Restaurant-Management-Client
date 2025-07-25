import React from 'react';
import { FaAd, FaCalendar, FaHome, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { GoCodeReview } from "react-icons/go";
import { NavLink, Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className="menu">
                    <li>
                        <NavLink to='/dashboard/cart'>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart
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