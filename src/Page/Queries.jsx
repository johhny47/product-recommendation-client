
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hook/useAxiosSecure";

const Queries = () => {
  const axiosSecure = useAxiosSecure();
  const [queries, setQueries] = useState([]);
  const [search, setSearch] = useState("");
  const [gridColumns, setGridColumns] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllQueries = async () => {
      const { data } = await axiosSecure.get(`/queries?search=${search}`);
      setQueries(data);
      setLoading(false);
    };
    fetchAllQueries();
    document.title = "Recomify | Queries"
  }, [search]);

  const updateGridColumns = (columns) => {
    setGridColumns(columns);
  };

  return (
    <div>
      <div className="my-4">
        <label className="input input-bordered max-w-40 mx-auto flex items-center gap-2">
          <input
            type="text"
            className="max-w-40"
            placeholder="Search"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      <div className="flex justify-center my-4 gap-2">
        <button className="btn btn-primary"
          onClick={() => updateGridColumns(1)}>1 Column</button>
          <button className="btn btn-primary"
          onClick={() => updateGridColumns(2)}>2 Column</button>
          <button className="btn btn-primary"
          onClick={() => updateGridColumns(3)}>3 Column</button>
       
      </div>

     { loading && <div className='mx-auto h-14 w-14'>
        <span className="loading loading-spinner mx-auto text-error"></span>
   </div>}

      <div
        className={`grid gap-6 mx-auto ${
          gridColumns === 1
            ? "grid-cols-none justify-center"
            : gridColumns === 2
            ? "grid-cols-2 justify-items-center"
            : "grid-cols-3"
        }`}
      >
        {queries.map((data) => (
          <div
            key={data._id}
            className="card bg-base-100 shadow-xl flex-1 max-w-sm"
          >
            <figure>
              <img
                src={data.productImageURL}
                className="h-32 md:h-36 lg:h-60 flex-1"
                alt="Product"
              />
            </figure>
            <div className="  md:card-body lg:card-body flex-1">
              <div className="badge badge-secondary ">
                {data.recommendationCount}
              </div>
              <div className="md:badge md:badge-secondary lg:badge lg:badge-secondary bg-pink-400 text-sm mt-1 rounded-md p-1">
                {data.brand}
              </div>
              <h2 className="font-bold text-sm md:text-lg lg:text-xl flex-shrink">{data.name}</h2>
              <p className="font-semibold text-sm md:text-lg lg:text-lg flex-shrink">{data.title}</p>
              <p className="text-gray-400 text-sm md:text-xl lg:text-xl">
                {data.BoycottingReason}
              </p>
              <div className="card-actions justify-start ">
                <Link
                  to={`/details/${data._id}`}
                  className="md:badge md:badge-outline lg:badge lg:badge-outline btn btn-block  "
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
