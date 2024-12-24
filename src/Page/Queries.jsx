
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure, { axiosSucure } from "../hook/useAxiosSecure";


const Queries = () => {
    const axiosSucure = useAxiosSecure()
    const [queries, setQueries] = useState([]);
    const [search,setSearch]=useState('')
    console.log(search)
     useEffect(() => {
            
          const fetchAllqueries= async ()=>{
            const {data}=await axiosSucure.get(`/queries?search=${search}`)
            setQueries(data)
          }     
          fetchAllqueries()
      
        }, [search]);

    return (
    
   <div>
    <div>
    <label className="input input-bordered max-w-40 mx-auto flex items-center gap-2">
  <input type="text" className="max-w-40" placeholder="Search" name='search' onChange={e=>setSearch(e.target.value)} />
 
</label>
    </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
         {
             queries.map(data =><div className="card bg-base-100 w-96 shadow-xl">
                   <figure>
                     <img
                       src={data.productImageURL}
                       alt="Shoes" />
                   </figure>
                   <div className="card-body">
                     <h2 className="card-title">
                      {data.name}
                       <div className="badge badge-secondary">{data.brand}</div>
                     </h2>
                     <p>{data.title}</p>
                     <div className="card-actions justify-end">
                     <Link to={`/details/${data._id}`} className="badge badge-outline"><a>View Details</a></Link>
                      
                     </div>
                   </div>
                 </div>)
           }
       </div>
   </div>
        
    );
};

export default Queries;