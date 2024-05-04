import { useRef } from 'react';

const Vinyle = ({ src, alt }: { src: string; alt: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    audioRef.current?.play();
  };
  const pauseAudio = () => {
    audioRef.current?.pause();
  };

  return (
    <>
      <audio className="scale-0" ref={audioRef} src="/sounds/von-bikrav.mp3"></audio>
      <div
        onMouseEnter={playAudio}
        onMouseLeave={pauseAudio}
        className="group/vinyle relative z-0 h-fit w-full translate-x-[30%] transition-transform duration-700 hover:translate-x-0"
      >
        <img src={src} alt={alt} className="z-20 w-full select-none" />
        <div className="absolute inset-0 -z-10 p-2 transition-transform duration-700 group-hover/vinyle:translate-x-[60%]">
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
