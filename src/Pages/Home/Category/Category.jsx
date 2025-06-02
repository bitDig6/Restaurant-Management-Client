// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../Components/SectionTitle';


const Category = () => {
    return (
        <div className='w-full mx-auto'>
            <SectionTitle sub="From 11.00 AM to 10.00 PM" title="order online"></SectionTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper">
                {/* slide 1 */}
                <SwiperSlide>
                    <img src="https://i.ibb.co/NdNCV59v/slide1.jpg" alt="salads" />
                    <h3 className='-mt-24 mb-10 text-center text-white uppercase font-cinzel text-shadow-amber-600'>salads</h3>
                </SwiperSlide>
                {/* slide 2 */}
                <SwiperSlide>
                    <img src="https://i.ibb.co/Qj9pwc1x/slide2.jpg" alt="pizzas" />
                    <h3 className='-mt-24 mb-10 text-center text-white uppercase font-cinzel text-shadow-amber-600'>pizzas</h3>
                </SwiperSlide>
                {/* slide 3 */}
                <SwiperSlide>
                    <img src="https://i.ibb.co/mVw3PzPG/slide3.jpg" alt="soups" />
                    <h3 className='-mt-24 mb-10 text-center text-white uppercase font-cinzel text-shadow-amber-600'>soups</h3>
                </SwiperSlide>
                {/* slide 4 */}
                <SwiperSlide className=''>
                    <img src="https://i.ibb.co/spQP1LSB/slide4.jpg" alt="desserts" />
                    <h3 className='-mt-24 mb-10 text-center text-white uppercase font-cinzel text-shadow-amber-600'>desserts</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;