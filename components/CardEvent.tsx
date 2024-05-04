import { TypeEvent } from '@/data/types';
import { formatDateDigit, formatDateWithoutDay, getColorsFromGenre } from '@/utils/functions';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef, useState } from 'react';
import Button, { BUTTON_TYPE } from './Atoms/Button';
import Tag from './Atoms/Tag';
import Typography from './Atoms/Typography';
import { IconArrowUpRight } from './Atoms/Icons';
import { urlForImage } from '@/sanity/lib/image';

const CardEvent = ({ event }: { event: TypeEvent }) => {
  const [color, _] = useState<string>(event.color || getColorsFromGenre(event.genres || ['']));
  const scrollCubeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
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
    <div className="card-event sticky top-36 grid grid-cols-[24px,1fr] gap-6 md:top-1/3 md:grid-cols-[150px,1fr]">
      <div
        className="card-event-circle"
        style={{ backgroundImage: `radial-gradient(${color}1a 0%, ${color}00 60%)` }}
      ></div>
      <div className="sticky top-36 flex h-fit items-center gap-4 md:top-1/3">
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
          <img
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
            <Button type={BUTTON_TYPE.TEXT} as="button">
              En savoir plus
            </Button>
            <Button as="a" href={event.shotgun} target="_blank" type={BUTTON_TYPE.TEXT}>
              <p className="pr-2">Écouter sur soundcloud</p>
              <IconArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
