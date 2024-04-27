import { useMagnet, useResetMagnet } from '@/utils/animations';
import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

export enum BUTTON_TYPE {
  TEXT = 'TEXT',
  ICON = 'ICON',
}

const Button = ({
  type,
  as,
  target,
  href,
  children,
  className,
  onClick,
}: {
  type: BUTTON_TYPE;
  as: 'a' | 'button';
  target?: '_blank';
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <>
      {as === 'a' && href && (
        <Link
          href={href}
          target={target}
          onMouseMove={(e) => useMagnet(e, 1)}
          onMouseOut={(e) => useResetMagnet(e)}
          className={clsx(
            type === BUTTON_TYPE.TEXT ? 'button-text' : '',
            type === BUTTON_TYPE.ICON ? 'button-icon' : '',
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
          className={clsx(
            type === BUTTON_TYPE.TEXT ? 'button-text' : '',
            type === BUTTON_TYPE.ICON ? 'button-icon' : '',
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
};

export default Button;
