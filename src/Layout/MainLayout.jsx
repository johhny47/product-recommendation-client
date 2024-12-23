import { Outlet } from "react-router-dom";

import Footer from "../Component/Footer";
import Navbar from "../Component/NavBar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;