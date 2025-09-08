import { Link } from "react-router-dom";
import MainTitle from "../../hooks/useMainTitle";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { motion, AnimatePresence } from "framer-motion";

function Team() {
  const members = useSelector((state: RootState) => state.teammember.members);
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  };
const MotionLink = motion(Link);
  return (
    <>
      <div className="flex justify-between items-start mb-[6px]">
        <MainTitle title="Team" />
        <MotionLink  whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }} to='/team/add-team-member' className="text-white text-sm font-bold bg-[#4379EE] rounded-md py-2 sm:py-11 px-[27px] transition-all duration-200 hover:shadow-md">
          Add New Member
        </MotionLink>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-[30px]">
          <AnimatePresence>
        {members.map((member, index) => (
          <motion.div
           custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            key={index}
            className="bg-[url('/images/teambg.png')] bg-cover bg-white rounded-xl flex justify-center items-center pt-[46px] pb-9 flex-col"
          >
            <div className="w-[110px] h-[110px] rounded-full mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-[110px] h-[110px]"
              />
            </div>
            <div className="text-center">
              <h2 className="text-darkgray text-base font-bold mb-1">{member.name}</h2>
              <h3 className="text-darkgray/60 text-sm font-semibold mb-[9px]">{member.position}</h3>
              <a
                href={`mailto:${member.email}`}
                className="text-sm text-darkgray/80 font-normal"
              >
                {member.email}
              </a>
            </div>
          </motion.div>
        ))}
          </AnimatePresence>
      </div>
    </>
  );
}

export default Team;
