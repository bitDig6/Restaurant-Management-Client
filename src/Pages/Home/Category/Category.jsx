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
        <div className=''>
            <SectionTitle subTitle="From 11.00 AM to 10.00 PM" title="order online"></SectionTitle>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                // centeredSlides={true}
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
                    }
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
                {/* slide 5 */}
                <SwiperSlide className=''>
                    <img src="https://i.ibb.co/V0d0k99M/pastas.jpg" alt="pastas" />
                    <h3 className='-mt-24 mb-10 text-center text-white uppercase font-cinzel text-shadow-amber-600'>pastas</h3>
                </SwiperSlide>
                {/* slide 6 */}
                <SwiperSlide className=''>
                    <img src="https://i.ibb.co/TD6mCQ7t/burgers.jpg" alt="burgers" />
                    <h3 className='-mt-24 mb-10 text-center text-white uppercase font-cinzel text-shadow-amber-600'>burgers</h3>
                </SwiperSlide>
                {/* slide 7 */}
                <SwiperSlide className=''>
                    <img src="https://i.ibb.co/Lhtq4r2Q/wraps.jpg" alt="wraps" />
                    <h3 className='-mt-24 mb-10 text-center text-white uppercase font-cinzel text-shadow-amber-600'>wraps</h3>
                </SwiperSlide>
                {/* slide 8 */}
                <SwiperSlide className=''>
                    <img src="https://i.ibb.co/W1bdgSJ/drinks.webp" alt="drinks" />
                    <h3 className='-mt-24 mb-10 text-center text-white uppercase font-cinzel text-shadow-amber-600'>drinks</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category; 
