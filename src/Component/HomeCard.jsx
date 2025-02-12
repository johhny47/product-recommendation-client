import { useEffect, useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import { Link } from "react-router-dom";

const HomeCard = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const { data } = await axiosSecure.get(`/query/home`);
      setData(data);
    };
    fetchAllData();
  }, []);

  return (
    <div className="w-full bg-gray-100 py-8">
         <h1 className="text-center font-bold text-4xl"> Recent products</h1>
      <div className="max-w-7xl mx-auto px-4">
    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {data.map((item) => (
            <div
              key={item._id}
              className="card bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
            >
              <figure className="relative overflow-hidden">
                <img
                  src={item.productImageURL}
                  className="h-48 w-full object-cover transition-all duration-300 hover:scale-110"
                  alt={item.name}
                />
              </figure>
              <div className="p-4 flex flex-col justify-between h-1/2">
                
               <div>
               <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>

                <p className="text-sm text-gray-600">{item.title}</p>
               </div>

           
                <div>
                <Link  to={`/seemore/${item._id}`}
                 >
                 
                 <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                    See more
                  </button>
                </Link>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
