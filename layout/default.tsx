import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useTouchDevice } from '@/utils/states';
import { ReactNode, useEffect, useRef } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  const backgroundRef = useRef<HTMLImageElement>(null);
  const followMouse = (event: MouseEvent) => {
    if (!backgroundRef.current) return;
    const x = event.clientX - window.innerWidth / 2;
    const y = event.clientY - window.innerHeight / 2;
    backgroundRef.current.style.transform =
      'translate(-50%, -50%) translate(' + x + 'px, ' + y + 'px)';
  };

  useEffect(() => {
    if (useTouchDevice()) return;
    window.addEventListener('mousemove', followMouse);
    return () => {
      window.removeEventListener('mousemove', followMouse);
    };
  }, []);

  return (
    <>
      <div className="background-wrapper"></div>
      <img
        ref={backgroundRef}
        className="fixed left-1/2 top-1/2 -z-10 aspect-square h-[250vh] min-h-[250vh] w-[250vw] min-w-[250vw] -translate-x-1/2 -translate-y-1/2 object-cover"
        src="/images/illustrations/background-gradient.svg"
        alt=""
      />
      <img
        className="fixed inset-0 -z-[5] h-screen w-screen object-cover opacity-50"
        src="/images/illustrations/background-texture.png"
        alt=""
      />
      <Header />
      <main className="z-10 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
