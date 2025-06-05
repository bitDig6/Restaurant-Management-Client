import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import useReviews from '../../../Hooks/useReviews';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
    const { reviews, loading, error } = useReviews();

    if (loading) {
        return <div className='p-20 flex justify-center items-center'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    }

    if (error) {
        return error;
    }


    return (
        <section className='my-20'>
            <SectionTitle subTitle="What our Clients say" title="testimonials"></SectionTitle>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide className='p-20' key={review._id}>
                        <div className='flex flex-col gap-8 items-center justify-center'>
                            <Rating
                            style={ {maxWidth: 180} }
                            value={review.rating}
                            readOnly
                        >
                        </Rating>
                        <FaQuoteRight className='text-5xl'></FaQuoteRight>
                        <p>{review.details} </p>
                        <p className='text-xl text-amber-500 font-semibold'>{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;