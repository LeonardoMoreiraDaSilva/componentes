import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import image5 from "../../../public/image/image5.jpg";
import image6 from "../../../public/image/image6.jpg";
import styles from "../../styles/Banner.module.css";
import  {DefaultButton} from "../button";


export default function BannerSwiperPlay(){
    return(
        <>
            <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide>
          <div className={styles.bannerCentral}>
              <h2>Teste</h2>
              <DefaultButton bradius="25px">Send</DefaultButton>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image5} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image6}/>
        </SwiperSlide>
      </Swiper>

        </>
    )
}