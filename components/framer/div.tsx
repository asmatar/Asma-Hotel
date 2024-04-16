"use client";

import { motion } from "framer-motion";
const FramerDiv = ({ children }: { children: React.ReactNode }) => {
  const containerVariants = {
    hidden: { x: "-100vw" }, // initial prop
    visible: {
      x: "0",
      transition: {
        duration: 1.3,
        delayChildren: 1.3,
        staggerChildren: 0.5,
      },
    }, // animate pro
  };

  const variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      /*       initial={{ x: "-100vw" }}
      animate={{ x: "0" }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={() => controls.start()} */
      /// <reference path="" />
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full h-screen absolute top-0 left-0 bg-gray-50 flex flex-col gap-10 z-10 tracking-tight"
    >
      <motion.h1
        variants={variants}
        /*         initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 1.1 }} */
        className="text-8xl font-bold"
      >
        WELCOME
      </motion.h1>
      <motion.h2
        className="text-8xl font-bold"
        variants={variants}
        /*  initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }} */
      >
        ASMA HOTEL
      </motion.h2>
      <motion.h3
        variants={variants}
        /*  initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 3 }} */
        className="text-8xl font-bold "
      >
        BOOK YOUR BEST HOTEL
      </motion.h3>
      {children}
    </motion.div>
  );
};

export default FramerDiv;
