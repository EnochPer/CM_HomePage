'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#dce7f1]">
      <header className="flex flex-col items-center pt-12 sm:pt-16 pb-8 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-light text-gray-800 tracking-wider mb-2"
        >
          个人介绍
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xs tracking-widest"
        >
          About the Artist
        </motion.p>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 shadow-sm space-y-4 text-center"
        >
          <h2 className="text-xl font-medium text-gray-800">Bobuli</h2>
          <p className="text-gray-600 leading-relaxed text-sm max-w-md mx-auto">
            欢迎来到我的个人艺术作品空间。这里记录了我的创作历程和艺术探索。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 shadow-sm space-y-3 text-center"
        >
          <p className="text-gray-400 text-xs tracking-wider">联系方式</p>
          <p className="text-gray-600 text-sm">
            Email: bobuli@artfolio.com
          </p>
        </motion.div>
      </div>
    </div>
  );
}
