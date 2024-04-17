import { TypeArtist, TypeArtistMix } from '@/data/types';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Button, { BUTTON_TYPE } from './Atoms/Button';
import Tag from './Atoms/Tag';
import Typography from './Atoms/Typography';

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
  const wrapperSectionRef = useRef<HTMLDivElement>(null);
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
    gsap.registerPlugin(ScrollTrigger);
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
      );
  }, [artist]);

  // useGSAP(() => {
  //   const scaleImage = (progress: number) => {
  //     const scale = 1 + 1.4 * progress;
  //     gsap.set(wrapperImageRef.current, { scale: scale });
  //   };
  //   const scaleTitle = (progress: number) => {
  //     const scale = 1 - 0.6 * progress;
  //     gsap.set(wrapperTitleRef.current, { scale: scale });
  //   };

  //   const animationConfig = {
  //     scrollTrigger: {
  //       trigger: wrapperSectionDescritionRef.current,
  //       scroller: wrapperSectionRef.current,
  //       start: 'top bottom',
  //       end: 'bottom top',
  //       toggleActions: 'play none none none',
  //       onUpdate: (self: ScrollTrigger) => {
  //         scaleImage(self.progress);
  //         scaleTitle(self.progress);
  //       },
  //     },
  //   };

  //   gsap.to(wrapperImageRef.current, animationConfig);
  //   gsap.to(wrapperTitleRef.current, animationConfig);
  // });

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

  useLayoutEffect(() => {
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
        data-lenis-prevent
        ref={wrapperSectionRef}
        className="left-O invisible fixed bottom-0 right-0 top-0 z-[99] min-h-svh w-screen overflow-y-scroll scroll-smooth backdrop-blur-0 will-change-auto"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <div className="flex h-svh w-full items-end justify-center overflow-hidden px-x-default pb-[120px] pt-[140px]">
          <div
            ref={wrapperImageRef}
            className="flex h-full w-full origin-bottom items-end justify-center overflow-hidden will-change-[transform,opacity]"
          >
            <div
              ref={imageRef}
              className="flex h-0 origin-bottom items-end justify-center overflow-hidden"
            >
              <div className="h-[calc(100vh-260px)] w-full">
                <img src={artist.portrait} alt="" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
          <div className="text-shadow-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-[30vh] text-center">
            <div ref={wrapperTitleRef} className="will-change-[transform,opacity]">
              <div ref={titleRef}>
                <Typography className="whitespace-nowrap" type="heading2" as="heading1">
                  {artist.name}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <section
          ref={wrapperSectionDescritionRef}
          className="section-revealer w-screen translate-y-14 border-x-[1px] border-x-grey bg-black-opacity pt-12 text-white"
        >
          <div className="flex w-full flex-col gap-24 pb-24">
            <div className="grid grid-cols-1 gap-6 px-x-default md:grid-cols-2">
              <div className="flex flex-col gap-6">
                <Typography type="heading3" colored={true}>
                  {artist.name}
                </Typography>
                <div className="flex gap-3">
                  {artist.genres.map((genre: string, index: number) => {
                    return <Tag key={index}>{genre}</Tag>;
                  })}
                </div>
                <div className="flex gap-3">
                  <Button
                    as="a"
                    href="https://www.instagram.com/2.26tours"
                    target="_blank"
                    type={BUTTON_TYPE.ICON}
                  >
                    <img src="/images/icons/insta-white.svg" alt="" />
                  </Button>
                  <Button
                    as="a"
                    href="https://www.facebook.com/2.26tours"
                    target="_blank"
                    type={BUTTON_TYPE.ICON}
                  >
                    <img src="/images/icons/facebook-white.svg" alt="" />
                  </Button>
                  <Button
                    as="a"
                    href="https://soundcloud.com/2-26-tours"
                    target="_blank"
                    type={BUTTON_TYPE.ICON}
                  >
                    <img src="/images/icons/soundcloud-white.svg" alt="" />
                  </Button>
                </div>
              </div>
              {artist.description && <Typography type="text">{artist.description}</Typography>}
            </div>
            {artist.lastMixs && (
              <div>
                <Typography className="px-x-default pb-10" type="heading4" as="heading5">
                  DERNIERS MIXS
                </Typography>
                <div className="flex w-full overflow-x-scroll px-x-default">
                  {artist.lastMixs.map((lastMix: TypeArtistMix, index) => {
                    return (
                      <div className="slider-item h-fit overflow-hidden" key={index}>
                        <LazyLoadImage
                          alt={'Dernier mix ' + artist.name}
                          effect="blur"
                          width="100%"
                          height="100%"
                          className="h-[30vh] min-h-[240px] w-full object-cover"
                          src={'/images/illustrations/party/' + lastMix.illustration}
                        />
                        <Typography className="pt-4" type="heading5" as="heading6">
                          {lastMix.name}
                        </Typography>
                        <Typography className="py-2" type="text">
                          {lastMix.date}
                        </Typography>
                        <Typography type="text">@{lastMix.location}</Typography>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {artist.gallery && (
              <div className="px-x-default">
                <Typography className="pb-10" type="heading4" as="heading5">
                  GALERIE
                </Typography>
                <div className="wrapper">
                  <div className="container">
                    {artist.gallery.map((image: string, index) => {
                      return (
                        <div className={clsx(getClass(index), 'overflow-hidden')} key={index}>
                          <LazyLoadImage
                            alt={'Dernier mix ' + artist.name}
                            effect="blur"
                            width="100%"
                            height="100%"
                            className="h-full w-full object-cover"
                            src={'/images/illustrations/galleryDJ/' + image}
                          />
                        </div>
                      );
                    })}
                  </div>
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
