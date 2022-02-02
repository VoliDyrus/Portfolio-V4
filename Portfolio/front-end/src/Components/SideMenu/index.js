import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import useDimensions from "./use-dimensions";

import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";

import "./style.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function SideMenu() {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="nav"
    >
      <motion.div className="background" variants={sidebar} />

      <MenuToggle toggle={() => setIsOpen()} />
      <Navigation />
    </motion.nav>
  );
}

export default SideMenu;
