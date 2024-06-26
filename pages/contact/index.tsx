import Typography from '@/components/atoms/Typography';
import PageTransition from '@/components/PageTransition';

export default function Contact() {
  return (
    <PageTransition>
      <div className="flex h-screen items-center justify-center">
        <Typography type="heading1" as="heading2" colored={true}>
          Contact
        </Typography>
      </div>
    </PageTransition>
  );
}
