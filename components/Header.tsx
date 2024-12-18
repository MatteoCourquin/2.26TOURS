import { useMagnet, useResetMagnet, useRotateHover } from '@/utils/animations';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import Button, { BUTTON_TYPE } from './atoms/Button';
import { IconFacebook, IconInstagram, IconSoundcloud } from './atoms/Icons';
import Burger from './Burger';
import Image from 'next/image';

const Header = () => {
  const logoRef = useRef(null);
  const pathname = usePathname();
  const isRouteActive = (path: string) => pathname === path;

  return (
    <>
      <div className="fixed top-0 z-[500] w-full px-4 pt-8 transition-[padding] nav:px-x-default">
        <header className="space-grotesk-bold flex gap-4 uppercase text-white">
          <nav className="blur-medium flex h-[60px] shrink grow items-center gap-6 px-4 transition-[padding] sm:px-x-default">
            <Link
              scroll={false}
              href="/"
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
              aria-label="Retour à la page d'acceuil"
            >
              <div onMouseEnter={(e) => useRotateHover(e.currentTarget, 0.7)}>
                <Image
                  width={36}
                  height={36}
                  ref={logoRef}
                  src="/images/icons/logo-white.svg"
                  alt="Logo 2.26 TOURS"
                />
              </div>
            </Link>
            <Link scroll={false} href="/" className="block text-xl uppercase text-white nav:hidden">
              2.26 tours
            </Link>
            <Link
              scroll={false}
              className="wrapper-link hidden h-full items-center nav:flex"
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
              href="/"
            >
              <span className={clsx(isRouteActive('/') && 'active', 'link whitespace-nowrap')}>
                accueil
              </span>
            </Link>
            <Link
              scroll={false}
              className="wrapper-link hidden h-full items-center nav:flex"
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
              href="/about"
            >
              <span className={clsx(isRouteActive('/about') && 'active', 'link whitespace-nowrap')}>
                à propos
              </span>
            </Link>
            <Link
              scroll={false}
              className="wrapper-link hidden h-full items-center nav:flex"
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
              href="/artists"
            >
              <span
                className={clsx(isRouteActive('/artists') && 'active', 'link whitespace-nowrap')}
              >
                artistes
              </span>
            </Link>
            <Link
              scroll={false}
              className="wrapper-link hidden h-full items-center nav:flex"
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
              href="/mixs"
            >
              <span className={clsx(isRouteActive('/mixs') && 'active', 'link whitespace-nowrap')}>
                mixs
              </span>
            </Link>
          </nav>
          {/* CONTACT */}
          <Link
            scroll={false}
            className="blur-medium wrapper-link button-text hidden shrink-0 nav:block"
            onMouseMove={(e) => useMagnet(e, 1)}
            onMouseOut={(e) => useResetMagnet(e)}
            href="/contact"
          >
            <button
              className="button h-full w-full uppercase"
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
            >
              <span
                className={clsx(isRouteActive('/contact') && 'active', 'link whitespace-nowrap')}
              >
                contact
              </span>
            </button>
          </Link>
          {/* INSTAGRAM */}
          <Button
            className="!hidden nav:!flex"
            type={BUTTON_TYPE.ICON}
            as="a"
            target="_blank"
            href="https://instagram.com/2.26tours"
          >
            <IconInstagram />
          </Button>
          {/* FACEBOOK */}
          <Button
            className="!hidden nav:!flex"
            type={BUTTON_TYPE.ICON}
            as="a"
            target="_blank"
            href="https://facebook.com/2.26tours"
          >
            <IconFacebook />
          </Button>
          {/* SOUNDCLOUD */}
          <Button
            className="!hidden nav:!flex"
            type={BUTTON_TYPE.ICON}
            as="a"
            target="_blank"
            href="https://soundcloud.com/2-26-tours"
          >
            <IconSoundcloud />
          </Button>
          {/* BURGER */}
          <Burger />
        </header>
      </div>
    </>
  );
};

export default Header;
