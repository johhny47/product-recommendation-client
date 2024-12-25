import { useEffect } from "react";
import Banner from "../Component/Banner";
import HomeCard from "../Component/HomeCard";
import Blog from "../Component/Blog";


const Home = () => {
    useEffect(()=>{
       document.title = "Recomify | Home"
    },[])
    return (
        <div>
            <Banner></Banner>
            <HomeCard></HomeCard>
            <Blog></Blog>
        </div>
    );
};

export default Home;