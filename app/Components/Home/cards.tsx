"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { Typography } from "@mui/material";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Cards() {
  const items = [
    { id: 1, label: "Workbook", link: "/home/workbook.png" },
    { id: 2, label: "Lesson Plan", link: "/home/lessonplan.png" },
    { id: 3, label: "Story", link: "/home/story.png" },
    { id: 4, label: "Flashcards", link: "/home/flashcards.png" },
  ];
  const { scrollY } = useScroll(); // Track Scroll position
  const [fadePosition, setFadePosition] = React.useState<number>(0);

  const handleScrollChange = React.useCallback((latest: number) => {
    if (fadePosition! < 50) setFadePosition(latest);
  }, []); // The callback will only be recreated if dependencies change
  useMotionValueEvent(scrollY, "change", handleScrollChange);

  return (
    <Box className="flex max-w-6xl gap-4  flex-wrap items-center  mx-auto">
      <Typography
        component={motion.header}
        initial={{ opacity: 1 }}
        animate={fadePosition! > 50 ? { opacity: 0 } : { opacity: 1 }}
        className="w-full text-center  text-black/25"
        variant="h4"
      >
        {"Explore Our Learning Resources"}
      </Typography>

      <Box className="flex w-full mt-3 max-w-full mx-auto flex-wrap justify-between gap-2 md:flex-nowrap ">
        {items.map((item, i) => {
          return (
            <Paper
              component={motion.span}
              elevation={3}
              key={i}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale : 0.94  }}
              className="flex items-center overflow-hidden select-none border cursor-pointer rounded-xl border-[#f5c13d] justify-center object-contain gap-1 flex-col"
            >
              <Box className="h-60 w-[17em]">
                <Image
                  src={item.link}
                  alt="flashcards"
                  width={300}
                  className="w-full h-full"
                  height={400}
                />
              </Box>

              <Typography className="mb-5" variant="h5">
                {item.label}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
}