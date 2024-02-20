import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../HOOKS/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { Link } from "react-router-dom";

const MyCart = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const { data: carts = [], isLoading, error } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await axiosPublic.get(`cart/${user?.email}`);
            return res.data;
        }
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    
    return (
        <div>
            <h1 className="text-3xl text-center my-20 text-yellow-600">---MY CART---</h1>
            <div className="max-w-lg mx-auto border border-yellow-600 mb-20">
                <table className="table overflow-x-auto">
                    {/* table header */}
                    <thead className="text-yellow-600">
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts&&carts.map((cart, index) => (
                            <tr key={cart._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{cart.name}</td>
                                <td>{cart.price}</td>
                                <td>
                                    <Link to={`/updateproduct/${cart._id}`}>
                                        <button className="btn btn-sm">Update</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        {carts.length === 0 && (
                            <tr>
                                <td colSpan="5">Cart is empty</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;
