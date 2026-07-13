'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import artworksData from '../../../data/artworks.json';

const ILLUSTRATION_SERIES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15];
const SERIES_NAMES: Record<number, string> = {
  1: '19.1', 2: '19.2', 3: '20.1', 4: '20.2', 5: '21',
  6: '22.1', 7: '22.2', 8: '22.3', 9: '22.5日绘', 10: '22.7日绘',
  11: '22写生', 12: '23', 13: '实物图', 14: '板绘作品',
  15: '温差播报格', 16: '短篇', 17: '绘本',
};

interface Artwork {
  id: string;
  title: string;
  image_url: string;
  series_id: number;
  series_name: string;
  sort_order: number;
}

export default function IllustrationPage() {
  const artworks: Artwork[] = useMemo(() => {
    const result: Artwork[] = [];
    ILLUSTRATION_SERIES.forEach(sid => {
      const key = `series_${sid}` as keyof typeof artworksData;
      const works = artworksData[key] as Array<{ id: string; title: string; image_url: string }> | undefined;
      if (works) {
        works.forEach((w, i) => {
          result.push({
            ...w,
            series_id: sid,
            series_name: SERIES_NAMES[sid],
            sort_order: sid * 10000 + i,
          });
        });
      }
    });
    result.sort((a, b) => b.sort_order - a.sort_order);
    return result;
  }, []);

  return (
    <div className="min-h-screen bg-[#dce7f1]">
      <header className="flex flex-col items-center pt-12 sm:pt-16 pb-6 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-light text-gray-800 tracking-wider mb-2"
        >
          插画作品
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xs tracking-widest"
        >
          Illustration
        </motion.p>
      </header>

      <div className="max-w-full mx-auto px-3 sm:px-6 pb-20">
        <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-2 sm:gap-4">
          {artworks.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.008 }}
              className="mb-2 sm:mb-4 break-inside-avoid"
            >
              <Link href={`/gallery/${art.series_id}`}>
                <div className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative w-full overflow-hidden bg-gray-100">
                    <Image
                      src={art.image_url}
                      alt={art.title}
                      width={0}
                      height={0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end">
                      <div className="w-full p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="inline-block bg-white/90 backdrop-blur-sm text-[11px] px-2 py-0.5 rounded-full text-gray-600">
                          {art.series_name}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-2">
                    <p className="text-[11px] sm:text-xs text-gray-400 line-clamp-1">
                      {art.series_name} / {art.title}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
