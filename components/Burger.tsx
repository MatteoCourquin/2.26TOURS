import { useState } from 'react';
import Button, { BUTTON_TYPE } from './Atoms/Button';
import clsx from 'clsx';
import Link from 'next/link';
import { IconFacebook, IconInstagram, IconSoundcloud } from './Atoms/Icons';
import { usePathname } from 'next/navigation';

const Burger = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link: string) => {
    if (pathname === link) {
      setIsOpen(false);
    } else {
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    }
  };
  return (
    <div className="!flex nav:!hidden">
      <Button
        type={BUTTON_TYPE.ICON}
        as="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group/burger"
      >
        <div className="flex h-full w-full flex-col items-end justify-between py-[20px]">
          <div
            className={clsx(
              isOpen ? 'translate-y-2 rotate-45' : 'translate-y-0 rotate-0',
              'h-[2px] w-full bg-white transition-transform',
            )}
          ></div>
          <div
            className={clsx(
              isOpen ? 'w-full scale-x-0' : 'w-1/3 scale-x-100',
              'h-[2px] bg-white transition-[transform,width] group-hover/burger:w-full',
            )}
          ></div>
          <div
            className={clsx(
              isOpen ? 'w-full -translate-y-2 -rotate-45' : 'w-2/3 translate-y-0 rotate-0',
              'h-[2px]  bg-white transition-[transform,width] group-hover/burger:w-full',
            )}
          ></div>
        </div>
      </Button>
      <div
        className={clsx(
          isOpen ? 'translate-y-0 scale-y-100' : '-translate-y-1/2 scale-y-0',
          'fixed inset-0 -z-10 h-svh w-screen px-x-default pb-y-default pt-header transition-transform',
        )}
      >
        <div className="blur-medium flex h-full w-full flex-col justify-between px-x-default py-y-default">
          <div className="flex flex-col gap-6">
            <Link
              onClick={() => handleLinkClick('/')}
              href="/"
              className="text-xl uppercase text-white"
            >
              accueil
            </Link>
            <Link
              onClick={() => handleLinkClick('/about')}
              href="/about"
              className="text-xl uppercase text-white"
            >
              à propos
            </Link>
            <Link
              onClick={() => handleLinkClick('/artists')}
              href="/artists"
              className="text-xl uppercase text-white"
            >
              artistes
            </Link>
            <Link
              onClick={() => handleLinkClick('/mixs')}
              href="/mixs"
              className="text-xl uppercase text-white"
            >
              mixs
            </Link>
            <Link
              onClick={() => handleLinkClick('/contact')}
              href="/contact"
              className="text-xl uppercase text-white"
            >
              contact
            </Link>
          </div>
          <div className="flex gap-6">
            <Link
              href="https://www.instagram.com/2.26tours"
              target="_blank"
              className="text-xl uppercase text-white"
            >
              <IconInstagram />
            </Link>
            <Link
              href="https://www.facebook.com/2.26tours"
              target="_blank"
              className="text-xl uppercase text-white"
            >
              <IconFacebook />
            </Link>
            <Link
              href="https://soundcloud.com/2-26-tours"
              target="_blank"
              className="text-xl uppercase text-white"
            >
              <IconSoundcloud />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
