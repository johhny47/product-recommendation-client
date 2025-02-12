import { Link } from "react-router-dom";

const MyQueriesCard = ({ data, handleDelete }) => {
  const { _id, name, brand, productImageURL, title, BoycottingReason, User, currentDate } = data;

  return (
    <div className="card bg-base-100 shadow-xl flex-1 max-w-sm mx-auto">
      <figure>
        <img
          src={productImageURL}
          className="h-32 md:h-36 lg:h-60 w-full object-cover rounded-t-lg"
          alt={name}
        />
      </figure>
      <div className="card-body flex-1 p-4">
        <div className="badge badge-secondary">{brand}</div>
        <h2 className="card-title text-lg font-semibold mt-2">{name}</h2>
        <p className="text-sm text-gray-600 mt-2">{title}</p>

        <div className="card-actions flex flex-wrap justify-start gap-2 mt-4">
      
          <Link
            to={`/details/${_id}`}
            className="btn btn-xs border-2 border-blue-500 text-blue-500 hover:bg-blue-100 rounded-md transition-all duration-300"
          >
            View Details
          </Link>

       
          <Link
            to={`/update/${_id}`}
            className="btn btn-xs border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-100 rounded-md transition-all duration-300"
          >
            Update
          </Link>

        
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-xs border-2 border-red-500 text-red-500 hover:bg-red-100 rounded-md transition-all duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyQueriesCard;
