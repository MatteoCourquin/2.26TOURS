import Button, { BUTTON_TYPE } from '@/components/Atoms/Button';
import { IconScrollDown } from '@/components/Atoms/Icons';
import Typography from '@/components/Atoms/Typography';
import CardEvent from '@/components/CardEvent';
import { TypeEvent } from '@/data/types';
import { client } from '@/sanity/lib/client';
import { useMagnet, useResetMagnet } from '@/utils/animations';
import { scroll } from '@/utils/functions';

// const events = [
//   {
//     illustration: '/images/illustrations/sero-5.png',
//     name: 'SEROTONIC #5 : WILD RAVE',
//     date: new Date(2023, 10, 5),
//     location: 'O29',
//     genres: ['Techno', 'Hardtechno', 'Hardcore'],
//     shotgun: '/#',
//     color: '#BDFF00',
//   },
//   {
//     illustration: '/images/illustrations/record-1.png',
//     name: 'Record #1',
//     date: new Date(2024, 2, 15),
//     location: 'O29',
//     genres: ['House', 'Minimal', 'Techhouse'],
//     shotgun: '/#',
//   },
//   {
//     illustration: '/images/illustrations/phaer-1.png',
//     name: 'PHAER #1',
//     date: new Date(2023, 8, 23),
//     location: 'O29',
//     genres: ['Techno', 'Hardtechno', 'Hardcore'],
//     shotgun: '/#',
//   },
//   {
//     illustration: '/images/illustrations/sero-4.png',
//     name: 'SEROTONIC #4 : TECHNOEL',
//     date: new Date(2024, 0, 7),
//     location: 'O29',
//     genres: ['Techno', 'Hardtechno', 'Hardcore'],
//     shotgun: '/#',
//   },
//   {
//     illustration: '/images/illustrations/record-1.png',
//     name: 'Record #1',
//     date: new Date(2022, 2, 15),
//     location: 'O29',
//     genres: ['House', 'Minimal', 'Techhouse'],
//     shotgun: '/#',
//   },
//   {
//     illustration: '/images/illustrations/phaer-1.png',
//     name: 'PHAER #1',
//     date: new Date(2023, 8, 23),
//     location: 'O29',
//     genres: ['Techno', 'Hardtechno', 'Hardcore'],
//     shotgun: '/#',
//   },
//   {
//     illustration: '/images/illustrations/sero-4.png',
//     name: 'SEROTONIC #4 : TECHNOEL',
//     date: new Date(2022, 0, 7),
//     location: 'O29',
//     genres: ['Techno', 'Hardtechno', 'Hardcore'],
//     shotgun: '/#',
//   },
// ];

export default function Index({ events }: { events: TypeEvent[] }) {
  return (
    <>
      <section className="flex h-screen flex-col items-center justify-center px-x-default md:px-x-large">
        <Typography type="heading1" colored={true}>
          2.26 TOURS
        </Typography>
        <Typography type="heading2" as="heading6" className="pt-6 !normal-case">
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
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .map((event, index, array) => {
              // const showYearHeading =
              //   index === 0 || event.date.getFullYear() !== array[index - 1].date.getFullYear();

              return (
                <>
                  {/* {showYearHeading && (
                    <Typography type="heading1" className="ml-10 opacity-[0.08]">
                      {event.date.getFullYear()}
                    </Typography>
                  )} */}
                  <div className="h-screen" key={index}>
                    <CardEvent event={event} />
                  </div>
                </>
              );
            })}
        </div>
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
            <img src="/images/illustrations/dj.png" alt="" />
          </div>
          <div className="col-span-1 flex flex-col justify-center gap-10 lg:col-span-2">
            <Typography type="heading5" as="heading6">
              Elit bibendum vitae
            </Typography>
            <Typography type="text" className="w-full lg:w-2/3">
              Elit bibendum vitae fermentum egestas amet senectus. Ullamcorper ultrices metus
              senectus scelerisque pretium etiam morbi semper hendrerit.
            </Typography>
            <Typography type="text" className="w-full lg:w-2/3">
              Elit viverra eget quis duis ut neque sit gravida. Sed magna erat non sit neque tellus.
              Turpis est viverra neque ac. Non ornare diam turpis nisl nec tempus porttitor nec
              proin.
            </Typography>
            <Button type={BUTTON_TYPE.TEXT} as="button">
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
      shotgun,
      color
    }`;

  const events = await client.fetch(query);
  return {
    props: {
      events,
    },
  };
}
