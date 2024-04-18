import Typography from '@/components/Atoms/Typography';
import PageTransition from '@/components/PageTransition';

export default function About() {
  return (
    <PageTransition>
      <div className="flex h-screen items-center justify-center">
        <Typography type="heading1" as="heading2" colored={true}>
          About
        </Typography>
      </div>
    </PageTransition>
  );
}
