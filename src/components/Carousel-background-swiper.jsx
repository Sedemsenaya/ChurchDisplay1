import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {pic1} from "../assets/pic1.jpg";




function CarouselBackgroundSwiper() {
    return (
        <div>
            <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>

          <img src={pic1} alt="Slide 1" />
      </SwiperSlide>

      ...
    </Swiper>
        </div>
    );
}

export default CarouselBackgroundSwiper;