'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const exhibitions = [
  { title: '个展：光之回响', date: '2024年12月 - 2025年2月', location: '当代艺术中心' },
  { title: '群展：自然之声', date: '2024年9月 - 2024年11月', location: '城市美术馆' },
  { title: '个展：记忆碎片', date: '2024年3月 - 2024年5月', location: '艺术空间画廊' },
];

export default function ExhibitionsPage() {
  return (
    <div className="min-h-screen bg-[#dce7f1] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [.16, 1, .3, 1] }}
        className="max-w-3xl mx-auto w-full"
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-light text-gray-800 mb-3">展览信息</h1>
          <p className="text-gray-500 text-sm tracking-wider">Exhibitions</p>
        </div>

        <div className="space-y-4">
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm"
            >
              <div className="sm:flex sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-lg font-medium text-gray-800">{exhibition.title}</h2>
                  <p className="text-gray-500 text-sm mt-1">{exhibition.date}</p>
                </div>
                <p className="text-gray-400 text-sm mt-2 sm:mt-0">{exhibition.location}</p>
              </div>
            </motion.div>
          ))}
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
