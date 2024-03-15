import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { UilShoppingCartAlt, UilUserCircle } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <header className="padding-x py-8 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden font-montserrat leading-normal text-lg text-slate-gray">
          {navLinks.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className={(navClass) => (navClass.isActive ? "font-bold" : "")}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          {/* <span className="flex flex-row">
            <UilShoppingCartAlt size="30" color="#708090" />
            <span>(2)</span>
          </span> */}
          {/* <motion whileTap={{ scale: 1.2}}>
          <UilUserCircle size="30" color="#708090" />
        </motion> */}
          <NavLink
            to="/signup"
            className={(navClass) => (navClass.isActive ? "font-bold" : "")}
          >
            Sign Up
          </NavLink>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
