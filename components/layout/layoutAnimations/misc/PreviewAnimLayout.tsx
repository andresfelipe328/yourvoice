"use client";

import React from "react";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  style: string;
};

const CollapseAnimLayout = ({ children, style }: Props) => {
  const dropIn = {
    hidden: {
      x: "2.5vh",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      x: "2.5vh",
      opacity: 0,
    },
  };

  return (
    <motion.div
      className={style}
      variants={dropIn}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
    >
      {children}
    </motion.div>
  );
};

export default CollapseAnimLayout;
