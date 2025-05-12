import { NavLink, Link } from "react-router-dom";
import Button from "./Button";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const logo = "ExpensEase".split("");

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-3xl font-bold tracking-wide hover:scale-105 transition-transform"
          >
            {logo.map((char, index) => (
              <motion.div
                key={index}
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 + index * 0.05, type: "spring" }}
              >
                {char}
              </motion.div>
            ))}
          </Link>

          {/* Navigation Links + Button */}
          <div className="flex items-center space-x-6">
            <div
              onClick={() => setClick(!click)}
              className="cursor-pointer transition-all duration-300"
            >
              <NavLink to={click ? "/" : "/dashboard"}>
                <Button value={click ? "Home" : "Dashboard"} />
              </NavLink>
            </div>

            <div className="hidden md:inline-block">
              <Button value="Try for free" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
