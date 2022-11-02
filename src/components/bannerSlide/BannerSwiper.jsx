import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import image1 from "/public/image/image1.jpg";
import image2 from "/public/image/image2.jpg";
import image3 from "/public/image/image3.jpg";
import Image from "next/image";

export default function BannerSwiper(){
    return(
        <>
            <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={image1}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image3}/>
        </SwiperSlide>
        
      </Swiper>
        </>
    )
}