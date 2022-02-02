/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SidebarData } from "../SideMenuData";
import "./style.css";

const variants = {
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItems = () => {
  const active = (isActive) => {
    return { color: isActive ? "#14786e" : "black" };
  };

  return (
    <motion.li variants={variants}>
      <div>
        <ul>
          {SidebarData.map((data) => {
            return (
              <div className="data-holder">
                <a
                  href={data.url}
                  key={data.id}
                  className="data"
                  onClick={active}
                >
                  {data.title}
                </a>
              </div>
            );
          })}
        </ul>
      </div>
    </motion.li>
  );
};

export default MenuItems;
