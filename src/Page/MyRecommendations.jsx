
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
   
    const {id} = useParams()
    const [myData,setMydata]=useState([])
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        fetchAllqueries() 
         document.title = "Recomify | MyRecommendation"
    },[email])

             const fetchAllqueries= async ()=>{
                const {data}=await axiosSucure.get(`/myrecommendation/search?userEmail=${email}`)
                setMydata(data)
                setLoading(false)
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
                 if(loading) return <div className='mx-auto h-14 w-14'>
                 <span className="loading loading-spinner mx-auto text-error"></span>
            </div>         
  
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