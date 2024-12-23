
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
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         {
             queries.map(data =><div className="card bg-base-100 w-96 shadow-xl">
                   <figure>
                     <img
                       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                       alt="Shoes" />
                   </figure>
                   <div className="card-body">
                     <h2 className="card-title">
                      {data.name}
                       <div className="badge badge-secondary">NEW</div>
                     </h2>
                     <p>If a dog chews shoes whose shoes does he choose?</p>
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