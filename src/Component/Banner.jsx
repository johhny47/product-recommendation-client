import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import banner1 from '../assets/sample-1.jpg'
import banner2 from '../assets/sample-2.jpg'
import banner3 from '../assets/sample-3.jpg'



const Banner = () => {

  return (
    <div

      className='h-[450px] md:h-[600px] lg:h-[600px]'>
      {
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}


        >
          <SwiperSlide>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }} src={banner1} />
          </SwiperSlide>
          <SwiperSlide>
            <img  src={banner2} />
             
          </SwiperSlide>
          <SwiperSlide>
          <img  src={banner3} />
          </SwiperSlide>

        </Swiper>
      }


    </div>
  );
};

export default Banner;