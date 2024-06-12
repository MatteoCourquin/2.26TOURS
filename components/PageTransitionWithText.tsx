import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

// const routes = {
//   '/': 'Home',
//   '/about': 'About',
//   '/contact': 'Contact',
//   '/mixs': 'Mixs',
//   '/artists': 'Artists',
// };

// const text = {
//   initial: {
//     opacity: 1,
//   },
//   enter: {
//     opacity: 0,
//     top: -100,
//     transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
//     transitionEnd: { top: '47.5%' },
//   },
//   exit: {
//     opacity: 1,
//     top: '40%',
//     transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
//   },
// };

const curve = (initialPath: string, targetPath: string) => {
  return {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

const translate = {
  initial: {
    top: '-300px',
  },
  enter: {
    top: '-100vh',
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: {
      top: '100vh',
    },
  },
  exit: {
    top: '-300px',
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

const anim = (variants: any) => {
  return {
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
  };
};

export default function Curve({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="page curve">
      {/* <motion.p className="route z-[9999] text-black" {...anim(text)}>
        <Typography colored={true} type="heading3">
          {routes[router.route]}
        </Typography>
      </motion.p> */}
      {dimensions.width != 0 && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }: { height: number; width: number }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg className="svg-anim z-[999]" {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
