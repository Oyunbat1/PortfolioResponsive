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
    <div className="">
      <Header />
      <div className=" flex flex-col h-screen  items-center justify-center mt-[260px] z-0 bg-black pb-[40px] pt-[20px] sm:mt-[90px] ">
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
              className="text-white font-extrabold text-[30px]  "
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
        {!isMobile && (
          <motion.div
            className="flex gap-[30px] md:gap-[80px] 
          "
          >
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, rotate: 360 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1 }}
                  className=" bg-white w-[0.1px]"
                ></motion.div>
                <Image
                  src="/1.jpg"
                  width={200}
                  height={100}
                  alt="profile"
                  className="rounded sm:w-[260px] lg:w-[260px]"
                ></Image>

                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 360 }}
                  transition={{ duration: 1 }}
                  className="text-white bg-white  w-[0.1px]"
                ></motion.div>
              </motion.div>
            )}

            {!isMobile && (
              <motion.div
                className="text-center flex flex-col gap-6"
                initial={{ opacity: 0, y: -300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div className="lg:flex  lg:items-center lg:justify-center ">
                  <motion.h1 className="text-white font-extrabold text-[30px] sm:text-[45px] ">
                    Hello
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1.6 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="text-white font-extrabold text-[30px]  sm:text-[35px] sm:w-[240px] sm:ml-[70px] "
                  >
                    I'm Oyunbat
                  </motion.p>{" "}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <p
                    className="text-white pt-[20px] lg:mr-[180px]
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
                    className="rounded  pt-[22px] sm:w-[380px]  sm:h-[120px] sm:mt-[30px] lg:mt-[110px]"
                  ></Image>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default FirstSection;
