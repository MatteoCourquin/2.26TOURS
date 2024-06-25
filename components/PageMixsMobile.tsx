import { TypeMix } from '@/data/types';
import { urlForImage } from '@/sanity/lib/image';
import clsx from 'clsx';
import { ReactNode, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Typography from './Atoms/Typography';

const SwiperButtonNext = ({ children }: { children: ReactNode }) => {
  const swiper = useSwiper();
  console.log(swiper);

  return (
    <button className="bg-red-500 text-white" onClick={() => swiper.slideNext()}>
      {children}
    </button>
  );
};

const PageMixsMobile = ({ mixs, className }: { mixs: TypeMix[]; className: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);

  return (
    <div className={clsx(className, 'w-full flex-col items-center justify-center pt-header')}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 80,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        onSlideChange={(e) => setActiveIndex(e.activeIndex)}
      >
        <SwiperButtonNext>NEXT</SwiperButtonNext>
        {mixs.map((mix, index) => (
          <SwiperSlide key={mix.title + index} className="px-20">
            <img src={urlForImage(mix.cover)} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Typography type="heading1">{activeIndex}</Typography>
      
    </div>
  );
};

export default PageMixsMobile;
