import { useMagnet, useResetMagnet, useRotateHover } from '@/utils/animations';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconFacebook, IconInstagram, IconSoundcloud } from './Atoms/Icons';
import Typography from './Atoms/Typography';

const Footer = () => {
  const pathname = usePathname();
  const isRouteActive = (path: string) => pathname === path;

  return (
    <>
      <div className="bottom-0 z-[999] w-full px-x-default pt-8">
        <footer className="flex gap-4 text-white">
          <div className=" blur-medium flex shrink grow flex-col gap-6 px-4 py-8 sm:px-x-default">
            <div className="space-grotesk-bold flex w-full justify-between uppercase">
              <Link className="flex items-center gap-4" href="/">
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
              </Link>
              <nav className="hidden gap-6 lg:flex">
                <Link
                  className="wrapper-link flex h-full items-center"
                  onMouseMove={(e) => useMagnet(e, 0.4)}
                  onMouseOut={(e) => useResetMagnet(e)}
                  href="/"
                >
                  <span className={clsx(isRouteActive('/') && 'active', 'link whitespace-nowrap')}>
                    accueil
                  </span>
                </Link>
                <Link
                  className="wrapper-link flex h-full items-center"
                  onMouseMove={(e) => useMagnet(e, 0.4)}
                  onMouseOut={(e) => useResetMagnet(e)}
                  href="/about"
                >
                  <span
                    className={clsx(isRouteActive('/about') && 'active', 'link whitespace-nowrap')}
                  >
                    à propos
                  </span>
                </Link>
                <Link
                  className="wrapper-link flex h-full items-center"
                  onMouseMove={(e) => useMagnet(e, 0.4)}
                  onMouseOut={(e) => useResetMagnet(e)}
                  href="/artists"
                >
                  <span
                    className={clsx(
                      isRouteActive('/artists') && 'active',
                      'link whitespace-nowrap',
                    )}
                  >
                    artistes
                  </span>
                </Link>
                <Link
                  className="wrapper-link flex h-full items-center"
                  onMouseMove={(e) => useMagnet(e, 0.4)}
                  onMouseOut={(e) => useResetMagnet(e)}
                  href="/mixs"
                >
                  <span
                    className={clsx(isRouteActive('/mixs') && 'active', 'link whitespace-nowrap')}
                  >
                    mixs
                  </span>
                </Link>
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
          © {new Date().getFullYear()} • 2.26 Tours
        </Typography>
      </div>
    </>
  );
};

export default Footer;
