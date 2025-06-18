"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={160}
          height={160}
          className="rounded-full object-cover border-4 border-indigo-500 shadow-lg"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-zinc-400 text-lg mb-2"
      >
        Welcome to my portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-bold"
      >
        Hi, I&apos;m <span className="text-indigo-400">Angelo</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-4 text-lg max-w-xl text-zinc-400"
      >
        I&apos;m a software developer that loves coding.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition"
      >
        Learn More <ArrowRight size={18} />
      </motion.button>
      
    </section>
  );
}
