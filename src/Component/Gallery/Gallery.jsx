import { div } from "motion/react-client";
import HorzScrollCarousel from "./HorzScrollCarousel ";


const Gallery = () => {
    return (
     <div className="bg-gray-100 ">
        <h1 className="text-center  pb-10 text-4xl font-extrabold">MEET OUR TEAM</h1>
         <div >
      
      <HorzScrollCarousel />
     
    </div>
     </div>
    );
  };
  export default  Gallery;