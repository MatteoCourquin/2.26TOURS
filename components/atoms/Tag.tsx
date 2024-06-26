import clsx from 'clsx';
import { ReactNode } from 'react';

const Tag = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={clsx(className, 'tag blur-medium border-main whitespace-nowrap uppercase')}>
      {children}
    </div>
  );
};

export default Tag;
