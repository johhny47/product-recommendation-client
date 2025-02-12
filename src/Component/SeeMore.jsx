
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../hook/useAxiosPublic";



const SeeMore = () => {
  const{id} = useParams()
  const axiosPublic  = useAxiosPublic()
  
   
    const {user}=useContext(AuthContext);
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
          fetchalldata() 
            document.title = "Recomify | SeeMore"
      },[id])
  
          const fetchalldata =async() =>{
              const {data}= await axiosPublic.get(`/seemore/${id}`)
             setData(data)
             setLoading(false)
            
            
          }
  
   
   

  
  if(loading) return <div className='mx-auto h-14 w-14 my-28'>
  <span className="loading loading-spinner mx-auto text-error"></span>
</div>

    return (
       
            <div className="w-full bg-gray-100 py-8">
              <Toaster />
              <div className="max-w-4xl mx-auto px-4 mt-10  text-black">
              
                <div className="flex flex-col lg:flex-row justify-around gap-8 p-8 bg-gray-200 rounded-xl shadow-lg">
                
                  <div className="flex-none lg:w-1/3">
                    <img
                      src={Data.productImageURL}
                      alt={Data.name}
                      className="w-full h-96 object-cover rounded-lg shadow-xl p-2"
                    />
                  </div>
        
               
                  <div className="flex flex-col lg:w-2/3">
                 
                    <div className="flex items-center gap-4 mb-4">
                     
                      <h1 className="text-3xl font-bold">{Data.name}</h1>
                    </div>
                    <div className="text-lg ">
                      <h2 className="font-semibold">Brand: {Data.brand}</h2>
                     
                    </div>
                    <div className="text-lg  mt-4">
                      <h2 className="font-semibold">Title:{Data.title}</h2>
                     
                    </div>
        
                  
                    <div className="mt-6">
                      <h1 className="text-black font-bold text-xl mt-2">The Query Post By:</h1>
                      <div className="flex items-center gap-4 mt-4">
                        <img
                          src={Data?.User?.userPhoto}
                          alt="User"
                          className="h-10 w-10 rounded-full"
                        />
                        <div>
                          <h2 className="text-lg font-semibold ">
                            {Data?.User?.userName}
                          </h2>
                          <p className="text-sm ">{Data?.User?.userEmail}</p>
                        </div>
                      </div>
                    </div>
        
                   
                    <div className="mt-8">
                      <h2 className="text-2xl font-semibold">Additional Information</h2>
                      <p className="mt-2 ">{Data?.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        
     
        
    );
};

export default SeeMore;