"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4 border-b-[1px] border-black flex items-center justify-between relative z-50">
      <NavLeft setIsOpen={setIsOpen} />

      <div className="hidden lg:flex space-x-6">
        <NavLink text="Features" path="#features" />
        <NavLink text="Benefits" path="#benefits" />
      </div>

      {isOpen && <NavMenu isOpen={isOpen} />}
    </nav>
  );
};


const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="50"
      height="39"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-white"
    
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-white text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        
        <FiMenu />
      </motion.button>
      <Logo />
      
      
    </div>
  );
};



const NavLink = ({ text, path }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const section = document.querySelector(path); // Select the section to scroll to
    if (section) {
      // Perform smooth scroll to the section
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a href={path} onClick={handleClick} className="hidden lg:block h-[30px] overflow-hidden font-medium">
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-white-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
        {text}
        </span>
      </motion.div>
    </a>
  );

};


const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Features" />
      <MenuLink text="Benefits" />
      <NavLink text="Benefits" path="#benefits" />
      
    </motion.div>
  );
};

const MenuLink = ({ text }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
      
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-white" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default Navbar;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};