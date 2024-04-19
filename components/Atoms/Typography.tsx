import clsx from 'clsx';
import { ReactNode } from 'react';

const Typography = ({
  type = 'text',
  as,
  colored = false,
  children,
  className,
}: {
  type?: 'text' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6';
  as?: string;
  colored?: boolean;
  children?: ReactNode;
  className?: string;
}) => {
  const Typography = (() => {
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
    <Typography
      className={clsx(
        as || type,
        colored ? 'bg-clip-text' : 'text-white',
        'font-space-grotesk w-fit',
        className,
      )}
    >
      {children}
    </Typography>
  );
};

export default Typography;
