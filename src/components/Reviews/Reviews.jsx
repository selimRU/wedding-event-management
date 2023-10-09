import { CiLocationOn } from 'react-icons/ci';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import pic1 from '../../assets/images/sl/ma.jpg'
import pic2 from '../../assets/images/sl/she.jpg'
import pic3 from '../../assets/images/sl/so.jpg'
import pic4 from '../../assets/images/sl/saihan.jpg'
const Reviews = () => {
    return (
        <div className=' max-w-6xl mx-auto mt-20 mb-10 px-5'>
            <h1 className=' text-2xl lg:text-5xl text-center font-bold mb-5'>Our Client's Reviews</h1>
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={5}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className=' space-y-3'>
                        <div className=' flex gap-1 items-center'>
                            <img className=' h-8 w-8 rounded-full' src={pic1} alt="" />
                            <h3 className=' font-semibold'>Mahebub Hasan</h3>
                        </div>
                        <div className=' flex gap-1 items-center'>
                            <CiLocationOn></CiLocationOn>
                            <h3 className=' font-semibold'>Dhaka</h3>
                        </div>
                        <p className=''>They were exactly what we were looking for when we started to plan our wedding. They were super patient with all our questions during the planning process and during the days just prior to our wedding. We honestly couldn't have asked for a better team of professionals to make our day the most amazing day ever. SRS Wedding were and are so sweet, down to earth and personable!</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' space-y-3'>
                        <div className=' flex gap-1 items-center'>
                            <img className=' h-8 w-8 rounded-full' src={pic2} alt="" />
                            <h3 className=' font-semibold'>Shezan Mahmud</h3>
                        </div>
                        <div className=' flex gap-1 items-center'>
                            <CiLocationOn></CiLocationOn>
                            <h3 className=' font-semibold'>Chuadanga</h3>
                        </div>
                        <p>We had such a great experience with SRS Wedding! They were attentive, easy to work with and professional. They provided anything and everything we needed although we chose to keep it simple. They handled my family and friends perfectly and gave my husband everything he asked. When it came down to the photos we had a blast! We recommend them highly!</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' space-y-3'>
                        <div className=' flex gap-1 items-center'>
                            <img className=' h-8 w-8 rounded-full' src={pic3} alt="" />
                            <h3 className=' font-semibold'>Sabah Mehjabin</h3>
                        </div>
                        <div className=' flex gap-1 items-center'>
                            <CiLocationOn></CiLocationOn>
                            <h3 className=' font-semibold'>Alamdanga</h3>
                        </div>
                        <p>Thank you so much SRS Wedding! You guys are all amazing, kind, professional, attentive, on point answering back to emails, calls, changes and concerns. You all made my wedding beautiful and more than what I expected! Thank you to all the vendors as well! You guys are incredible! Thank you so much and God bless you all!</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' space-y-3'>
                        <div className=' flex gap-1 items-center'>
                            <img className=' h-8 w-8 rounded-full' src={pic4} alt="" />
                            <h3 className=' font-semibold'>Saihan</h3>
                        </div>
                        <div className=' flex gap-1 items-center'>
                            <CiLocationOn></CiLocationOn>
                            <h3 className=' font-semibold'>Alamdanga,Chuadanga</h3>
                        </div>
                        <p>SRS Wedding especially made sure that our big day will be perfect as we have planned. From the first email contact the service provided was excellent, professional, legal assistance with marriage license, bride hair and make up, photos and all other requests were arranged and fulfilled as agreed.</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Reviews;