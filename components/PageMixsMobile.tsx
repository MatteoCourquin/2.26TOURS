import { TypeMix } from '@/data/types';
import { urlForImage } from '@/sanity/lib/image';
import clsx from 'clsx';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Button, { BUTTON_TYPE } from './atoms/Button';
import { IconArrowUpRight } from './atoms/Icons';
import Tag from './atoms/Tag';
import Typography from './atoms/Typography';

const SwiperButton = () => {
  const swiper = useSwiper();

  return (
    <div className="flex w-full justify-between px-x-default">
      <button className="bg-red-500 text-white" onClick={() => swiper.slidePrev()}>
        Prev
      </button>
      <button className="bg-red-500 text-white" onClick={() => swiper.slideNext()}>
        Next
      </button>
    </div>
  );
};

const PageMixsMobile = ({ mixs, className }: { mixs: TypeMix[]; className: string }) => {
  const [activeMix, setActiveMix] = useState<TypeMix | null>(null);

  const titleRef = useRef<HTMLDivElement>(null);
  const artistRef = useRef<HTMLDivElement>(null);
  const genresRefs = useRef<HTMLDivElement[] | null[]>([]);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const timelineChangeDiscRef = useRef(gsap.timeline({ paused: true }));

  const hideAnimation = (onCompleteCallback: () => void) => {
    timelineChangeDiscRef.current
      .clear()
      .add(
        gsap.to(linkRef.current, {
          scale: 0,
          opacity: 0,
          ease: 'power4.inOut',
          duration: 0.4,
        }),
      )
      .add(
        gsap.to(descriptionRef.current, {
          y: 30,
          opacity: 0,
          ease: 'power4.inOut',
          duration: 0.4,
        }),
        '=-0.3',
      )
      .add(() => {
        gsap.to(genresRefs.current.filter((el) => el !== null).reverse(), {
          scale: 0,
          opacity: 0,
          ease: 'power4.inOut',
          duration: 0.4,
          stagger: 0.1,
        });
      }, '=-0.3')
      .add(
        gsap.to(artistRef.current, {
          y: 30,
          opacity: 0,
          ease: 'power4.inOut',
          duration: 0.4,
        }),
        '=-0.1',
      )
      .add(
        gsap.to(titleRef.current, {
          y: 30,
          opacity: 0,
          ease: 'power4.inOut',
          duration: 0.4,
        }),
        '=-0.3',
      )
      .add(() => {
        onCompleteCallback();
      })
      .play();
  };
  const showAnimation = () => {
    timelineChangeDiscRef.current
      .clear()
      .add(
        gsap.fromTo(
          titleRef.current,
          {
            y: -30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: 'power4.inOut',
            duration: 0.4,
          },
        ),
      )
      .add(
        gsap.fromTo(
          artistRef.current,
          {
            y: -30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: 'power4.inOut',
            duration: 0.4,
          },
        ),
        '=-0.3',
      )
      .add(
        gsap.to(genresRefs.current, {
          scale: 1,
          opacity: 1,
          ease: 'power4.inOut',
          duration: 0.4,
          stagger: 0.1,
        }),
        '=-0.3',
      )
      .add(
        gsap.fromTo(
          descriptionRef.current,
          {
            y: -30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: 'power4.inOut',
            duration: 0.4,
          },
        ),
        '=-0.3',
      )
      .add(
        gsap.to(linkRef.current, {
          scale: 1,
          opacity: 1,
          ease: 'power4.inOut',
          duration: 0.4,
        }),
        '=-0.3',
      )
      .play();
  };

  const handleMixClick = (index: number) => {
    hideAnimation(() =>
      setActiveMix({
        title: mixs[index].title,
        subtitle: mixs[index].subtitle,
        artist: mixs[index].artist || '2.26 tours',
        description: mixs[index].description || null,
        link: mixs[index].link,
        genres: mixs[index].genres,
        cover: mixs[index].cover,
      }),
    );
  };

  useEffect(() => {
    setActiveMix({
      title: mixs[0].title,
      subtitle: mixs[0].subtitle,
      artist: mixs[0].artist || '2.26 tours',
      description: mixs[0].description || null,
      link: mixs[0].link,
      genres: mixs[0].genres,
      cover: mixs[0].cover,
    });
    showAnimation();
  }, []);

  useEffect(() => {
    showAnimation();
  }, [activeMix]);

  useEffect(() => {
    setActiveMix({
      title: mixs[0].title,
      subtitle: mixs[0].subtitle,
      artist: mixs[0].artist || '2.26 tours',
      description: mixs[0].description || null,
      link: mixs[0].link,
      genres: mixs[0].genres,
      cover: mixs[0].cover,
    });
  }, []);

  return (
    <div
      className={clsx(
        className,
        'w-full flex-col items-center justify-center pb-y-default pt-header',
      )}
    >
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
        onSlideChange={(e) => handleMixClick(e.activeIndex)}
      >
        {mixs.map((mix, index) => (
          <SwiperSlide key={mix.title + index} className="px-20">
            <img src={urlForImage(mix.cover)} />
          </SwiperSlide>
        ))}
        {/* <SwiperButton /> */}
      </Swiper>
      <div className="flex w-full flex-col items-center gap-6 self-start px-x-default text-center">
        <Typography type="text" className="text-lg uppercase">
          2.26 PODCAST <span className="text-white">#{activeMix?.subtitle}</span>
        </Typography>
        <div className="h-[2px] w-20 rounded-full bg-white-opacity" />
        <div>
          <div ref={titleRef} className="-translate-y-8 opacity-0">
            <Typography type="heading2" as="heading5">
              {activeMix?.title}
            </Typography>
          </div>
          <div ref={artistRef} className="-translate-y-8 pt-2 opacity-0">
            <Typography className="inline" type="text">
              par{' '}
            </Typography>
            <Typography className="inline font-bold" type="heading2" as="heading6" colored={true}>
              {activeMix?.artist}
            </Typography>
          </div>
        </div>
        <div className="flex gap-3">
          {activeMix?.genres.map((genre, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                genresRefs.current[index] = el;
              }}
              className="scale-0 opacity-0"
            >
              <Tag>{genre.name}</Tag>
            </div>
          ))}
        </div>
        {activeMix?.description && (
          <div ref={descriptionRef} className="-translate-y-8 opacity-0">
            <Typography type="text">{activeMix?.description}</Typography>
          </div>
        )}
        <div ref={linkRef} className="w-fit scale-0 opacity-0">
          <Button as="a" href={activeMix?.link} target="_blank" type={BUTTON_TYPE.TEXT}>
            <p className="pr-2">Écouter sur soundcloud</p>
            <IconArrowUpRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageMixsMobile;
