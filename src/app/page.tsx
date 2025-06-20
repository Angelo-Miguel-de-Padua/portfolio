"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-site-background">

      {/* Profile Picture */} 
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Image
          src="/assets/profile.jpg"
          alt="Profile"
          width={160}
          height={160}
          className="rounded-full object-cover border-4 border-teal-400 shadow-lg"
        />
      </motion.div>

      {/* Introduction Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg mb-2"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        Welcome to my portfolio
      </motion.p>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl font-bold text-zinc-200"
      >
        Hi, I&apos;m <span className="text-teal-400">Angelo</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-4 text-lg max-w-xl"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        I&apos;m a software developer that loves coding.
      </motion.p>

      {/* Call-to-action button */}
      <Link href="/home">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition"
        >
          Learn More <ArrowRight size={18} />
        </motion.button>
      </Link>

    </section>
  );
}
