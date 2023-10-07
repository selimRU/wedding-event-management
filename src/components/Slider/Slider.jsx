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
        <div className=' relative'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <img width={'100%'} src={sl2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img width={'100%'} src={sl1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img width={'100%'} src={sl3} alt="" />
                    <p className=' text-4xl text-red-600 absolute bottom-[25%]'>fff</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;