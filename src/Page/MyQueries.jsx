
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';
import MyQueriesCard from '../Component/MyQueriesCard';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

import useAxiosSecure from '../hook/useAxiosSecure';
import axios from 'axios';

const MyQueries = () => {
    const axiosSucure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    
    const [productData, setProductData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // const [myuser,setMyuser] = useState(productData)
  

    useEffect(() => {
        fetchalldata() 
    },[ userEmail])

        const fetchalldata =async() =>{
            const {data}= await axiosSucure.get(`/queries/search?userEmail=${userEmail}`)
            setProductData(data)
        }
    

    const handleDelete =async id =>{
      
        try{
             const {data}=await axiosSucure.delete(`/queries/${id}`)
             console.log(data)
             Swal.fire({
                title: 'Delete',
                text: 'User Deleted Successfuly',
                icon: 'delete',
                confirmButtonText: 'ok'
              })
              fetchalldata() 
        } catch(err){
            toast.error(err.message)
        }
       
       
         }
        
    

    return (
        <>
          <Link to="addqueries"><button className='mx-72 btn btn-primary'><a>add queries</a></button></Link>
          <div className="h-5 w-10 mx-auto">
          
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
               productData.map(data => <MyQueriesCard key={data._id} handleDelete={handleDelete} data={data} ></MyQueriesCard>)
            }
         
          </div>
        </>
    );
};

export default MyQueries;