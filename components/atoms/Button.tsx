import { useMagnet, useResetMagnet } from '@/utils/animations';
import clsx from 'clsx';
import Link from 'next/link';
import { ForwardedRef, forwardRef, ReactNode } from 'react';

export enum BUTTON_TYPE {
  TEXT = 'TEXT',
  ICON = 'ICON',
}

type ButtonType = {
  type: BUTTON_TYPE;
  as: 'a' | 'button';
  target?: '_blank';
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonType>(
  ({ type, as, target, href, children, className, onClick }, ref) => {
    return (
      <>
        {as === 'a' && href && (
          <Link
            scroll={false}
            href={href}
            ref={ref as ForwardedRef<HTMLAnchorElement>}
            target={target}
            onMouseMove={(e) => useMagnet(e, 1)}
            onMouseOut={(e) => useResetMagnet(e)}
            className={clsx(
              type === BUTTON_TYPE.TEXT && 'button-text',
              type === BUTTON_TYPE.ICON && 'button-icon',
              'blur-medium wrapper-button',
              className,
            )}
          >
            <span
              className="button"
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
            >
              {children}
            </span>
          </Link>
        )}
        {as === 'button' && (
          <button
            onClick={onClick}
            ref={ref as ForwardedRef<HTMLButtonElement>}
            className={clsx(
              type === BUTTON_TYPE.TEXT && 'button-text',
              type === BUTTON_TYPE.ICON && 'button-icon',
              'blur-medium wrapper-button',
              className,
            )}
            onMouseMove={(e) => useMagnet(e, 1)}
            onMouseOut={(e) => useResetMagnet(e)}
          >
            <span
              className="button"
              onMouseMove={(e) => useMagnet(e, 0.4)}
              onMouseOut={(e) => useResetMagnet(e)}
            >
              {children}
            </span>
          </button>
        )}
      </>
    );
  },
);

export default Button;
