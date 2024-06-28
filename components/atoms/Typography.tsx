import clsx from 'clsx';
import { ReactNode, useRef } from 'react';
import { CSSProperties } from 'styled-components';

const Typography = ({
  type = 'text',
  as,
  colored = false,
  children,
  className,
  style,
  animated = false,
}: {
  type?: 'text' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6';
  as?: string;
  colored?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  animated?: boolean;
}) => {
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

  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  return (
    <Tag
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
        : (children as string).split('').map((letter, index) => (
            <span
              key={index}
              className="animate-letter inline-block"
              style={{ animationDelay: `${index * 0.03}s` }}
              ref={(el) => {
                textRefs.current[index] = el;
              }}
            >
              {letter == ' ' ? '\u00A0' : letter}
            </span>
          ))}
    </Tag>
  );
};

export default Typography;
