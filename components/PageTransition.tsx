import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <motion.div
        initial={{ y: '100vh' }}
        animate={{
          y: '0vh',
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
          delay: 0,
        }}
      > */}
      {children}
      {/* </motion.div> */}
      <motion.div
        className="slide-in"
        initial={{ y: '100%', x: '-50%', borderRadius: '0px' }}
        animate={{ y: '100%', borderRadius: '0px' }}
        exit={{ y: '0%', borderRadius: '0px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ y: '-20%', x: '-50%', borderRadius: '9999px' }}
        animate={{ y: '-100%', borderRadius: '0px' }}
        exit={{ y: '-100%', borderRadius: '0px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
