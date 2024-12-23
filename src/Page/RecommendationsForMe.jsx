import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import axios from "axios";
import useAxiosSecure from "../hook/useAxiosSecure";


const RecommendationsForMe = () => {
    const axiosSucure = useAxiosSecure()
    const{user}=useContext(AuthContext)
  
     const email =user?.email
     console.log(email)
     axiosSucure.get(`/recomendationforme/search?userEmail=${email}`)
    .then(res=>console.log(res.data))
    return (
        <div>
            <h1>recom for me</h1>
        </div>
    );
};

export default RecommendationsForMe;