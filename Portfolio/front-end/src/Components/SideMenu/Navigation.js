import React from "react";
import { motion } from "framer-motion";
import MenuItems from "./MenuItems";
import "./style.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => (
  <motion.ul variants={variants}>
    <MenuItems />
  </motion.ul>
);

export default Navigation;
