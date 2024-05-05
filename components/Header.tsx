import { useMagnet, useResetMagnet, useRotateHover } from '@/utils/animations';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import Button, { BUTTON_TYPE } from './Atoms/Button';
import { IconFacebook, IconInstagram, IconSoundcloud } from './Atoms/Icons';
import TransitionLink from './Atoms/TransitionLink';

const Header = () => {
  const logoRef = useRef(null);
  const pathname = usePathname();
  const isRouteActive = (path: string) => pathname === path;

  return (
    <>
      <div className="fixed top-0 z-[999] w-full px-x-default pt-8">
        <header className="space-grotesk-bold flex gap-4 uppercase text-white">
          <nav className="blur-medium flex h-[60px] shrink grow items-center gap-6 px-4 sm:px-x-default">
            <TransitionLink
              to="/"
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
            >
              <div onMouseEnter={(e) => useRotateHover(e.currentTarget, 0.7)}>
                <img ref={logoRef} src="/images/icons/logo-white.svg" alt="" />
              </div>
            </TransitionLink>
            <TransitionLink
              to="/"
              className="wrapper-link hidden h-full items-center nav:flex"
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
            >
              <span className={clsx(isRouteActive('/') && 'active', 'link whitespace-nowrap')}>
                accueil
              </span>
            </TransitionLink>
            <TransitionLink
              className="wrapper-link hidden h-full items-center sm:flex"
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
              to="/about"
            >
              <span className={clsx(isRouteActive('/about') && 'active', 'link whitespace-nowrap')}>
                à propos
              </span>
            </TransitionLink>
            <TransitionLink
              className="wrapper-link hidden h-full items-center sm:flex"
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
              to="/artists"
            >
              <span
                className={clsx(isRouteActive('/artists') && 'active', 'link whitespace-nowrap')}
              >
                artistes
              </span>
            </TransitionLink>
            <TransitionLink
              className="wrapper-link hidden h-full items-center sm:flex"
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
              to="/mixs"
            >
              <span className={clsx(isRouteActive('/mixs') && 'active', 'link whitespace-nowrap')}>
                mixs
              </span>
            </TransitionLink>
          </nav>
          {/* CONTACT */}
          <TransitionLink
            className="blur-medium wrapper-link button-text hidden shrink-0 nav:block"
            onMouseMove={(e) => useMagnet(e, 1)}
            onMouseOut={(e) => useResetMagnet(e)}
            to="/contact"
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
          </TransitionLink>
          {/* INSTAGRAM */}
          <Button
            type={BUTTON_TYPE.ICON}
            as="a"
            target="_blank"
            href="https://www.instagram.com/2.26tours"
          >
            <IconInstagram />
          </Button>
          {/* FACEBOOK */}
          <Button
            type={BUTTON_TYPE.ICON}
            as="a"
            target="_blank"
            href="https://www.facebook.com/2.26tours"
          >
            <IconFacebook />
          </Button>
          {/* SOUNDCLOUD */}
          <Button
            type={BUTTON_TYPE.ICON}
            as="a"
            target="_blank"
            href="https://soundcloud.com/2-26-tours"
          >
            <IconSoundcloud />
          </Button>
        </header>
      </div>
    </>
  );
};

export default Header;
