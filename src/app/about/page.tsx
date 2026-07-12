'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#dce7f1] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [.16, 1, .3, 1] }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-light text-gray-800 mb-4">关于作者</h1>
          <p className="text-gray-500 text-sm tracking-wider">About the Artist</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 shadow-sm space-y-4 text-center">
          <h2 className="text-xl font-medium text-gray-800">Bobuli</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            欢迎来到我的个人艺术作品空间。这里记录了我的创作历程和艺术探索。
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/home">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="ios-pill px-8 py-2.5 text-gray-600 text-sm"
            >
              ← 返回首页
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
