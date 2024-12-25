import { useEffect } from "react";
import Banner from "../Component/Banner";
import HomeCard from "../Component/HomeCard";


const Home = () => {
    useEffect(()=>{
       document.title = "Recomify | Home"
    },[])
    return (
        <div>
            <Banner></Banner>
            <HomeCard></HomeCard>
        </div>
    );
};

export default Home;