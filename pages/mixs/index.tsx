import PageMixsDesktop from '@/components/PageMixsDesktop';
import PageMixsMobile from '@/components/PageMixsMobile';
import { TypeMix } from '@/data/types';
import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';

export default function Mixs({ mixs }: { mixs: TypeMix[] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {!isMobile && <PageMixsDesktop className="hidden md:flex" mixs={mixs} />}
      {!!isMobile && <PageMixsMobile className="flex md:hidden" mixs={mixs} />}
    </>
  );
}

export async function getStaticProps() {
  const query = `
    *[_type == "mixs"]{
      title,
      subtitle,
      "artist": select(
        defined(artist->name) => artist->name,
        "2.26 tours"
      ),
      description,
      link,
      "genres": genres[]->{
        name
      },
      "cover": cover.asset->url
    }`;

  const mixsData = await client.fetch(query);
  const mixs = mixsData.length <= 10 ? [...mixsData, ...mixsData] : [...mixsData];
  return {
    props: {
      mixs,
    },
  };
}

// const shuffleChars = (length: number) => {
//   const intervalId = setInterval(() => {
//     console.log(
//       Array.from({ length }, () => Math.floor(Math.random() * 36).toString(36)).join(''),
//     );
//   }, 10);

//   setTimeout(() => {
//     clearInterval(intervalId);
//     console.log('Interval stopped');
//   }, 1000);
// };

// const shuffleSubtitle = (length: number, originalSubtitle: string) => {
//   const intervalId = setInterval(() => {
//     if (activeMix) {
//       const newSubtitle = Array.from({ length }, () =>
//         Math.floor(Math.random() * 36).toString(36),
//       ).join('');
//       setActiveMix({
//         ...activeMix,
//         subtitle: newSubtitle,
//       });
//     }
//   }, 50);

//   setTimeout(() => {
//     clearInterval(intervalId);
//     if (activeMix) {
//       setActiveMix({
//         ...activeMix,
//         subtitle: originalSubtitle,
//       });
//     }
//   }, 1000);
// };
