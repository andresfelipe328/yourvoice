"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const NavbarAnimLayout = ({ children }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, staggerChildren: 0.2, delayChildren: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default NavbarAnimLayout;
