"use client";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

function Header() {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const isMd = useMediaQuery({ maxWidth: 767 });
  const isLg = useMediaQuery({ maxWidth: 1024 });
  const isXl = useMediaQuery({ maxWidth: 1280 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  const navItems = ["Home", "About", "Portfolio", "Contact"];
  const images = ["/facebook.png", "/instagram.png", "/github-logo.png"];
  return (
    <div
      className="bg-black flex flex-col items-center justify-center sm:bg-blue-600 
      sm:flex-row sm:justify-around
      md:bg-green-600 lg:bg-yellow-600 text-white p-4"
    >
      {isMobile && (
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[40px] font-bold"
        >
          OyunX
        </motion.h1>
      )}
      {!isMobile && (
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[40px] font-bold"
        >
          OyunX
        </motion.h1>
      )}

      <nav className="pt-[4px]">
        <ul className="flex flex-col gap-2 w-[400px] text-center text-[12px] sm:flex-row sm:w-auto sm:gap-4">
          {isMobile &&
            navItems.map((item, index) => (
              <motion.li
                key={index}
                className="border-b w-full py-[10px]  sm:border-none sm:w-auto md:px-[10px] lg:px-[30px] lg:text-[18px]"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href="#">{item}</a>
              </motion.li>
            ))}
          {!isMobile &&
            navItems.map((item, index) => (
              <motion.li
                key={index}
                className="border-b w-full py-[10px] sm:border-none sm:w-auto md:px-[10px] lg:px-[30px]    lg:text-[18px]"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileTap={
                  isMobile
                    ? { backgroundColor: "#ffffff", color: "#000000" }
                    : {}
                }
              >
                <a href="#">{item}</a>
              </motion.li>
            ))}
        </ul>
      </nav>

      <div className="hidden sm:flex sm:block sm:gap-4">
        {!isMobile &&
          images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image
                key={index}
                src={image}
                alt="Facebook Logo"
                width={32}
                height={32}
                priority={index === 0}
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default Header;
