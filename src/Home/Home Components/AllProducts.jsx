import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../HOOKS/useAxiosPublic";
import { Link } from "react-router-dom";


const AllProducts = () => {
    const axiosPublic=useAxiosPublic()
    const{data:products=[]}=useQuery({
        queryKey:['products'],
        queryFn:async ()=>{
            const res =await axiosPublic.get('/products')
            return res.data;
        }
     })
     console.log(products);
    return (
        <div>
         <h1 className="text-3xl text-center text-yellow-600 my-20">---ALL Products---</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    products.map(product=>
                    <div key={product._id}>
                    <div className="card bg-base-100 border border-yellow-600 ">
  <figure><img className="h-40" src={product.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p><span className="font-semibold">Type:</span> {product.type}</p>
    <p><span className="font-semibold">Price:</span> {product.price} TK</p>
    <p><span className="font-semibold"> Brand Name:</span> {product.brand}</p>
    <p><span className="font-semibold">Rating:</span> {product.rating}</p>
<Link to={`/productdetail/${product._id}`}><button className="btn bg-yellow-600 text-white">VIEW DETAILS</button></Link>
  </div>
</div>  
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllProducts;