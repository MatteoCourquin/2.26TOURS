import { ReactNode } from 'react';
import Typography from './Atoms/Typography';

const ResponsiveLayer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center md:hidden">
        <Typography type="heading1" colored={true}>
          OUPS !
        </Typography>
        <Typography className="px-4 text-center" type="text">
          La version mobile est en cours de développement
        </Typography>
      </div>
      <div className="hidden md:block">{children}</div>
    </>
  );
};

export default ResponsiveLayer;
