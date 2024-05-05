import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { ReactNode } from 'react';
import TransitionPage from '@/public/animations/lottie.json';

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <motion.div
        className="slide-in"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
