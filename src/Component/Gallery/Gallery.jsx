import { div } from "motion/react-client";
import HorzScrollCarousel from "./HorzScrollCarousel ";


const Gallery = () => {
    return (
     <div className="bg-gray-100 p-4">
        <h1 className="text-center pt-10 pb-10 text-4xl font-extrabold">MEET OUR TEAM</h1>
         <div >
      
      <HorzScrollCarousel />
     
    </div>
     </div>
    );
  };
  export default  Gallery;