'use client';

import { motion } from 'framer-motion';

const exhibitions = [
  { title: '个展：光之回响', date: '2024年12月 - 2025年2月', location: '当代艺术中心', desc: '首次个人作品展，呈现近年创作精华' },
  { title: '群展：自然之声', date: '2024年9月 - 2024年11月', location: '城市美术馆', desc: '与多位艺术家联展，探索自然主题' },
  { title: '个展：记忆碎片', date: '2024年3月 - 2024年5月', location: '艺术空间画廊', desc: '以碎片化记忆为灵感的系列作品展' },
];

export default function ExhibitionsPage() {
  return (
    <div className="min-h-screen bg-[#dce7f1]">
      <header className="flex flex-col items-center pt-12 sm:pt-16 pb-8 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-light text-gray-800 tracking-wider mb-2"
        >
          活动及展览
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xs tracking-widest"
        >
          Events & Exhibitions
        </motion.p>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-20">
        <div className="space-y-4">
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h2 className="text-lg font-medium text-gray-800">{exhibition.title}</h2>
              <p className="text-gray-500 text-sm mt-1">{exhibition.date}</p>
              <p className="text-gray-400 text-xs mt-2">{exhibition.desc}</p>
              <p className="text-gray-300 text-xs mt-2 tracking-wider">{exhibition.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
