import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules"; 
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { motion } from 'framer-motion';
import banner1 from '../assets/sample-1.jpg';
import banner2 from '../assets/sample-2.jpg';
import banner3 from '../assets/sample-3.jpg';
import banner4 from '../assets/sample-4.jpg';
const Banner = () => {
  return (
    <div className=" mt-16">
      <Swiper
        modules={[Autoplay]}  
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2000,  
          disableOnInteraction: false,  
        }}
      >
        <SwiperSlide>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={banner1}
            alt="Banner 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="Banner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} alt="Banner 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="Banner 3" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Banner;
