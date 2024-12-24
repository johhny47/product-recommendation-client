
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';
import MyQueriesCard from '../Component/MyQueriesCard';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import banner from '.././assets/sample-5.jpg'

import useAxiosSecure from '../hook/useAxiosSecure';


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
        <div>
           <img src={banner} alt="" />
          <div className="bg-gradient-to-t from-cyan-500 to-blue-500 h-40 flex items-center justify-center">
          <Link to="addqueries">
         <button className="px-6 py-2 border-2 border-transparent bg-orange-500 text-white font-bold rounded hover:bg-red-700">
           ADD QUERIES
              </button>
            </Link>
           </div>

          <div className="h-5 w-10 mx-auto">
          
          </div>
          <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
            {
               productData.map(data => <MyQueriesCard key={data._id} handleDelete={handleDelete} data={data} ></MyQueriesCard>)
            }
         
          </div>
        </div>
    );
};

export default MyQueries;