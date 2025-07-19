
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";

export default function AnimatedPageWrapper({ children }: { children: React.ReactNode }) {
  const animation = usePageAnimation();

  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
