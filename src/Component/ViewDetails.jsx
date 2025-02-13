import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../hook/useAxiosSecure";
import Swal from "sweetalert2";
import { div } from "motion/react-client";


const ViewDetails = () => {
  const{id} = useParams()
  const axiosSucure = useAxiosSecure()
  
  const {user}=useContext(AuthContext);
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchalldata() 
    document.title = "Recomify | ViewDetails"
  }, [id])

  const fetchalldata =async () =>{
    const {data}= await axiosSucure.get(`/details/${id}`)
    setData(data)
    setLoading(false)
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
    const RecommenderEmail = user?.email
    const RecommenderName = user?.displayName
    const timestamp = Date.now();
    const date = new Date(timestamp);
    const RecomcurrentDate = date.toLocaleString();

    if(userEmail === RecommenderEmail) 
      return toast.error("you can not recommend")

    const recomData = { recomTitle, recomProductName, recomProductImage, recomReason, queryid, QueryTitle, productName, userEmail, userName, RecommenderEmail, RecommenderName, RecomcurrentDate };
    
    try {
      const {Alldata} = await axiosSucure.post(`/recommendation`, recomData)
      console.log(Alldata)
      Swal.fire({
        title: 'Added',
        text: 'Data Add Successfully',
        icon: 'Add',
        confirmButtonText: 'ok'
      })
    }
    catch(error){
      toast.error(error.message)
    }
  };

  if (loading) return (
    <div className='mx-auto h-14 w-14 my-20'>
      <span className="loading loading-spinner mx-auto text-error"></span>
    </div>
  )

  return (
   <div className=" bg-gray-800 pb-28 ">
     <div className="flex-none md:flex lg:flex justify-evenly mt-16 pt-5 ">
      <Toaster />
      <div className="shadow-xl text-white p-5">
        <div className="flex justify-start items-center gap-2">
          <div><img src={Data.productImageURL} className="h-10 w-10 rounded-full mt-6" alt="" /></div>
          <h1 className="text-2xl font-bold mt-4">{Data.name}</h1>
        </div>
        <h1>{Data.brand}</h1>
        <h1>{Data.title}</h1>

        <h1 className="text-[#de30be] font-bold mt-2">The Query Post By:</h1>
        <div className="flex items-center gap-6 mt-2">
          <div><img src={Data?.User?.userPhoto} className="h-5 w-5 rounded-full " alt="" /></div>
          <div>
            <h1>{Data?.User?.userName}</h1>
          </div>
        </div>
        <h1>{Data?.User?.userEmail}</h1>
      </div>
      <div className="shadow-xl p-4 bg-gray-700 rounded-lg"> 
        <form onSubmit={handleAddRecommendation}>
          <div>
            <label>
              <input type="text" name="RecomTitle" placeholder="Recommendation Title" className="input input-bordered w-full max-w-xs my-2 text-black" required /> {/* Added text-black */}
            </label>
          </div>
          <div>
            <label>
              <input type="text" name="RecomProductName" placeholder="Recom Product Name" className="input input-bordered w-full max-w-xs text-black" required /> {/* Added text-black */}
            </label>
          </div>
          <div>
            <label>
              <input type="text" name="RecomProductImage" placeholder=" Recom Product Image" className="input input-bordered w-full max-w-xs my-2 text-black" required /> {/* Added text-black */}
            </label>
          </div>
          <div>
            <label>
              <input name="RecomReason" placeholder="Recommendation Reason" className="input input-bordered w-full max-w-xs text-black" required /> {/* Added text-black */}
            </label>
          </div>
          <button className="btn btn-sm mt-2 bg-[#de30be] text-white" type="submit">Submit</button>
        </form>
      </div>
    </div>
   </div>
  );
};

export default ViewDetails;
