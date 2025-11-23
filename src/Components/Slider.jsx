import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";


export default function App() {
  return (
    <>
      <div>
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
           <img src="https://i.ibb.co.com/5WZDBJVJ/guiter.jpg" alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src="https://i.ibb.co.com/M5cHXMjV/english.jpg" alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src="https://i.ibb.co.com/N6zH3pB0/yoga.jpg" alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src="https://i.ibb.co.com/WWqxrCGN/coding.jpg" alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src="https://i.ibb.co.com/qYH4L0dT/python.jpg" alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src="https://i.ibb.co.com/TDZqFBwt/photography.jpg" alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src="https://i.ibb.co.com/q3gYjSYN/meditaion.jpg" alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src="https://i.ibb.co.com/gLxng8sd/marketing.jpg" alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
          <SwiperSlide>
           <img src="https://i.ibb.co.com/3yvsXmM9/chess.jpg" alt="img" className="w-full object-cover h-[400px]" />
          </SwiperSlide>
         
        </Swiper>
      </div>
    </>
  );
}
