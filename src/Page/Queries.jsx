
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure, { axiosSucure } from "../hook/useAxiosSecure";


const Queries = () => {
    const axiosSucure = useAxiosSecure()
    const [queries, setQueries] = useState([]);
    const [search,setSearch]=useState('')
    const [gridColumns, setGridColumns] = useState(3); 
    console.log(search)
     useEffect(() => {
            
          const fetchAllqueries= async ()=>{
            const {data}=await axiosSucure.get(`/queries?search=${search}`)
            setQueries(data)
          }     
          fetchAllqueries()
      
        }, [search]);

        const updateGridColumns = (columns) => {
          setGridColumns(columns)
        }

    return (
    
   <div>
    <div>
    <label className="input input-bordered max-w-40 mx-auto flex items-center gap-2">
  <input type="text" className="max-w-40" placeholder="Search" name='search' onChange={e=>setSearch(e.target.value)} />
 
</label>
    </div>
    
      <div className="flex justify-center my-4 gap-2">
        <button className="btn btn-primary"
           onClick={() => updateGridColumns(1)}>1 Column</button>
        <button className="btn btn-primary"
                    onClick={() => updateGridColumns(2)}>
                      2 Columns</button>
          <button className="btn btn-primary"
                    onClick={() => updateGridColumns(3)}>
                    3 Columns</button>
            </div>

     <div className={`grid gap-6 mx-auto ${gridColumns === 1 ? 'grid-cols-1' : gridColumns === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
         {
             queries.map(data =><div className={`card bg-base-100  shadow-xl flex-1`}>
                   <figure>
                     <img
                       src={data.productImageURL}
                        className="flex-1 h-32 md:h-36 lg:h-60"
                       alt="Shoes" />
                   </figure>
                   <div className="mx-2 border-1 border-gray-400 md:card-body lg:card-body flex-1">
                   <div className="badge badge-secondary">{data.recommendationCount}</div>
                   <div className="badge badge-secondary flex-shrink">{data.brand}</div>
                     <h2 className="text-sm card-title flex-shrink">
                      {data.name}
                      </h2> 
                      
                    
                     <p className="font-bold flex-shrink">{data.title}</p>
                     <p className="text-gray-400 text-sm md:text-xl lg:text-xl">{data.BoycottingReason}</p>
                     <div className="card-actions justify-start">
                     <Link to={`/details/${data._id}`} className="badge badge-outline"><a>Recommend</a></Link>
                      
                     </div>
                   </div>
                 </div>)
           }
       </div>
   </div>
        
    );
};

export default Queries;