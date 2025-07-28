import React from 'react';
import useCart from '../../../Hooks/useCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((accumulator, item) => accumulator + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Item has been deleted.",
                                icon: "success"
                            });
                        }
                    }).catch(error => {
                        Swal.fire({
                            title: "Error!",
                            text: error.message,
                            icon: "error"
                        })
                    })
            }
        });
    };

    return (
        <div className='space-y-10'>
            <div className='flex justify-evenly items-center'>
                <h2 className='text-3xl'>Items: {cart.length}</h2>
                <h2 className='text-3xl'>Total Price: {totalPrice}</h2>
                <button className='btn btn-primary'>Pay Now</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className='font-bold'>{item.name}</div>
                                    <br />
                                </td>

                                <td>{item.price}</td>

                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs text-red-500">
                                        <FaTrash></FaTrash>
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;