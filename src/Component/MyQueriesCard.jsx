import { Link } from "react-router-dom";


const MyQueriesCard = ({data,handleDelete}) => {
    const {_id,name,brand,productImageURL,title,BoycottingReason,User,currentDate}=data;
  
    return (
        <div className="card bg-base-100 shadow-xl flex-1 max-w-sm">
  <figure>
    <img
      src={productImageURL}
     className="h-32 md:h-36 lg:h-60 flex-1"
      alt="Shoes" />
  </figure>
  <div className="  md:card-body lg:card-body flex-1">
  <div className="badge badge-secondary">{brand}</div>
    <h2 className="card-title">
      {name}
     
    </h2>
    <p>{title}</p>
    <div className="flex-none md:card-actions lg:card-actions  justify-start">
     
      <Link to={`/details/${_id}`} className="md:badge md:badge-outline lg:badge lg:badge-outline btn btn-xs border-2 border-black"><a>View Details</a></Link>
      <Link to={`/update/${_id}`} className="badge badge-outline"><a>Update</a></Link>
      <div className="badge badge-outline"> <button onClick={()=>handleDelete(_id)}>Delete</button></div>
    </div>
  </div>
</div>
    );
};

export default MyQueriesCard;



