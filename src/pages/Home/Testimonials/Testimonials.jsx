import SectionTitle from "../../../components/SectionTitle";
import { PulseLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(reviews)

    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <PulseLoader
                className="text-center mt-20"
                color={'#36d7b7'}
                loading={loading}
                // cssOverride={override}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        )
    }
    return (
        <div className="mt-20 max-w-screen-xl mx-auto">
            <SectionTitle heading={'Testimonials'} subHeading={'--- What Our Client Say ---'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="w-4/5 mx-auto text-center">
                            <Rating
                                className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className="mx-auto my-10 h-12 w-12"></FaQuoteLeft>
                            <p>{review.details}</p>
                            <h2 className="text-yellow-500 uppercase text-2xl mt-5">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;