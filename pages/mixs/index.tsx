import Button, { BUTTON_TYPE } from '@/components/Atoms/Button';
import { IconArrowUpRight } from '@/components/Atoms/Icons';
import Tag from '@/components/Atoms/Tag';
import Typography from '@/components/Atoms/Typography';
import Vinyle from '@/components/Vinyle';
import { TypeMixs } from '@/data/types';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import clsx from 'clsx';
import { useState } from 'react';

export default function Mixs({ mixs }: { mixs: TypeMixs[] }) {
  const [activeMix, setActiveMix] = useState<TypeMixs>(mixs[0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="z-10 flex h-screen flex-col items-center justify-between gap-6 px-x-large py-y-default pt-header">
      <div className="grid grid-cols-2 items-center pt-header">
        <div className="w-1/2">
          <Vinyle src={urlForImage(activeMix.cover)} alt={'Mix de ' + activeMix.artist.name} />
        </div>
        <div className="flex flex-col gap-6">
          <Typography type="text" className="text-lg uppercase">
            2.26 PODCAST <span className="text-white">#{activeMix.subtitle}</span>
          </Typography>
          <div className="h-[2px] w-20 rounded-full bg-white-opacity" />
          <div>
            <Typography type="heading2" as="heading5">
              {activeMix.title}
            </Typography>
            <div>
              <Typography className="inline" type="text">
                par{' '}
              </Typography>
              <Typography className="inline font-bold" type="heading2" as="heading6" colored={true}>
                {activeMix.artist.name}
              </Typography>
            </div>
          </div>
          <div className="flex gap-3">
            {activeMix.genres.map((genre, index) => (
              <Tag key={index}>{genre.name}</Tag>
            ))}
          </div>
          <Typography type="text">{activeMix.description}</Typography>
          <Button as="a" href={activeMix.link} target="_blank" type={BUTTON_TYPE.TEXT}>
            <p className="pr-2">Écouter sur soundcloud</p>
            <IconArrowUpRight />
          </Button>
        </div>
      </div>
      <div className="max-w-screen z-40 flex h-52 w-full">
        {mixs.map((mix, index) => (
          <div
            key={index}
            className="transition-smooth relative flex !h-52 grow items-start justify-start last-of-type:pr-36 hover:pr-28"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setActiveMix(mixs[index])}
          >
            <div
              className={clsx(
                'transition-smooth absolute left-0 top-0 !aspect-square !h-52 !w-52 grow-0 cursor-pointer ease-power2inOut',
                {
                  '-translate-y-3 scale-[1.25]': index === hoveredIndex,
                  '-translate-y-2 scale-[1.10]':
                    hoveredIndex !== null &&
                    (index === hoveredIndex - 1 || index === hoveredIndex + 1),
                },
              )}
            >
              <img
                className="h-full w-full object-cover"
                src={urlForImage(mix.cover)}
                alt={'Mix de ' + mix.artist}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const query = `
    *[_type == "mixs"]{
      title,
      subtitle,
      "artist": artist->{
        name
      },
      description,
      link,
      "genres": genres[]->{
        name
      },
      "cover": cover.asset->url
    }`;

  const mixs = await client.fetch(query);
  return {
    props: {
      mixs,
    },
  };
}

// export async function getStaticProps() {
//   const mixs = await client.fetch('*[_type == "mixs"]');
//   return {
//     props: {
//       mixs,
//     },
//   };
// }
