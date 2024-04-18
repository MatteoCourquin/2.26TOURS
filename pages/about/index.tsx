import Typography from '@/components/Atoms/Typography';

export default function About() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Typography type='heading1' as='heading2' colored={true}>
        About
      </Typography>
    </div>
  );
}