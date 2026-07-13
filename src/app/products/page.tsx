'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import artworksData from '../../../data/artworks.json';

const MERCH_SERIES = [13];

interface Artwork {
  id: string;
  title: string;
  image_url: string;
  series_id: number;
  series_name: string;
}

export default function ProductsPage() {
  const artworks: Artwork[] = useMemo(() => {
    const result: Artwork[] = [];
    MERCH_SERIES.forEach(sid => {
      const key = "series_" + sid as keyof typeof artworksData;
      const works = artworksData[key] as Array<{ id: string; title: string; image_url: string }> | undefined;
      if (works) {
        works.forEach(w => {
          result.push({ ...w, series_id: sid, series_name: '实物图' });
        });
      }
    });
    return result;
  }, []);

  return (
    <div className="min-h-screen bg-[#dce7f1]">
      <header className="flex flex-col items-center pt-12 sm:pt-16 pb-8 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-light text-gray-800 tracking-wider mb-2"
        >
          周边及出版物
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xs tracking-widest"
        >
          Merch and Publications
        </motion.p>
      </header>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 pb-20">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-5">
          {artworks.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              className="mb-3 sm:mb-5 break-inside-avoid"
            >
              <Link href={"/gallery/" + art.series_id}>
                <div className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400">
                  <div className="relative w-full overflow-hidden bg-gray-100">
                    <Image
                      src={art.image_url}
                      alt={art.title}
                      width={0}
                      height={0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-700 font-light line-clamp-1">{art.title}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">实物图</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {artworks.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            暂无内容，敬请期待
          </div>
        )}
      </div>
    </div>
  );
}
