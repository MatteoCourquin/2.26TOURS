import { useMagnet, useResetMagnet, useRotateHover } from '@/hooks/animations';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import Button, { BUTTON_TYPE } from './Atoms/Button';

const Header = () => {
  const logoRef = useRef(null);
  const pathname = usePathname();
  const isRouteActive = (path: string) => pathname === path;

  return (
    <>
      <div className='fixed top-0 z-[999] w-full px-x-default pt-8'>
        <header className='space-grotesk-bold flex gap-4 uppercase text-white'>
          <nav className='blur-medium flex h-[60px] shrink grow items-center gap-6 px-4 sm:px-x-default'>
            <Link
              href='/'
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
            >
              <div onMouseEnter={(e) => useRotateHover(e.currentTarget, 0.7)}>
                <img ref={logoRef} src='/images/icons/logo-white.svg' alt='' />
              </div>
            </Link>
            <Link
              className='wrapper-link hidden h-full items-center nav:flex'
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
              href='/'
            >
              <span
                className={clsx(
                  isRouteActive('/') && 'active',
                  'link whitespace-nowrap'
                )}
              >
                accueil
              </span>
            </Link>
            <Link
              className='wrapper-link hidden h-full items-center sm:flex'
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
              href='/about'
            >
              <span
                className={clsx(
                  isRouteActive('/about') && 'active',
                  'link whitespace-nowrap'
                )}
              >
                à propos
              </span>
            </Link>
            <Link
              className='wrapper-link hidden h-full items-center sm:flex'
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
              href='/artists'
            >
              <span
                className={clsx(
                  isRouteActive('/artists') && 'active',
                  'link whitespace-nowrap'
                )}
              >
                artistes
              </span>
            </Link>
            <Link
              className='wrapper-link hidden h-full items-center sm:flex'
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
              href='/mixs'
            >
              <span
                className={clsx(
                  isRouteActive('/mixs') && 'active',
                  'link whitespace-nowrap'
                )}
              >
                mixs
              </span>
            </Link>
          </nav>
          {/* CONTACT */}
          <Link
            className='blur-medium wrapper-link button-text hidden shrink-0 nav:block'
            onMouseMove={(e) => useMagnet(e, 1)}
            onMouseOut={(e) => useResetMagnet(e)}
            href='/contact'
          >
            <button
              className='button h-full w-full uppercase'
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
            >
              <span
                className={clsx(
                  isRouteActive('/contact') && 'active',
                  'link whitespace-nowrap'
                )}
              >
                contact
              </span>
            </button>
          </Link>
          {/* INSTAGRAM */}
          <Button
            type={BUTTON_TYPE.ICON}
            as='a'
            target='_blank'
            href='https://www.instagram.com/2.26tours'
          >
            <img src='/images/icons/insta-white.svg' alt='' />
          </Button>
          {/* FACEBOOK */}
          <Button
            type={BUTTON_TYPE.ICON}
            as='a'
            target='_blank'
            href='https://www.facebook.com/2.26tours'
          >
            <img src='/images/icons/facebook-white.svg' alt='' />
          </Button>
          {/* SOUNDCLOUD */}
          <Button
            type={BUTTON_TYPE.ICON}
            as='a'
            target='_blank'
            href='https://soundcloud.com/2-26-tours'
          >
            <img src='/images/icons/soundcloud-white.svg' alt='' />
          </Button>
        </header>
      </div>
    </>
  );
};

export default Header;
