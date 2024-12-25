import { useEffect } from "react";
import Banner from "../Component/Banner";
import HomeCard from "../Component/HomeCard";
import Blog from "../Component/Blog";
import Gallery from "../Component/Gallery/Gallery";


const Home = () => {
    useEffect(()=>{
       document.title = "Recomify | Home"
    },[])
    return (
        <div>
            <Banner></Banner>
            <HomeCard></HomeCard>
            <Gallery></Gallery>
            <Blog></Blog>
        </div>
    );
};

export default Home;