import { div } from "motion/react-client";
import HorzScrollCarousel from "./HorzScrollCarousel ";


const Gallery = () => {
    return (
     <div className="bg-gray-100 dark:bg-black dark:text-white">
        <h1 className="text-center  py-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">MEET OUR TEAM</h1>
         <div >
      
      <HorzScrollCarousel />
     
    </div>
     </div>
    );
  };
  export default  Gallery;