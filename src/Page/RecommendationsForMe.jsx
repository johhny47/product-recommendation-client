import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

import useAxiosSecure from "../hook/useAxiosSecure";



const RecommendationsForMe = () => {
    const axiosSucure = useAxiosSecure()
    const{user}=useContext(AuthContext)
   
     const email =user?.email
   
     const [myData,setMydata]=useState([])
     const [loading, setLoading] = useState(true);
      useEffect(() => {
                 
               const fetchAllqueries= async ()=>{
                 const {data}=await axiosSucure.get(`/recomendationforme/search?userEmail=${email}`)
                 setMydata(data)
                 setLoading(false)
           
               }     
               fetchAllqueries()
               document.title = "Recomify | RecommendationForMe"
             }, [email]);
             if(loading) return <div className='mx-auto h-14 w-14 my-20'>
             <span className="loading loading-spinner mx-auto text-error"></span>
        </div>
   
    return (
        <div className="overflow-x-auto mt-10  ">
        <table className="table">
        {/* head */}
        <thead>
          <tr>
          <th>Index</th>
          <th>Query</th>
          <th> Recommendate By</th>
          <th>Recommendation Reason</th>
           <th>Tittle</th>
           <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
           myData.map((data,idx) => <tr key={idx} className="bg-base-200">
                 <th>{idx+1}</th>
                <td>{data.recomProductName}</td>
                <td>{data.RecommenderEmail}</td>
               
                <td>{data.recomReason}</td>
                <td>{data.recomTitle}</td>
               
                <td><img src={data.recomProductPhoto} alt="" className="w-10 h-10 rounded-full" srcset="" /></td>
                {/* <td><Link to={`/details/${data._id}`}><button>Details</button></Link></td> */}
              </tr>)
          }
        
        </tbody>
      </table>
    </div>
    );
};

export default RecommendationsForMe;