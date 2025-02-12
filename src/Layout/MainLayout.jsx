import { Outlet } from "react-router-dom";

import Footer from "../Component/Footer";
import Navbar from "../Component/NavBar/Navbar";




const MainLayout = () => {
    

   
    return (
        <div className="max-w-7xl mx-auto ">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-180px)] w-full mx-auto">
              <Outlet></Outlet>
            </div>
           
       
      <Footer></Footer>
          
</div>




    
    );
};

export default MainLayout;