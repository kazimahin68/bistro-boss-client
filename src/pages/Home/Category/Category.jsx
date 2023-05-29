import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'

import './Category.css'
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
    return (
        <section className="mt-20 max-w-screen-xl mx-auto">
            <SectionTitle
                subHeading={"---From 11:00am to 10:00pm---"}
                heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className=""
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className="uppercase text-white text-2xl absolute ml-24 -mt-12">salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className="uppercase text-white text-2xl absolute ml-24 -mt-12">soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className="uppercase text-white text-2xl absolute ml-24 -mt-12">pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className="uppercase text-white text-2xl absolute ml-24 -mt-12">desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className="uppercase text-white text-2xl absolute ml-24 -mt-12">drinks</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;