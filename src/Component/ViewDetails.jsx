import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../hook/useAxiosSecure";
import Swal from "sweetalert2";


const ViewDetails = () => {
  const{id} = useParams()
  const axiosSucure = useAxiosSecure()
    // const data = useLoaderData();
   
    const {user}=useContext(AuthContext);
    const [Data, setData] = useState([]);
    useEffect(() => {
          fetchalldata() 
      },[id])
  
          const fetchalldata =async() =>{
              const {data}= await axiosSucure.get(`/details/${id}`)
             setData(data)
            
            
          }
  
   
   
const handleAddRecommendation = async (event) => {
    event.preventDefault(); 
    
    const form = event.target;
    const recomTitle = form.RecomTitle.value;
    const recomProductName = form.RecomProductName.value;
    const recomProductImage = form.RecomProductImage.value;
    const recomReason = form.RecomReason.value;
  
    const queryid = Data?._id
    const QueryTitle=Data?.title
    const productName = Data?.name
    const userEmail = Data?.User?.userEmail
    const userName = Data?.User?.userName
    const RecommenderEmail =user?.email
    const RecommenderName = user?.displayName
    const timestamp = Date.now();
    const date = new Date(timestamp);
    const RecomcurrentDate= date.toLocaleString();

    if(userEmail === RecommenderEmail) 
      return toast.error("you can not recommend")

    const recomData ={ recomTitle, recomProductName, recomProductImage, recomReason,queryid,QueryTitle,productName,userEmail,userName,RecommenderEmail,RecommenderName,RecomcurrentDate};
    
      
        try{
          const {Alldata} = await axiosSucure.post(`/recommendation`,recomData)
          console.log(Alldata)
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
  };
  

    return (
        <div>
          <Toaster></Toaster>
           <div>
           <h1>view details</h1>
           </div>
            <div>
            <form onSubmit={handleAddRecommendation}>
  <div>
    <label>
   
      <input type="text" name="RecomTitle" placeholder="Recommendation Title" className="input input-bordered w-full max-w-xs" required />
    </label>
  </div>
  <div>
    <label>
     
      <input type="text" name="RecomProductName"  placeholder="Recommended Product Name" className="input input-bordered w-full max-w-xs" required />
    </label>
  </div>
  <div>
    <label>
    
      <input type="text" name="RecomProductImage"  placeholder=" Recommended Product Image" className="input input-bordered w-full max-w-xs" required />
    </label>
  </div>
  <div>
    <label>
     
      <input name="RecomReason"  placeholder="Recommendation Reason" className="input input-bordered w-full max-w-xs" required></input>
    </label>
  </div>
  <button className="btn btn-primary" type="submit">Submit</button>
</form>

              
            </div>
        </div>
    );
};

export default ViewDetails;