import { IconScrollDown } from '@/components/Atoms/Icons';
import Typography from '@/components/Atoms/Typography';
import { useMagnet, useResetMagnet } from '@/hooks/animations';
import { scroll } from '@/hooks/functions';

function Index() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <Typography type='heading1' colored={true}>
        2.26 TOURS
      </Typography>
      <Typography type='heading2' as='heading6' className='pt-6 !normal-case'>
        Collectif techno parisien
      </Typography>
      <div
        onClick={scroll}
        className='flex cursor-pointer flex-col items-center gap-2'
        onMouseMove={(e) => useMagnet(e, 0.4)}
        onMouseOut={(e) => useResetMagnet(e)}
      >
        <IconScrollDown className='mt-16' />
        <Typography type='text' className='cursor-pointer text-lg'>
          Scroll down
        </Typography>
      </div>
    </div>
  );
}

export default Index;
