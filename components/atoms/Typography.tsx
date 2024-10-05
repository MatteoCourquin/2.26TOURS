import clsx from 'clsx';
import { forwardRef, ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

type TypographyProps = {
  type?: 'text' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6';
  as?: string;
  colored?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  animated?: boolean;
};

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ type = 'text', as, colored = false, children, className, style, animated = false }, ref) => {
    const Tag = (() => {
      switch (type) {
        case 'text':
          return 'p';
        case 'heading1':
          return 'h1';
        case 'heading2':
          return 'h2';
        case 'heading3':
          return 'h3';
        case 'heading4':
          return 'h4';
        case 'heading5':
          return 'h5';
        case 'heading6':
          return 'h6';
        default:
          return 'p';
      }
    })();

    return (
      <Tag
        ref={ref}
        style={style}
        className={clsx(
          as || type,
          colored ? 'bg-clip-text' : 'text-white',
          'font-space-grotesk w-fit',
          className,
        )}
      >
        {!animated
          ? children
          : typeof children === 'string' &&
            children.split('').map((letter, index) => (
              <span
                key={index}
                className="animate-letter inline-block"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {letter == ' ' ? '\u00A0' : letter}
              </span>
            ))}
      </Tag>
    );
  },
);

export default Typography;
