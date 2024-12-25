import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../hook/useAxiosSecure";


const Update = () => {
    const axiosSucure = useAxiosSecure()
    const {user}= useContext(AuthContext)
    const {id}=useParams();
    console.log(id)
     const [productData, setProductData] = useState([]);
      useEffect(() => {
        fetchalldata()
          document.title = "Recomify | Update"
            }
            
        ,[id])
        
         const fetchalldata =async() =>{
            const {data}= await axiosSucure.get(`/queries/update/${id}`)
            setProductData(data)
            }
    
  
const handleAddEquipment =async e =>{
   
    
    e.preventDefault();
    const form = e.target;
    const name = form.name.value
    const brand = form.brand.value
    const productImageURL = form.ImageURL.value
    const title= form.title.value
    const BoycottingReason = form.BoycottingReason.value
    
    const User = {
        userEmail:user?.email,
        userName:user?.displayName,
        userPhoto:user?.photoURL
    }
 
    const timestamp = Date.now();
    const date = new Date(timestamp);
    const currentDate= date.toLocaleString();
    const recommendationCount= 0 ;
    // const isoDate = date.toISOString();
 
      
 
   const allData = {name,brand,productImageURL,title,BoycottingReason,User,currentDate,recommendationCount}
   
    try{
        const {data} = await axiosSucure.put(`/queries/${productData._id}`,allData)
    console.log(data)
    Swal.fire({
        title: 'Update',
        text: 'Data update Successfuly',
        icon: 'Update',
        confirmButtonText: 'ok'
      })
    }
    catch(error){
        toast.error(err.message)
    }
   
 
}

    return (
        <div className="w-8/12 mx-auto">
        <form className="w-7/12 mx-auto" onSubmit={handleAddEquipment}>
            {/* row1 */}
            <div className="md:flex justify-around">
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Product Name</span>
                  </div>
                    <input type="text" name="name" placeholder="Product Name" defaultValue={productData?.name}   className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Product Brand</span>
                  </div>
                    <input type="text" name="brand"  placeholder="Product Brand" defaultValue={productData?.brand}   className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
            </div>
            {/* row2 */}
            <div className="md:flex justify-around">
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Image-URL</span>
                  </div>
                    <input type="text" name="ImageURL"  placeholder="Image URL" defaultValue={productData?.productImageURL}   className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Query TItle</span>
                  </div>
                    <input type="text" name="title" placeholder="Query TItle" defaultValue={productData?.title}   className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
            </div>
            {/* row3 */}
            <div className="md:flex">
                <div className="w-full mx-3">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Boycotting Reason Details</span>
                  </div>
                    <input type="text" name="BoycottingReason" placeholder="Boycotting Reason Details" defaultValue={productData?.BoycottingReason}  className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
               
            </div>

        
           

            <input type="submit" value="Update" className="btn btn-block" />
          
        </form>

    </div>
         
    );
};

export default Update;