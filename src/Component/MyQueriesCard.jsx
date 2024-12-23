import { Link } from "react-router-dom";


const MyQueriesCard = ({data,handleDelete}) => {
    const {_id,name,brand,productImageURL,title,BoycottingReason,User,currentDate}=data;
  
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
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
