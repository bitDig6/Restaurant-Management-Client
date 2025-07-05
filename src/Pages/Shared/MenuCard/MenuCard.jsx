import Swal from "sweetalert2";
import useAuthContext from "../../../Hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const MenuCard = ({ item }) => {
    const { _id, image, name, recipe, price } = item;
    const { user } = useAuthContext();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleAddToCart = (food) => {
        if (user && user?.email) {
            console.log(food, user.email);
            const cartItem = {
                itemId: _id,
                userEmail: user.email,
                name,
                image,
                price
                //add date and time of order also
            };

            axiosSecure.post('/carts', cartItem)
                .then( res => {
                    if(res.data.insertId){
                        alert('added successfully');
                    }
                }).catch(error => {
                    alert(error.message);
                })
            
        } else {
            Swal.fire({
                title: "Sign In Needed!",
                text: "You need to sign in before ordering!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, take me to sign in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: { from: location}});
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 shadow-neutral shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={name}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(name)} className="btn lg:btn-lg rounded-2xl btn-outline border-0 border-b-2 border-orange-400 mt-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;