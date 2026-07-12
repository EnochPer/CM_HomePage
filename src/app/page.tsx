'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function SplashPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#dce7f1]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/40 rounded-full blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 0.95, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [.16, 1, .3, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.h1
          className="text-5xl sm:text-7xl font-light tracking-wider text-gray-800 mb-6"
          initial={{ letterSpacing: '0.3em' }}
          animate={{ letterSpacing: '0.15em' }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          BOBULI SPACE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-gray-500 text-sm tracking-widest mb-16"
        >
          个人艺术作品集
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push('/home')}
          className="ios-pill px-10 py-3 text-gray-700 text-sm tracking-wide cursor-pointer"
        >
          进入作品集
        </motion.button>
      </motion.div>
    </div>
  );
}
