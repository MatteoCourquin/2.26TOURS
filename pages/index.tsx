import Button, { BUTTON_TYPE } from '@/components/atoms/Button';
import { IconScrollDown } from '@/components/atoms/Icons';
import Typography from '@/components/atoms/Typography';
import CardEvent from '@/components/CardEvent';
import { TypeEvent } from '@/data/types';
import { client } from '@/sanity/lib/client';
import { useMagnet, useResetMagnet } from '@/utils/animations';
import { scroll } from '@/utils/functions';
import Image from 'next/image';
import { useState } from 'react';

export default function Index({ events }: { events: TypeEvent[] }) {
  const [displayedEventCount, setDisplayedEventCount] = useState(3);
  return (
    <>
      <section className="flex h-screen flex-col items-center justify-center px-x-default md:px-x-large">
        <Typography type="heading1" colored={true} className="text-center">
          2.26 TOURS
        </Typography>
        <Typography animated={true} type="heading2" as="heading6" className="pt-6 !normal-case">
          Collectif techno parisien
        </Typography>
        <div
          onClick={scroll}
          className="flex cursor-pointer flex-col items-center gap-2"
          onMouseMove={(e) => useMagnet(e, 0.4)}
          onMouseOut={(e) => useResetMagnet(e)}
        >
          <IconScrollDown className="mt-16" />
          <Typography type="text" className="cursor-pointer text-lg">
            Scroll down
          </Typography>
        </div>
      </section>
      <section className="px-x-default md:px-x-large">
        <Typography
          type="heading2"
          as="heading4"
          colored={false}
          className="w-full pb-28 text-center"
        >
          CALENDRIER
        </Typography>
        <div className="relative flex flex-col gap-32">
          <div className="line-calendar absolute left-3 h-full w-px bg-white opacity-50"></div>
          {events
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .filter((_, index) => index < displayedEventCount)
            .map((event, index, array) => {
              const showYearHeading =
                index === 0 ||
                new Date(event.date).getFullYear() !==
                  new Date(array[index - 1].date).getFullYear();
              return (
                <div key={index}>
                  <div className="sm:h-screen">
                    {showYearHeading && (
                      <Typography type="heading2" as="heading1" className="pb-10 pl-10 opacity-15">
                        {new Date(event.date).getFullYear()}
                      </Typography>
                    )}
                    <CardEvent event={event} />
                  </div>
                </div>
              );
            })}
        </div>
        {displayedEventCount < events.length && (
          <div className="pt-40">
            <Button
              onClick={() => setDisplayedEventCount(events.length)}
              type={BUTTON_TYPE.TEXT}
              as="button"
              className="mx-auto"
            >
              Voir tous les évenements
            </Button>
          </div>
        )}
      </section>
      <section className="px-x-default py-[30vh] md:px-x-large">
        <Typography
          type="heading2"
          as="heading4"
          colored={false}
          className="w-full pb-28 text-center"
        >
          A PROPOS DE NOUS
        </Typography>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex w-full items-center pr-0 sm:pr-10">
            <Image width={800} height={800} src="/images/illustrations/dj.png" alt="" />
          </div>
          <div className="col-span-1 flex flex-col justify-center gap-10 lg:col-span-2">
            <Typography type="heading3" as="heading6">
              2.26 Tours : Collectif techno parisien
            </Typography>
            <Typography type="text" className="w-full lg:w-2/3">
              2.26 Tours est un collectif parisien dédié à la musique électronique. Nous explorons
              et partageons une large palette de genres, du Minimal à la Hard Techno, en passant par
              la House et le Hardcore.
            </Typography>
            <Typography type="text" className="w-full lg:w-2/3">
              Notre mission : rassembler les amateurs de sons électroniques dans un esprit de
              plaisir et de découverte musicale. Rejoins-nous pour vivre une expérience auditive
              unique.
            </Typography>
            <Button type={BUTTON_TYPE.TEXT} as="a" href="/about">
              En savoir plus
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const query = `
    *[_type == "events"]{
      illustration,
      name,
      date,
      location,
      "genres": genres[]->{
        name
      },
      billeterie,
      color
    }`;

  const events = await client.fetch(query);
  return {
    props: {
      events,
    },
  };
}
