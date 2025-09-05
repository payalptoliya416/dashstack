import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";

function Starter() {
  return (
    <motion.div
      {...usePageAnimation()}
      className="bg-[#F8F9FA] flex min-h-screen rounded justify-center items-center shadow-md overflow-hidden"
    >
      <h2 className="text-[#4B5675]/40 text-2xl md:text-6xl">Starter Page</h2>
    </motion.div>
  );
}

export default Starter;
