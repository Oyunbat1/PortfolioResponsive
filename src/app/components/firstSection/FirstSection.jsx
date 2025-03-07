"use client";
import React from "react";
import Header from "../Header";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
function FirstSection() {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return (
    <div className="bg-black h-screen flex flex-col items-center gap-4">
      <Header />
      {isMobile && (
        <motion.div
          className="flex gap-8"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, rotate: 360 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="text-white bg-white w-[0.1px]"
          ></motion.div>
          <Image
            src="/1.jpg"
            width={200}
            height={100}
            alt="profile"
            className="rounded"
          ></Image>

          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ duration: 1 }}
            className="text-white bg-white  w-[0.1px]"
          ></motion.div>
        </motion.div>
      )}

      {isMobile && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 className="text-white font-extrabold text-[30px] ">
            Hello
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1.6 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-white font-extrabold text-[35px] "
          >
            I'm Oyunbat
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p
              className="text-white pt-[20px]
            "
            >
              Do you wanna now all about me?
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Image
              src="/gitcontr.png"
              width={250}
              height={200}
              alt="profile"
              className="rounded  pt-[20px] "
            ></Image>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default FirstSection;
