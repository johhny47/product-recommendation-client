import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../hook/useAxiosSecure";


const AddQueries = () => {

  const axiosSucure = useAxiosSecure()
const {user}= useContext(AuthContext)
  
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
      const {data} = await axiosSucure.post(`/add-queries`,allData)
    console.log(data)
    Swal.fire({
      title: 'Added',
      text: 'Data Add Successfuly',
      icon: 'Add',
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
                    <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Product Brand</span>
                  </div>
                    <input type="text" name="brand"  placeholder="Product Brand" className="input input-bordered w-full max-w-xs" />
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
                    <input type="text" name="ImageURL"  placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Query TItle</span>
                  </div>
                    <input type="text" name="title" placeholder="Query TItle" className="input input-bordered w-full max-w-xs" />
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
                    <input type="text" name="BoycottingReason" placeholder="Boycotting Reason Details" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
               
            </div>

        
           

            <input type="submit" value="Add" className="btn btn-block" />
          
        </form>

    </div>
         
    );
};

export default AddQueries;