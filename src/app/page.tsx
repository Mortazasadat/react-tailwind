"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center w-full bg-red-50">
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-blue-500 rounded-full w-40 h-40"
      >
        HEllo world
      </motion.div>
    </main>
  );
}
