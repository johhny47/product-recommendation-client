import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

import useAxiosSecure from "../hook/useAxiosSecure";
import { Link } from "react-router-dom";


const RecommendationsForMe = () => {
    const axiosSucure = useAxiosSecure()
    const{user}=useContext(AuthContext)
   
     const email =user?.email
    //  console.log(email)
    //  const{data}=axiosSucure.get(`/recomendationforme/search?userEmail=${email}`)
     const [myData,setMydata]=useState([])
      useEffect(() => {
                 
               const fetchAllqueries= async ()=>{
                 const {data}=await axiosSucure.get(`/recomendationforme/search?userEmail=${email}`)
                 setMydata(data)
               }     
               fetchAllqueries()
           
             }, []);
   
    return (
        <div className="overflow-x-auto mt-10">
        <table className="table">
        {/* head */}
        <thead>
          <tr>
          <th>Index</th>
          <th>Query</th>
          <th> Recommendate By</th>
          <th>Recommendation Reason</th>
           <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
           myData.map((data,idx) => <tr className="bg-base-200">
                 <th>{idx+1}</th>
                <td>{data.recomProductName}</td>
                <td>{data.RecommenderEmail}</td>
                <td>{data.recomReason}</td>
                {/* <td><Link to={`/details/${data._id}`}><button>Details</button></Link></td> */}
              </tr>)
          }
        
        </tbody>
      </table>
    </div>
    );
};

export default RecommendationsForMe;