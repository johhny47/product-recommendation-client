
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import axios from 'axios';
import useAxiosSecure from '../hook/useAxiosSecure';

const MyRecommendations = () => {
    const axiosSucure = useAxiosSecure()
    const{user}=useContext(AuthContext)
    const email = user?.email
    // console.log(email)
    // const [data,setData]=useState([])
    axiosSucure.get(`/myrecommendation/search?userEmail=${email}`)
    .then(res=>console.log(res.data))
   
    return (

        <div>
            <h1>my recom</h1>
        </div>
    );
};

export default MyRecommendations;