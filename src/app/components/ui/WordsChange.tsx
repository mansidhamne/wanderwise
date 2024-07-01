"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { cn } from "../../utils/cn";

export const WordsChange = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const wordIndex = (words.indexOf(currentWord) + 1) % words.length;
    setCurrentWord(words[wordIndex]);
    setIsAnimating(true);
  }, [currentWord, words,]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        // exit={{
        //   opacity: 0,
        //   y: -40,
        //   x: 40,
        //   filter: "blur(8px)",
        //   scale: 2,
        //   position: "absolute",
        // }}
        className={cn(
          "z-10 inline-block relative text-left px-2 text-teal-800 font-bold text-5xl",
          className
        )}
        key={currentWord}
      >
        {currentWord}
      </motion.div>
    </AnimatePresence>
  );
};
