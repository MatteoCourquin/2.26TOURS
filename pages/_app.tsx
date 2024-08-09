import PageTransition from '@/components/PageTransition';
import Layout from '@/layout/default';
import SmoothScrolling from '@/layout/lenis';
import '@/styles/main.scss';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const [layoutEnabled, setLayoutEnabled] = useState(true);

  useEffect(() => {
    setLayoutEnabled(!pathname?.includes('studio'));
  }, [pathname]);

  return (
    <>
      {layoutEnabled ? (
        <SmoothScrolling>
          <Layout>
            <AnimatePresence mode="wait">
              <PageTransition key={pathname}>
                <Component key={pathname} {...pageProps} />
              </PageTransition>
            </AnimatePresence>
          </Layout>
        </SmoothScrolling>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
