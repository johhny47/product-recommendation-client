import { div } from "motion/react-client";
import HorzScrollCarousel from "./HorzScrollCarousel ";


const Gallery = () => {
    return (
     <div className="bg-neutral-100 mt-10">
        <h1 className="text-center py-10 text-4xl font-extrabold">MEET OUR TEAM</h1>
         <div >
      
      <HorzScrollCarousel />
     
    </div>
     </div>
    );
  };
  export default  Gallery;