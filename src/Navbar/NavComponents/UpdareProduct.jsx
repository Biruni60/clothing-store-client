import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../HOOKS/useAxiosPublic";
import useAxiosUpload from "../../HOOKS/useAxiosUpload";

const UpdareProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic=useAxiosPublic()
    const axiosUpload=useAxiosUpload()
    const {id} =useParams()
    const navigate=useNavigate()
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosUpload.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }); 
        if(res.data.success){
            const addClass={
                name:data.name,
                type:data.type,
                price:data.price,
                rating:data.rating,
                brand:data.brand,
                description:data.description,
                image:res.data.data.display_url,
              
            }
            const classes=await axiosPublic.put(`/products/${id}`,addClass)
            if(classes.data.modifiedCount>0){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/mycart')
            }
           
        }
    }
    return (
        <div>
             <div className=" max-w-5xl mx-auto p-10">
        <h2 className="text-2xl text-center my-10">---ADD PRODUCT---</h2>
        <div className="border border-black rounded-xl py-10 px-4 my-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name "
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                
                     
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Type"
                            {...register('type', { required: true })}
                            required
                            className="input input-bordered w-full" />

                        
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                               placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                type="number"
                                
                                placeholder="Rating"
                                {...register('rating', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input
                                type="text"
                               placeholder="Brand Name"
                                {...register('brand', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn btn-outline w-full">
                        Update Product
                    </button>
                </form>
            </div>
        </div> 
        </div>
    );
};

export default UpdareProduct;