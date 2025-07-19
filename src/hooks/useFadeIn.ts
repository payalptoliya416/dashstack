import type { Variants } from "framer-motion";

export const useFadeIn = (): Variants => {
  return {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };
};
