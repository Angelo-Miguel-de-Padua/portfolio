"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl font-bold"
      >
        Hi, I'm <span className="text-indigo-400">Your Name</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-4 text-lg max-w-xl text-zinc-400"
      >
        I'm a software developer focused on building beautiful and functional web applications.
      </motion.p>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition"
      >
        View Projects <ArrowRight size={18} />
      </motion.a>
    </section>
  );
}
