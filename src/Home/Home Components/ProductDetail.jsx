import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../HOOKS/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import Swal from "sweetalert2";

const ProductDetail = () => {
    const axiosSecure=useAxiosPublic()
    const {user}=useContext(AuthContext)
    const {id}=useParams()
    const navigate=useNavigate()
    const{data:productDetail}=useQuery({
        queryKey:['classDetail',id],
        queryFn:async ()=>{
            const res =await axiosSecure.get(`/productdetail/${id}`)
            return res.data;
        
        }
     })
     console.log(productDetail);

     const handleAddCart= async()=>{
        const addClass={
            name:productDetail?.name,
            type:productDetail?.type,
            price:productDetail?.price,
            rating:productDetail?.rating,
            brand:productDetail?.brand,
            description:productDetail?.description,
            image:productDetail?.image,
            email:user?.email,
          
        }
        const classes=await axiosSecure.post('/addtocart',addClass)
        if(classes.data.insertedId){
            // show success popup
        
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} is added to the cart.`,
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/mycart')
        }
     }
    return (
        productDetail&&<div className='py-20 bg-base-100'>
         <h1 className="text-3xl text-center text-yellow-600 ">---Product Details---</h1>
            <div className="card card-side max-w-2xl mx-auto mt-20 bg-base-100 s">
  <figure className='w-1/2'><img className='w-full h-full' src={productDetail.image} alt="Movie"/></figure>
  <div className="card-body">
  <h2 className="card-title">{productDetail.name}</h2>
    <p><span className="font-semibold"></span> {productDetail.description}</p>
    <button onClick={handleAddCart}  className="btn bg-yellow-600 text-white">ADD TO CART</button>
  </div>
</div>
        </div>
    );
};

export default ProductDetail;