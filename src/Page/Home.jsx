import { useEffect } from "react";
import Banner from "../Component/Banner";
import HomeCard from "../Component/HomeCard";
import Blog from "../Component/Blog";
import Gallery from "../Component/Gallery/Gallery";
import Features from "../Component/Features";

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
            <Features></Features>
        </div>
    );
};

export default Home;