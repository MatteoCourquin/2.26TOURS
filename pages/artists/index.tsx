import Typography from '@/components/Atoms/Typography';
import CardArtist from '@/components/CardArtist';
import DetailsArtist from '@/components/DetailsArtist';
import artistsData from '@/data/artists.json';
import { TypeArtist } from '@/data/types';
import { calculateMargin } from '@/hooks/functions';
import { client } from '@/sanity/lib/client';
import clsx from 'clsx';
import { useState } from 'react';

export default function Artists(props: any) {
  console.log(props);

  const [artists, _] = useState(artistsData);
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
    <div className="relative grid min-h-screen grid-cols-2 gap-4 overflow-x-hidden px-x-large pt-header sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <Typography
        className="fixed left-[50vw] top-[50vh] z-10 -translate-x-1/2 -translate-y-1/2"
        type="heading1"
        as="heading2"
        colored={true}
      >
        Artists
      </Typography>

      {artists.map((artist, index) => (
        <div
          key={index}
          style={{
            marginTop: calculateMargin(index),
          }}
        >
          <CardArtist
            name={artist.name}
            className={clsx(index % 2 ? 'pb-80' : 'pt-80')}
            portrait={artist.portrait}
            genres={artist.genres}
            onClick={() => handleClick(artist)}
          />
        </div>
      ))}

      {activeArtist && (
        <DetailsArtist artist={activeArtist} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
}

export async function getStaticProps() {
  const authors = await client.fetch('*[_type == "author"]');

  return {
    props: {
      authors,
    },
  };
}
