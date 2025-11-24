import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import i1 from '../assets/guiter.jpg'
import i2 from '../assets/english.jpg'
import i3 from '../assets/yoga.jpg'
import i4 from '../assets/coding.jpg'
import i5 from '../assets/python.jpg'
import i6 from '../assets/photography.jpg'
import i7 from '../assets/meditaion.jpg'
import i8 from '../assets/marketing.jpg'
import i9 from '../assets/chess.jpg'



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";


export default function App() {
  return (
    <>
     <div className="bg-yellow-50">
       <div className="container mx-auto py-8">
        <div className="rounded-lg overflow-hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
           <img src={i6} alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src={i2} alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src={i3} alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src={i4} alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src={i5} alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src={i1} alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src={i7} alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src={i8} alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src={i9} alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
         
        </Swiper>
      </div>
      </div>
     </div>
    </>
  );
}
