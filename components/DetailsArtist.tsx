import { TypeArtist } from '@/data/types';
import { formatDate } from '@/utils/functions';
import { urlForImage } from '@/sanity/lib/image';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Button, { BUTTON_TYPE } from './atoms/Button';
import { IconClose, IconFacebook, IconInstagram, IconSoundcloud } from './atoms/Icons';
import Tag from './atoms/Tag';
import Typography from './atoms/Typography';
import Image from 'next/image';

const DetailsArtist = ({
  artist,
  isOpen,
  setIsOpen,
}: {
  artist: TypeArtist;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const timeline = useRef<GSAPTimeline>(gsap.timeline());
  const sliderRef = useRef<HTMLDivElement>(null);
  const wrapperSectionRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLDivElement>(null);
  const wrapperImageRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const wrapperTitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const wrapperSectionDescritionRef = useRef<HTMLDivElement>(null);

  const getClass = (index: number) => {
    if (index % 15 === 0) return 'big';
    else if (index % 3 === 0) return 'vertical';
    else if (index % 5 === 0) return 'horizontal';
  };

  useGSAP(() => {
    timeline.current = gsap
      .timeline({ paused: true })
      .to(titleRef.current, { y: 100, opacity: 0, duration: 0 })
      .to(wrapperSectionRef.current, { visibility: 'visible', duration: 0 })
      .addLabel('startAnimations')
      .to(
        wrapperSectionRef.current,
        { backdropFilter: 'blur(40px)', duration: 0.3 },
        'startAnimations',
      )
      .to(
        imageRef.current,
        { height: '100%', y: 0, duration: 1, ease: 'power2.inOut' },
        'startAnimations',
      )
      .to(
        titleRef.current,
        { y: 0, opacity: 1, duration: 1, ease: 'power2.inOut' },
        'startAnimations',
      )
      .to(
        wrapperSectionDescritionRef.current,
        { y: 0, duration: 1, ease: 'power2.inOut' },
        'startAnimations',
      )
      .to(
        closeButtonRef.current,
        { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.inOut' },
        'startAnimations',
      );
  }, [artist]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animationConfig = {
      scrollTrigger: {
        trigger: wrapperSectionDescritionRef.current,
        scroller: wrapperSectionRef.current,
        scrub: 0.3,
        toggleActions: 'play none none none',
      },
    };

    gsap.to(wrapperImageRef.current, {
      ...animationConfig,
      scale: 1.4,
    });

    gsap.to(wrapperTitleRef.current, {
      ...animationConfig,
      scale: 0.6,
    });
  });

  useEffect(() => {
    if (isOpen) {
      timeline.current.play();
    } else {
      gsap.registerPlugin(ScrollToPlugin);
      if (wrapperSectionRef.current) {
        gsap.to(wrapperSectionRef.current, {
          scrollTo: { y: 0 },
          duration: 0.5,
          ease: 'power2.inOut',
        });
        setTimeout(
          () => {
            timeline.current.reverse();
          },
          wrapperSectionRef.current.scrollTop >= 200 ? 400 : 0,
        );
      }
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={closeButtonRef}
        className="fixed right-default top-[108px] z-[120] scale-0 opacity-0"
      >
        <Button as="button" type={BUTTON_TYPE.ICON} onClick={() => setIsOpen(false)}>
          <IconClose />
        </Button>
      </div>
      <div
        data-lenis-prevent
        ref={wrapperSectionRef}
        className="left-O invisible fixed bottom-0 right-0 top-0 z-[99] min-h-svh w-screen overflow-y-scroll scroll-smooth backdrop-blur-0 will-change-auto"
      >
        <div
          onClick={() => setIsOpen(false)}
          className="flex h-svh w-full items-end justify-center overflow-hidden sm:px-x-default sm:pb-[120px] sm:pt-[140px]"
        >
          <div
            ref={wrapperImageRef}
            className="flex h-full w-full origin-bottom items-end justify-center overflow-hidden will-change-[transform,opacity]"
          >
            <div
              ref={imageRef}
              className="flex h-0 origin-bottom items-end justify-center overflow-hidden"
            >
              <div className="h-screen w-full sm:h-[calc(100vh-260px)] sm:w-screen">
                <Image
                  width={1080}
                  height={1080}
                  src={urlForImage(artist.portrait)}
                  alt={'Portrait de ' + artist.name}
                  className="h-screen w-screen object-cover sm:h-full sm:w-full sm:object-contain"
                />
              </div>
            </div>
          </div>
          <div className="text-shadow-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-[50vh] text-center sm:pt-[30vh]">
            <div ref={wrapperTitleRef} className="will-change-[transform,opacity]">
              <div ref={titleRef}>
                <Typography className="sm:whitespace-nowrap" type="heading2" as="heading1">
                  {artist.name}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <section
          ref={wrapperSectionDescritionRef}
          className="section-revealer w-screen translate-y-14 border-none bg-black-opacity pt-12 text-white sm:border-x-[1px] sm:border-x-grey"
        >
          <div className="flex w-full flex-col gap-24 pb-24">
            <div className="grid grid-cols-1 gap-6 px-x-default md:grid-cols-2">
              <div className="flex flex-col gap-6">
                <Typography type="heading3" colored={true} className="hidden sm:block">
                  {artist.name}
                </Typography>
                <div className="flex gap-3">
                  {artist.genres.map((genre, index) => (
                    <Tag key={index}>{genre.name}</Tag>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    as="a"
                    href="https://www.instagram.com/2.26tours"
                    target="_blank"
                    type={BUTTON_TYPE.ICON}
                  >
                    <IconInstagram />
                  </Button>
                  <Button
                    as="a"
                    href="https://www.facebook.com/2.26tours"
                    target="_blank"
                    type={BUTTON_TYPE.ICON}
                  >
                    <IconFacebook />
                  </Button>
                  <Button
                    as="a"
                    href="https://soundcloud.com/2-26-tours"
                    target="_blank"
                    type={BUTTON_TYPE.ICON}
                  >
                    <IconSoundcloud />
                  </Button>
                </div>
              </div>
              {artist.description && <Typography type="text">{artist.description}</Typography>}
            </div>
            {artist.events && (
              <div>
                <Typography className="px-x-default pb-10" type="heading4" as="heading5">
                  DERNIERS MIXS
                </Typography>
                <div ref={sliderRef} className="flex w-full overflow-x-scroll px-x-default">
                  {artist.events.map((event, index) => (
                    <div className="slider-item h-fit overflow-hidden" key={index}>
                      <div className="overflow-hidden">
                        <div className="anim-image-slider relative h-[30vh] min-h-[240px]">
                          <Image
                            width={1080}
                            height={1080}
                            src={urlForImage(event.illustration)}
                            alt={'Dernier mix ' + artist.name}
                            className="absolute h-full w-full object-cover"
                          />
                        </div>
                      </div>
                      <Typography className="pt-4" type="heading5" as="heading6">
                        {event.name}
                      </Typography>
                      <Typography className="py-2" type="text">
                        {formatDate(event.date)}
                      </Typography>
                      <Typography type="text">@{event.location}</Typography>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {artist.gallery && (
              <div className="px-x-default">
                <Typography className="pb-10" type="heading4" as="heading5">
                  GALERIE
                </Typography>
                <div className="gallery-container">
                  {artist.gallery
                    .filter((image) => image !== null)
                    .map((image, index) => (
                      <div className={clsx(getClass(index), 'overflow-hidden')} key={index}>
                        <LazyLoadImage
                          alt={'Dernier mix ' + artist.name}
                          effect="blur"
                          width="100%"
                          height="100%"
                          className="h-full w-full object-cover"
                          src={urlForImage(image)}
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailsArtist;
