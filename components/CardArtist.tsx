import { TypeArtist } from '@/data/types';
import { urlForImage } from '@/sanity/lib/image';
import { calculateMargin } from '@/utils/functions';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Tag from './atoms/Tag';
import Typography from './atoms/Typography';

const CardArtist = ({
  index,
  artist,
  onClick,
  className,
}: {
  index: number;
  artist: TypeArtist;
  onClick: () => void;
  className?: string;
}) => {
  const { name, portrait, genres } = artist;
  const artistRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const timeline = useRef(gsap.timeline({ paused: true }));
  const [isRight, setIsRight] = useState(false);

  const checkAndUpdatePosition = () => {
    if (!artistRef.current) return;
    if (window.innerWidth <= 640) {
      resetPositionMobile();
    } else {
      resetPositionDesktop();
      const rect = artistRef.current.getBoundingClientRect();
      const midpoint = window.innerWidth / 2;
      setIsRight(rect.left + rect.width / 2 > midpoint);
    }
  };

  const apparitionText = () => {
    if (!artistRef.current) return;
    const wrapperText = artistRef.current.querySelector('#wrapper-text');
    const arrayToAnim = artistRef.current.querySelectorAll('.animate-text');
    resetPositionDesktop();
    timeline.current.clear();
    timeline.current.to(wrapperText, {
      opacity: 1,
      xPercent: isRight ? '-100' : '100',
      duration: 0.3,
    });
    gsap.utils.toArray<Element>(arrayToAnim).forEach((item: Element) => {
      timeline.current
        .to(
          item,
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
          },
          '+=0',
        )
        .play();
    });
  };

  const disparitionText = () => {
    if (!artistRef.current) return;
    const wrapperText = artistRef.current.querySelector('#wrapper-text');
    const arrayToAnim = artistRef.current.querySelectorAll('.animate-text');
    const reversedArrayToAnim = gsap.utils.toArray<Element>(arrayToAnim).reverse();
    reversedArrayToAnim.forEach((item: Element, index: number) => {
      timeline.current.to(
        item,
        {
          opacity: 0,
          yPercent: -20,
          duration: 0.1,
          delay: index * 0.1,
        },
        '-=0.08',
      );
    });
    timeline.current.to(
      wrapperText,
      {
        opacity: 0,
        xPercent: 0,
        duration: 0.3,
        delay: reversedArrayToAnim.length * 0.1,
      },
      '-=0.08',
    );
  };

  const resetPositionMobile = () => {
    if (!artistRef.current) return;
    timeline.current.clear();
    const wrapperText = artistRef.current.querySelector('#wrapper-text');
    const arrayToAnim = artistRef.current.querySelectorAll('.animate-text');
    gsap.set(wrapperText, {
      opacity: 1,
      xPercent: 0,
      left: 0,
      position: 'relative',
      textAlign: 'left',
      alignItems: 'flex-start',
    });
    gsap.utils.toArray<Element>(arrayToAnim).forEach((item) => {
      gsap.set(item, { opacity: 1, y: 0 });
    });
  };

  const resetPositionDesktop = () => {
    if (!artistRef.current) return;
    timeline.current.clear();
    const wrapperText = artistRef.current.querySelector('#wrapper-text');
    const arrayToAnim = artistRef.current.querySelectorAll('.animate-text');
    gsap.set(wrapperText, {
      opacity: 0,
      xPercent: isRight ? '100' : '-100',
      alignItems: isRight ? 'flex-end' : 'flex-start',
      textAlign: isRight ? 'right' : 'left',
      left: isRight ? -16 : 'auto',
      right: isRight ? 'auto' : -16,
      position: 'absolute',
    });
    gsap.utils.toArray<Element>(arrayToAnim).forEach((item) => {
      gsap.set(item, { opacity: 0, y: -20 });
    });
  };

  useEffect(() => {
    checkAndUpdatePosition();
    window.addEventListener('resize', checkAndUpdatePosition);
    return () => window.removeEventListener('resize', checkAndUpdatePosition);
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const speed = Math.random() * 2 + 1;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: artistRef.current,
          scrub: true,
        },
      })
      .to(artistRef.current, {
        y: () => -speed * 100,
        ease: 'power1.inOut',
      });
  }, [artistRef]);

  return (
    <div
      key={'artist-' + name}
      ref={artistRef}
      className={clsx(className, `margin-top-${calculateMargin(index)}`, 'z-10 hover:z-20')}
    >
      <div className="group relative z-20 h-fit w-full cursor-pointer hover:z-50">
        <div
          ref={imageRef}
          className="transition-transform sm:group-hover:scale-[1.04]"
          onMouseOver={() => window.innerWidth > 640 && apparitionText()}
          onMouseLeave={() => window.innerWidth > 640 && disparitionText()}
        >
          <Image
            width={800}
            height={800}
            onClick={onClick}
            alt={'Portrait de ' + name}
            src={urlForImage(portrait)}
            style={{ animationDelay: index / 4 + 's' }}
            className="animate-float z-10 w-full select-none"
          />
        </div>
        <div
          id="wrapper-text"
          className={clsx(
            'relative left-0 right-auto z-10 flex flex-col gap-3 opacity-100 sm:absolute sm:top-0 sm:-z-10 sm:opacity-0',
            isRight
              ? 'sm:-left-4 sm:items-end sm:text-right'
              : 'sm:-right-4 sm:items-start sm:text-left',
          )}
        >
          <Typography type="heading4" as="heading6" className="whitespace-nowrap font-bold">
            {name}
          </Typography>
          {genres.map((genre, index) => (
            <Tag
              className="animate-text -translate-y-0 opacity-100 sm:-translate-y-full sm:opacity-0"
              key={index}
            >
              {genre.name}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardArtist;
