import { useMagnet, useResetMagnet, useRotateHover } from '@/utils/animations';
import clsx from 'clsx';
import Link from 'next/link';
import Typography from './Atoms/Typography';
import { usePathname } from 'next/navigation';
import { IconFacebook, IconInstagram, IconSoundcloud } from './Atoms/Icons';
import TransitionLink from './Atoms/TransitionLink';

const Footer = () => {
  const pathname = usePathname();
  const isRouteActive = (path: string) => pathname === path;
  const date = new Date().getFullYear();

  return (
    <>
      <div className="bottom-0 z-[999] w-full px-x-default pt-8">
        <footer className="flex gap-4 text-white">
          <div className=" blur-medium flex shrink grow flex-col gap-6 px-4 py-8 sm:px-x-default">
            <div className="space-grotesk-bold flex w-full justify-between uppercase">
              <TransitionLink className="flex items-center gap-4" to="/">
                <div
                  onMouseEnter={(e) => useRotateHover(e.currentTarget, 0.7)}
                  onMouseMove={(e) => useMagnet(e, 0.4)}
                  onMouseOut={(e) => useResetMagnet(e)}
                >
                  <img className="w-14" src="/images/icons/logo-white.svg" alt="" />
                </div>
                <Typography type="heading4" as="heading5">
                  2.26 TOURS
                </Typography>
              </TransitionLink>
              <nav className="hidden gap-6 lg:flex">
                <TransitionLink
                  className="wrapper-link flex h-full items-center"
                  onMouseMove={(e) => useMagnet(e, 0.4)}
                  onMouseOut={(e) => useResetMagnet(e)}
                  to="/"
                >
                  <span className={clsx(isRouteActive('/') && 'active', 'link whitespace-nowrap')}>
                    accueil
                  </span>
                </TransitionLink>
                <TransitionLink
                  className="wrapper-link flex h-full items-center"
                  onMouseMove={(e) => useMagnet(e, 0.4)}
                  onMouseOut={(e) => useResetMagnet(e)}
                  to="/about"
                >
                  <span
                    className={clsx(isRouteActive('/about') && 'active', 'link whitespace-nowrap')}
                  >
                    à propos
                  </span>
                </TransitionLink>
                <TransitionLink
                  className="wrapper-link flex h-full items-center"
                  onMouseMove={(e) => useMagnet(e, 0.4)}
                  onMouseOut={(e) => useResetMagnet(e)}
                  to="/artists"
                >
                  <span
                    className={clsx(
                      isRouteActive('/artists') && 'active',
                      'link whitespace-nowrap',
                    )}
                  >
                    artistes
                  </span>
                </TransitionLink>
                <TransitionLink
                  className="wrapper-link flex h-full items-center"
                  onMouseMove={(e) => useMagnet(e, 0.4)}
                  onMouseOut={(e) => useResetMagnet(e)}
                  to="/mixs"
                >
                  <span
                    className={clsx(isRouteActive('/mixs') && 'active', 'link whitespace-nowrap')}
                  >
                    mixs
                  </span>
                </TransitionLink>
              </nav>
            </div>
            <nav className="flex gap-6">
              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/2.26tours/"
                target="_blank"
                onMouseMove={(e) => useMagnet(e, 0.4)}
                onMouseOut={(e) => useResetMagnet(e)}
              >
                <IconInstagram />
              </a>
              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/2.26tours"
                target="_blank"
                onMouseMove={(e) => useMagnet(e, 0.4)}
                onMouseOut={(e) => useResetMagnet(e)}
              >
                <IconFacebook />
              </a>
              {/* SOUNDCLOUD */}
              <a
                href="https://soundcloud.com/2-26-tours"
                target="_blank"
                onMouseMove={(e) => useMagnet(e, 0.4)}
                onMouseOut={(e) => useResetMagnet(e)}
              >
                <IconSoundcloud />
              </a>
            </nav>
            <Typography type="text">
              Site designé et développé par
              <a className="text-white underline" href="#">
                {' '}
                Jérôme Bezeau{' '}
              </a>
              &
              <a className="text-white underline" href="#">
                {' '}
                Mattéo Courquin
              </a>
            </Typography>
          </div>
        </footer>
        <Typography className="mx-auto text-center text-sm leading-8" type="text">
          © {date} • 2.26 Tours
        </Typography>
      </div>
    </>
  );
};

export default Footer;
