"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import posterEd from "../assets/posterEd.jpeg";
import posterTom from "../assets/posterTom.jpeg";
import posterPod from "../assets/posterPod.png";
import "./styles.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Image from "next/image";

function HeroComponents() {
  return (
    <>
      <div className="container-box">
        <div className="small-container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
            }}
            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={posterEd} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={posterTom} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={posterPod} className="w-screen h-auto" />
            </SwiperSlide>
            {/* slide dari event imgUrl */}
          </Swiper>
        </div>

        <button className="arrow-left arrow">
          <IoIosArrowDropleftCircle className=" text-[30px]" />
        </button>
        <button className="arrow-right arrow">
          <IoIosArrowDroprightCircle className=" text-[30px]" />
        </button>
      </div>
    </>
  );
}
export default HeroComponents;
