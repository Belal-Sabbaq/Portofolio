import { RiReactjsLine } from "react-icons/ri";
import { SiJest ,SiNodedotjs, SiPostgresql, SiTypescript, SiExpress, SiDocker, SiSelenium, SiGraphql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
const iconVarients = (duration) => ({
  initial : {y:-10},
  animate : {
    y:[10,-10],
  transition: {
    duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  }},
})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1 , y:0}}
      initial= {{opacity:0, y:-100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial= {{opacity:0, x:-100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVarients(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-cyan-400 text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVarients(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNodedotjs className="text-green-600 text-7xl" />
        </motion.div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-blue-500 text-7xl" />
        </div>
        <motion.div 
        variants={iconVarients(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-blue-400 text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVarients(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-neutral-400 text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVarients(4.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDocker className="text-blue-400 text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVarients(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-red-600 text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVarients(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSelenium className="text-green-400 text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVarients(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGraphql className="text-pink-500 text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVarients(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJest className="text-pink-700 text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
