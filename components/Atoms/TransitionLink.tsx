import clsx from 'clsx';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const TransitionLink = ({
  to,
  className,
  onMouseMove,
  onMouseOut,
  children,
}: {
  to: string;
  className?: string;
  onMouseMove?: (e: any) => any;
  onMouseOut?: (e: any) => any;
  children: ReactNode;
}) => {
  const router = useRouter();

  const handleClicked = () => {
    const bubbles: HTMLDivElement | null = document.querySelector('#bubbles')!;
    bubbles?.classList.add('show');
    setTimeout(() => router.push(to), 300);
    setTimeout(() => {
      bubbles?.classList.remove('show');
      bubbles?.classList.add('hide');
    }, 1500);
  };

  return (
    <a
      className={clsx(className, 'cursor-pointer')}
      onMouseMove={() => onMouseMove}
      onMouseOut={() => onMouseOut}
      onClick={handleClicked}
    >
      {children}
    </a>
  );
};

export default TransitionLink;
