import { useEffect, useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";


const HomeCard = () => {
    const axiosSucure = useAxiosSecure()
    const [data, setData] = useState([])

      useEffect(() => {
        const fetchalldata =async() =>{
            const {data}= await axiosSucure.get(`/query/home`)
            setData(data)
          
           
        }
        fetchalldata()
      },[])
       
   
   
         
           
    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 -mt-52 md:-mt-40 lg:-mt-0">
                {
                    data.map(data=><div className="card bg-[#e640c8]     w-72 md:w-80 lg:96 shadow-xl mx-auto text-gray-100">
                         <figure>
                          <img
                            src={data.productImageURL}
                            className="h-48 w-full md:h-52 md:w-full lg:h-56 lg:w-full transition-transform duration-300 hover:scale-110"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{data.name}</h2>
                          <p className="font-bold ">Brand:<span className="text-gray-300 font-medium"> {data.brand}</span> </p>
                          <p className="font-bold">Title:<span className="text-gray-300 font-medium"> {data.title}</span></p>
                          <span className="font-bold">Recommendation Reason:</span>
                          <p className="text-gray-300 font-medium">{data.BoycottingReason
                          }</p>
                        </div>
                       
                      </div>)
                }
            </div>
        </div>
    );
};

export default HomeCard;