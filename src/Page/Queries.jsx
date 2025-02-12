import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hook/useAxiosSecure";

const Queries = () => {
  const axiosSecure = useAxiosSecure();
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllQueries = async () => {
      const { data } = await axiosSecure.get(`/queries?search=${search}`);
      setQueries(data);
      setLoading(false);
    };
    fetchAllQueries();
    document.title = "Recomify | Queries";
  }, [search]);

  return (
    <div className="px-4 py-20">
      <div className="my-4">
        <label className="input input-bordered max-w-40 mx-auto flex items-center gap-2">
          <input
            type="text"
         
            placeholder="Search"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {loading && (
        <div className="mx-auto h-14 w-14 ">
          <span className="loading loading-spinner mx-auto text-error"></span>
        </div>
      )}

    
      <div className="grid gap-6 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {queries.map((data) => (
          <div
            key={data._id}
            className="card bg-white shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <figure className="h-48 w-full overflow-hidden">
              <img
                src={data.productImageURL}
                className="object-cover w-full h-full"
                alt="Product"
              />
            </figure>
            <div className="card-body p-6 flex flex-col justify-between h-full">
              <div>
              <div className="flex justify-between items-center">
                <div className="badge badge-secondary px-3 py-1 text-sm font-semibold rounded-full bg-pink-400 text-white">
                  {data.recommendationCount}
                </div>
                <div className="badge badge-outline bg-pink-400 text-white text-xs px-2 py-1 rounded-full">
                  {data.brand}
                </div>
               
              </div>
              <div>
             <h2 className="font-bold text-lg text-gray-900 mt-4">{data.name}</h2>
              <p className="font-semibold text-md text-gray-700 mt-2">{data.title}</p>
              <p className="text-sm text-gray-500 mt-3">{data.BoycottingReason}</p>
             </div>
              </div>
              <div className="card-actions justify-start mt-4">
                <Link
                  to={`/details/${data._id}`}
                  className="btn btn-primary w-full text-sm text-white py-2 px-4 rounded-lg hover:bg-pink-500"
                >
                  Recommend
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queries;
