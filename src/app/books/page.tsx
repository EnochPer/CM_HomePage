'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import artworksData from '../../../data/artworks.json';

const BOOKS_SERIES = [
  { id: 17, title: '绘本', en: 'Picture Books', desc: '精选绘本作品集' },
  { id: 16, title: '短篇', en: 'Short Stories', desc: '短篇漫画与故事' },
];

function getSeriesCover(seriesId: number): string | null {
  const key = `series_${seriesId}` as keyof typeof artworksData;
  const works = artworksData[key];
  if (works && works.length > 0) return works[0].image_url;
  return null;
}

function getSeriesCount(seriesId: number): number {
  const key = `series_${seriesId}` as keyof typeof artworksData;
  return artworksData[key]?.length || 0;
}

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-[#dce7f1]">
      <header className="flex flex-col items-center pt-12 sm:pt-16 pb-8 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl font-light text-gray-800 tracking-wider mb-2"
        >
          绘本故事
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xs tracking-widest"
        >
          Books & Stories
        </motion.p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="space-y-8">
          {BOOKS_SERIES.map((book, index) => {
            const cover = getSeriesCover(book.id);
            const count = getSeriesCount(book.id);

            return (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Link href={`/gallery/${book.id}`}>
                  <div className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col sm:flex-row">
                    {/* Book Cover */}
                    <div className="sm:w-64 shrink-0 bg-gray-50">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        {cover ? (
                          <Image
                            src={cover}
                            alt={book.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, 256px"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <span className="text-gray-400 text-4xl">📖</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Book Info */}
                    <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                      <p className="text-xs text-gray-400 tracking-wider mb-1 uppercase">{book.en}</p>
                      <h2 className="text-xl sm:text-2xl font-light text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                        {book.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {book.desc}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-400">{count} 张作品</span>
                        <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                          浏览作品 →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
