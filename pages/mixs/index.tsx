import Button, { BUTTON_TYPE } from '@/components/Atoms/Button';
import { IconArrowUpRight } from '@/components/Atoms/Icons';
import Tag from '@/components/Atoms/Tag';
import Typography from '@/components/Atoms/Typography';
import PageTransition from '@/components/PageTransition';
import ResponsiveLayer from '@/components/ResponsiveLayer';
import Vinyle from '@/components/Vinyle';
import { TypeMix } from '@/data/types';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import clsx from 'clsx';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function Mixs({ mixs }: { mixs: TypeMix[] }) {
  const [activeMix, setActiveMix] = useState<TypeMix | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [listVinyle, setListVinyle] = useState<TypeMix[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);
  const artistRef = useRef<HTMLDivElement>(null);
  const genresRefs = useRef<HTMLDivElement[] | null[]>([]);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const timelineChangeDiscRef = useRef(gsap.timeline({ paused: true }));

  const hideAnimation = (onCompleteCallback: () => void) => {
    timelineChangeDiscRef.current
      .clear()
      .add(
        gsap.to(linkRef.current, {
          scale: 0,
          opacity: 0,
          ease: 'power4.inOut',
          duration: 0.4,
        }),
      )
      .add(
        gsap.to(descriptionRef.current, {
          y: 30,
          opacity: 0,
          ease: 'power4.inOut',
          duration: 0.4,
        }),
        '=-0.3',
      )
      .add(() => {
        gsap.to(genresRefs.current.filter((el) => el !== null).reverse(), {
          scale: 0,
          opacity: 0,
          ease: 'power4.inOut',
          duration: 0.4,
          stagger: 0.1,
        });
      }, '=-0.3')
      .add(
        gsap.to(artistRef.current, {
          y: 30,
          opacity: 0,
          ease: 'power4.inOut',
          duration: 0.4,
        }),
        '=-0.1',
      )
      .add(
        gsap.to(titleRef.current, {
          y: 30,
          opacity: 0,
          ease: 'power4.inOut',
          duration: 0.4,
        }),
        '=-0.3',
      )
      .add(() => {
        onCompleteCallback();
      })
      .play();
  };
  const showAnimation = () => {
    timelineChangeDiscRef.current
      .clear()
      .add(
        gsap.fromTo(
          titleRef.current,
          {
            y: -30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: 'power4.inOut',
            duration: 0.4,
          },
        ),
      )
      .add(
        gsap.fromTo(
          artistRef.current,
          {
            y: -30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: 'power4.inOut',
            duration: 0.4,
          },
        ),
        '=-0.3',
      )
      .add(
        gsap.to(genresRefs.current, {
          scale: 1,
          opacity: 1,
          ease: 'power4.inOut',
          duration: 0.4,
          stagger: 0.1,
        }),
        '=-0.3',
      )
      .add(
        gsap.fromTo(
          descriptionRef.current,
          {
            y: -30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: 'power4.inOut',
            duration: 0.4,
          },
        ),
        '=-0.3',
      )
      .add(
        gsap.to(linkRef.current, {
          scale: 1,
          opacity: 1,
          ease: 'power4.inOut',
          duration: 0.4,
        }),
        '=-0.3',
      )
      .play();
  };

  const handleMixClick = (index: number) => {
    setListVinyle([...listVinyle, mixs[index]]);
    hideAnimation(() =>
      setActiveMix({
        title: mixs[index].title,
        subtitle: mixs[index].subtitle,
        artist: mixs[index].artist || '2.26 tours',
        description: mixs[index].description || null,
        link: mixs[index].link,
        genres: mixs[index].genres,
        cover: mixs[index].cover,
      }),
    );
  };

  const showDisc = (element: string) => {
    gsap.fromTo(
      `#${element}`,
      {
        x: -window.innerWidth / 3,
        rotate: -180,
        ease: 'power2.inOut',
        duration: 1,
      },
      {
        x: 0,
        rotate: Math.floor(Math.random() * (20 - -20 + 1)) + -20,
        ease: 'power2.inOut',
        duration: 1,
      },
    );
  };

  useEffect(() => {
    setActiveMix({
      title: mixs[0].title,
      subtitle: mixs[0].subtitle,
      artist: mixs[0].artist || '2.26 tours',
      description: mixs[0].description || null,
      link: mixs[0].link,
      genres: mixs[0].genres,
      cover: mixs[0].cover,
    });
    setListVinyle([...listVinyle, mixs[0]]);
    showAnimation();
  }, []);

  useEffect(() => {
    showAnimation();
  }, [activeMix]);

  useEffect(() => {
    showDisc('vinyle-' + (listVinyle.length - 1));
  }, [listVinyle]);

  return (
    <PageTransition>
      <ResponsiveLayer>
        <div className="z-10 flex min-h-screen flex-col items-center justify-between gap-20 px-x-default py-y-default pt-header md:px-x-large">
          <div className="grid h-full w-full grow grid-cols-2 items-center pt-[10vh]">
            <div className="relative flex w-1/2 items-center justify-center">
              {listVinyle.map((vinyle, index) => {
                return (
                  <div key={index} className="absolute p-0 lg:p-4" id={'vinyle-' + index}>
                    <Vinyle
                      className={clsx(
                        index === listVinyle.length - 2 && 'opacity-95 blur-[1px]',
                        index === listVinyle.length - 3 && 'opacity-90 blur-[2px]',
                        index === listVinyle.length - 4 && 'opacity-85 blur-[3px]',
                        index === listVinyle.length - 5 && 'opacity-80 blur-[4px]',
                        index === listVinyle.length - 6 && 'scale-0',
                        index <= listVinyle.length - 7 && 'hidden',
                      )}
                      hovered={index === listVinyle.length - 1}
                      src={urlForImage(vinyle.cover)}
                      alt={'Mix de ' + vinyle.artist}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-6 self-start">
              <Typography type="text" className="text-lg uppercase">
                2.26 PODCAST <span className="text-white">#{activeMix?.subtitle}</span>
              </Typography>
              <div className="h-[2px] w-20 rounded-full bg-white-opacity" />
              <div>
                <div ref={titleRef} className="-translate-y-8 opacity-0">
                  <Typography type="heading2" as="heading5">
                    {activeMix?.title}
                  </Typography>
                </div>
                <div ref={artistRef} className="-translate-y-8 pt-2 opacity-0">
                  <Typography className="inline" type="text">
                    par{' '}
                  </Typography>
                  <Typography
                    className="inline font-bold"
                    type="heading2"
                    as="heading6"
                    colored={true}
                  >
                    {activeMix?.artist}
                  </Typography>
                </div>
              </div>
              <div className="flex gap-3">
                {activeMix?.genres.map((genre, index) => (
                  <div
                    key={index}
                    ref={(el: HTMLDivElement | null) => {
                      genresRefs.current[index] = el;
                    }}
                    className="scale-0 opacity-0"
                  >
                    <Tag>{genre.name}</Tag>
                  </div>
                ))}
              </div>
              {activeMix?.description && (
                <div ref={descriptionRef} className="-translate-y-8 opacity-0">
                  <Typography type="text">{activeMix?.description}</Typography>
                </div>
              )}
              <div ref={linkRef} className="w-fit scale-0 opacity-0">
                <Button as="a" href={activeMix?.link} target="_blank" type={BUTTON_TYPE.TEXT}>
                  <p className="pr-2">Écouter sur soundcloud</p>
                  <IconArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
          {mixs && (
            <div className="max-w-screen z-40 flex h-52 w-full">
              {mixs.map((mix, index) => (
                <div
                  key={index + mix.title}
                  className="transition-smooth relative flex !h-52 grow items-start justify-start last-of-type:pr-36 hover:pr-28"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleMixClick(index)}
                >
                  <div
                    className={clsx(
                      'transition-smooth absolute left-0 top-0 !aspect-square !h-52 !w-52 grow-0 cursor-pointer ease-power2inOut',
                      {
                        '-translate-y-3 scale-[1.25]': index === hoveredIndex,
                        '-translate-y-2 scale-[1.20]':
                          hoveredIndex !== null &&
                          (index === hoveredIndex - 1 || index === hoveredIndex + 1),
                        '-translate-y-1 scale-[1.15]':
                          hoveredIndex !== null &&
                          (index === hoveredIndex - 2 || index === hoveredIndex + 2),
                        '-translate-y-0 scale-[1.10]':
                          hoveredIndex !== null &&
                          (index === hoveredIndex - 3 || index === hoveredIndex + 3),
                      },
                    )}
                  >
                    <img
                      className="h-full w-full select-none object-cover"
                      src={urlForImage(mix.cover)}
                      alt={'Mix de ' + mix.artist}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
          {!mixs ||
            (!activeMix && (
              <Typography
                className="fixed left-[50vw] top-[50vh] z-10 -translate-x-1/2 -translate-y-1/2"
                type="heading1"
                as="heading2"
                colored={true}
              >
                Artists
              </Typography>
            ))}
        </div>
      </ResponsiveLayer>
    </PageTransition>
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
