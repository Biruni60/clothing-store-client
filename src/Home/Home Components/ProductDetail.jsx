import { useParams } from "react-router-dom";
import useAxiosPublic from "../../HOOKS/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ProductDetail = () => {
    const axiosSecure=useAxiosPublic()
    const {id}=useParams()
    const{data:productDetail}=useQuery({
        queryKey:['classDetail',id],
        queryFn:async ()=>{
            const res =await axiosSecure.get(`/productdetail/${id}`)
            return res.data;
        
        }
     })
    return (
        productDetail&&<div className='py-20 bg-base-100'>
         <h1 className="text-3xl text-center text-yellow-600 ">---ALL Products---</h1>
            <div className="card card-side max-w-2xl mx-auto mt-20 bg-base-100 s">
  <figure className='w-1/2'><img className='w-full h-full' src={productDetail.image} alt="Movie"/></figure>
  <div className="card-body">
  <h2 className="card-title">{productDetail.name}</h2>
    <p><span className="font-semibold"></span> {productDetail.description}</p>
    <button className="btn bg-yellow-600 text-white">ADD TO CART</button>
  </div>
</div>
        </div>
    );
};

export default ProductDetail;