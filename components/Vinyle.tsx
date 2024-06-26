import clsx from 'clsx';
import { useEffect, useRef } from 'react';

const Vinyle = ({
  src,
  alt,
  className,
  hoverable = true,
}: {
  src: string;
  alt: string;
  className: string;
  hoverable?: boolean;
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (!hoverable) return;
    audioRef.current?.play();
  };
  const pauseAudio = () => {
    if (!hoverable) return;
    audioRef.current?.pause();
  };

  useEffect(() => {
    if (!hoverable) {
      pauseAudio();
    }
  }, [hoverable]);

  return (
    <>
      <audio className="scale-0" ref={audioRef} src="/sounds/von-bikrav.mp3"></audio>
      <div
        onMouseEnter={playAudio}
        onMouseLeave={pauseAudio}
        className={clsx(
          hoverable && 'hover:translate-x-0',
          'group/vinyle relative z-0 h-fit w-full translate-x-[30%] transition-[transform,filter,opacity] duration-700',
          className,
        )}
      >
        <img
          src={src}
          alt={alt}
          className="floating-element z-20 w-full select-none transition-transform"
        />
        <div
          className={clsx(
            hoverable && 'group-hover/vinyle:translate-x-[60%]',
            'absolute inset-0 -z-10 p-2 transition-transform duration-700',
          )}
        >
          <div className="relative flex h-full w-full items-center justify-center rounded-full">
            <img
              src="/images/illustrations/vinyle-black.png"
              className="absolute inset-0 select-none opacity-90"
              alt=""
            />
            <img
              src="/images/illustrations/VINYLE_BASE.png"
              className="animate-slow-spin absolute inset-0 select-none opacity-20"
              alt=""
            />
            <div className="animate-slow-spin absolute flex h-[34%] w-[34%] select-none items-center justify-center overflow-hidden rounded-full">
              <img
                src={src}
                alt=""
                className="aspect-square h-[180%] w-[180%] select-none object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vinyle;
