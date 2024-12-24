
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import axios from 'axios';
import useAxiosSecure from '../hook/useAxiosSecure';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const MyRecommendations = () => {
    const axiosSucure = useAxiosSecure()
    const{user}=useContext(AuthContext)
    const email = user?.email
    // const id = user?._id
    const {id} = useParams()
    const [myData,setMydata]=useState([])
  
    useEffect(() => {
        fetchAllqueries() 
    },[email])

             const fetchAllqueries= async ()=>{
                const {data}=await axiosSucure.get(`/myrecommendation/search?userEmail=${email}`)
                setMydata(data)
              } 

           
             const handleDelete =async id =>{
      
                try{
                     const {data}=await axiosSucure.delete(`/recommendation/${id}`)
                     console.log(data)
                    Swal.fire({
                        title: 'Delete',
                        text: 'User Deleted Successfuly',
                        icon: 'delete',
                        confirmButtonText: 'ok'
                      })
                     
                        fetchAllqueries() 
                     
                     
                    
                } catch(err){
                    toast.error(err.message)
                }
               
               
                 }
                
   
    return (

        <div className="overflow-x-auto mt-10">
        <table className="table">
        {/* head */}
        <thead>
          <tr>
          <th>Index</th>
          <th>Query</th>
          <th>Query Made By</th>
          <th>Recommendation Reason</th>
           <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
           myData.map((data,idx) => <tr className="bg-base-200">
                 <th>{idx+1}</th>
                <td>{data.productName}</td>
                <td>{data.userEmail}</td>
             
                <td>{data.recomReason}</td>
                <td className="badge badge-outline"> <button onClick={()=>handleDelete(data._id)}>Delete</button></td>
              </tr>)
          }
        
        </tbody>
      </table>
    </div>
    );
};

export default MyRecommendations;