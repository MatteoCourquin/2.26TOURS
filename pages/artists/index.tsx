import Typography from '@/components/atoms/Typography';
import CardArtist from '@/components/CardArtist';
import DetailsArtist from '@/components/DetailsArtist';
import { TypeArtist } from '@/data/types';
import { client } from '@/sanity/lib/client';
import clsx from 'clsx';
import { useState } from 'react';

export default function Artists({ artists }: { artists: TypeArtist[] }) {
  const [activeArtist, setActiveArtist] = useState<TypeArtist>(artists[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (artist: TypeArtist) => {
    if (activeArtist === artist && isOpen) {
      setIsOpen(false);
    } else {
      setActiveArtist(artist);
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="relative flex min-h-screen grid-cols-2 flex-wrap gap-4 overflow-x-hidden px-x-default pt-header sm:grid sm:grid-cols-3 md:grid-cols-4 md:px-x-large lg:grid-cols-6">
        <div className="inset-0 flex h-[70vh] w-screen items-center justify-center sm:fixed sm:h-screen">
          <Typography type="heading1" as="heading2" colored={true}>
            Artists
          </Typography>
        </div>

        {artists &&
          artists.map((artist, index) => (
            <CardArtist
              key={artist.name + index}
              index={index}
              name={artist.name}
              className={clsx(index % 2 ? 'sm:pb-80' : 'sm:pt-80', 'w-[calc(50%-8px)] sm:w-full')}
              portrait={artist.portrait}
              genres={artist.genres}
              onClick={() => handleClick(artist)}
            />
          ))}

        {activeArtist && (
          <DetailsArtist artist={activeArtist} isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const query = `
    *[_type == "artists"]{
      name,
      description,
      "portrait": portrait.asset->url,
      "genres": genres[]->{
        name
      },
      "events": events[]->{
        illustration,
        name,
        date,
        location
      },
      "gallery": gallery[].asset->url
    }
  `;
  const artistsData = await client.fetch(query);
  const artistsDouble = artistsData.concat(artistsData);
  const artists = artistsDouble.sort(() => Math.random() - 0.5);
  return {
    props: {
      artists,
    },
  };
}
