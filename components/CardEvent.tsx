import { TypeEvent } from '@/data/types';
import { urlForImage } from '@/sanity/lib/image';
import { formatDateDigit, formatDateWithoutDay, getColorsFromGenre } from '@/utils/functions';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import Button, { BUTTON_TYPE } from './atoms/Button';
import { IconArrowUpRight } from './atoms/Icons';
import Tag from './atoms/Tag';
import Typography from './atoms/Typography';
gsap.registerPlugin(ScrollTrigger);

const CardEvent = ({ event }: { event: TypeEvent }) => {
  const color = event.color || getColorsFromGenre(event.genres || []);
  const scrollCubeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: scrollCubeRef.current,
          start: window.innerWidth <= 768 ? 'top 160px' : 'top 33%',
          toggleActions: 'restart none none reverse',
          invalidateOnRefresh: true,
        },
      })
      .to(scrollCubeRef.current, {
        borderWidth: '12px',
        ease: 'power1.inOut',
        duration: 0.15,
      });
  }, [scrollCubeRef]);

  return (
    <div className="card-event top-36 grid grid-cols-[24px,1fr] gap-6 sm:sticky md:top-1/3 md:grid-cols-[150px,1fr]">
      <div
        className="card-event-circle hidden md:block"
        style={{ backgroundImage: `radial-gradient(${color}1a 0%, ${color}00 60%)` }}
      ></div>
      <div className="top-36 flex h-fit items-center gap-4 sm:sticky md:top-1/3">
        {event.genres && (
          <div
            style={{ borderColor: color }}
            ref={scrollCubeRef}
            className="blur-filter h-6 w-6 border bg-[#ffffff80]"
          ></div>
        )}
        <Typography type="text" as="heading6" className="hidden md:block">
          {formatDateWithoutDay(event.date)}
        </Typography>
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        <Typography type="text" as="heading6" className="block md:hidden">
          {formatDateWithoutDay(event.date)}
        </Typography>
        <div className="aspect-square w-full min-w-[240px] shrink-0 md:w-[20vw]">
          <Image
            width={800}
            height={800}
            className="h-full w-full object-cover"
            src={urlForImage(event.illustration)}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <Typography type="heading3" as="heading5">
            {event.name}
          </Typography>
          <Typography type="text" as="heading6" style={{ color: color }}>
            {formatDateDigit(event.date).replace(/\//g, '.')}
          </Typography>
          <Typography type="text">@{event.location}</Typography>
          <div className="flex flex-wrap gap-3">
            {event.genres?.map((genre, index) => <Tag key={index}>{genre.name}</Tag>)}
          </div>
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <Button as="a" href={event.billeterie} target="_blank" type={BUTTON_TYPE.TEXT}>
              <p className="pr-2">Billeterie</p>
              <IconArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
