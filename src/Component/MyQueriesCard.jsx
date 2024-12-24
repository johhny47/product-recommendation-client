import { Link } from "react-router-dom";


const MyQueriesCard = ({data,handleDelete}) => {
    const {_id,name,brand,productImageURL,title,BoycottingReason,User,currentDate}=data;
  
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={productImageURL}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{brand}</div>
    </h2>
    <p>{title}</p>
    <div className="card-actions justify-end">
     
      <Link to={`/details/${_id}`} className="badge badge-outline"><a>View Details</a></Link>
      <Link to={`/update/${_id}`} className="badge badge-outline"><a>Update</a></Link>
      <div className="badge badge-outline"> <button onClick={()=>handleDelete(_id)}>Delete</button></div>
    </div>
  </div>
</div>
    );
};

export default MyQueriesCard;
