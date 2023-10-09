import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import sl1 from '../../assets/images/sl/sl1.png'
import sl2 from '../../assets/images/sl/sl2.png'
import sl3 from '../../assets/images/sl/sl3.png'

const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className=' relative'>
                        <img width={'100%'} src={sl2} alt="" />
                        <div className=' bg-black h-full w-full bottom-0 absolute opacity-30'></div>
                        <p className=' text-6xl absolute bottom-[20%] left-5 text-white italic font-bold'>Celebrate as you like...</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative'>
                        <img width={'100%'} src={sl1} alt="" />
                        <div className=' bg-black h-full w-full bottom-0 absolute opacity-30'></div>
                        <p className=' text-6xl absolute bottom-[20%] left-5 text-white italic font-bold'>Enjoy your life...</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' relative'>
                        <img width={'100%'} src={sl3} alt="" />
                        <div className=' bg-black h-full w-full bottom-0 absolute opacity-30'></div>
                        <p className=' text-6xl absolute bottom-[20%] left-5 text-white italic font-bold'>Happyness forever...</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;