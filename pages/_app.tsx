import PageTransition from '@/components/PageTransition';
import Layout from '@/layout/default';
import SmoothScrolling from '@/layout/lenis';
import '@/styles/main.scss';
import { useLenis } from '@studio-freight/react-lenis';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();

  useEffect(() => {
    const handleRouteChange = () => {
      lenis?.scrollTo(lenis.actualScroll);
      setTimeout(() => {
        lenis?.scrollTo(0, {
          immediate: true,
        });
      }, 750);
    };

    router.events.on('routeChangeStart', handleRouteChange);
  }, [router]);

  return (
    <>
      {pathname?.includes('studio') ? (
        <Component {...pageProps} />
      ) : (
        <SmoothScrolling>
          <Layout>
            <AnimatePresence mode="wait">
              <PageTransition key={pathname}>
                <Component {...pageProps} />
              </PageTransition>
            </AnimatePresence>
          </Layout>
        </SmoothScrolling>
      )}
    </>
  );
}
