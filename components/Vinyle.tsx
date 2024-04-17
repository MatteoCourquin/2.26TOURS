const Vinyle = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="group relative z-0 mr-[60%] h-fit w-full">
      <img src={src} alt={alt} className="z-20 w-full select-none" />
      <div className="absolute inset-0 -z-10 translate-x-[60%] p-2 transition-transform">
        <div className="relative flex h-full w-full items-center justify-center rounded-full backdrop-blur-[2px]">
          <img
            src="/images/illustrations/vinyle.png"
            className="select-none opacity-85 brightness-75"
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
  );
};

export default Vinyle;
