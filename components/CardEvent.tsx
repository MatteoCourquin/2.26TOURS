import { TypeEvent } from '@/data/types';
import { formatDateDigit, formatDateWithoutDay, getColorsFromGenre } from '@/utils/functions';
import Button, { BUTTON_TYPE } from './Atoms/Button';
import Tag from './Atoms/Tag';
import Typography from './Atoms/Typography';

const CardEvent = ({ event }: { event: TypeEvent }) => {
  return (
    <div
      key={event.name}
      className="card-event sticky top-1/3 grid grid-cols-[24px,1fr] gap-6 md:grid-cols-[150px,1fr]"
    >
      <div
        className="card-event-circle"
        style={{ backgroundImage: `radial-gradient(${event.color}1a 0%, ${event.color}00 60%)` }}
      ></div>
      <div className="sticky top-1/3 flex h-fit items-center gap-4">
        {event.genres && (
          <div style={{ backgroundColor: event.color }} className="h-6 w-6 md:h-8 md:w-8"></div>
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
          <img src={event.illustration as string} alt="" className="" />
        </div>
        <div className="flex flex-col gap-2">
          <Typography type="heading3" as="heading5">
            {event.name}
          </Typography>
          <Typography type="text" as="heading6" style={{ color: event.color }}>
            {formatDateDigit(event.date).replace(/\//g, '.')}
          </Typography>
          <Typography type="text">@{event.location}</Typography>
          <div className="flex flex-wrap gap-3">
            {event.genres?.map((genre, index) => <Tag key={index}>{genre}</Tag>)}
          </div>
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <Button type={BUTTON_TYPE.TEXT} as="button">
              En savoir plus
            </Button>
            <Button type={BUTTON_TYPE.TEXT} as="button">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
