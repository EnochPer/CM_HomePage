'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import artworksData from '../../../data/artworks.json';

const seriesMeta = [
  { id: 1, name: '19.1' },
  { id: 2, name: '19.2' },
  { id: 3, name: '20.1' },
  { id: 4, name: '20.2' },
  { id: 5, name: '21' },
  { id: 6, name: '22.1' },
  { id: 7, name: '22.2' },
  { id: 8, name: '22.3' },
  { id: 9, name: '22.5日绘' },
  { id: 10, name: '22.7日绘' },
  { id: 11, name: '22写生' },
  { id: 12, name: '23' },
  { id: 13, name: '实物图' },
  { id: 14, name: '板绘作品' },
  { id: 15, name: '温差播报格' },
  { id: 16, name: '短篇' },
  { id: 17, name: '绘本' },
];

const allNames = ['全部', ...seriesMeta.map(s => s.name)];

function getSeriesCover(seriesId: number): string | null {
  const key = `series_${seriesId}` as keyof typeof artworksData;
  const artworks = artworksData[key];
  if (artworks && artworks.length > 0) {
    return artworks[0].image_url;
  }
  return null;
}

function getSeriesCount(seriesId: number): number {
  const key = `series_${seriesId}` as keyof typeof artworksData;
  return artworksData[key]?.length || 0;
}

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('全部');

  const filteredSeries = activeFilter === '全部'
    ? seriesMeta
    : seriesMeta.filter(s => s.name === activeFilter);

  return (
    <div className="min-h-screen bg-[#dce7f1]">
      {/* Header */}
      <header className="flex flex-col items-center pt-12 sm:pt-28 pb-6 px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Link href="/">
            <h1 className="text-3xl sm:text-5xl font-light tracking-wider text-gray-800 mb-3">
              BOBULI SPACE
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-6">
            <p className="text-gray-500 text-xs tracking-widest">个人艺术作品集</p>
            <Link href="/about" className="text-gray-400 text-xs hover:text-gray-600 transition-colors">关于作者</Link>
            <Link href="/exhibitions" className="text-gray-400 text-xs hover:text-gray-600 transition-colors">展览信息</Link>
          </div>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
          {allNames.map(name => (
            <motion.button
              key={name}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveFilter(name)}
              className={`ios-pill px-4 py-1.5 text-sm transition-all duration-200 ${
                activeFilter === name ? 'is-active' : 'text-gray-600'
              }`}
            >
              {name}
            </motion.button>
          ))}
        </div>
      </header>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6">
          {filteredSeries.map((series, index) => {
            const coverUrl = getSeriesCover(series.id);
            const count = getSeriesCount(series.id);

            return (
              <motion.div
                key={series.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="mb-4 sm:mb-6 break-inside-avoid"
              >
                <Link href={`/gallery/${series.id}`}>
                  <div className="group bento-card bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                    {/* Cover Image */}
                    <div className="relative w-full overflow-hidden bg-gray-100"
                      style={{ aspectRatio: coverUrl ? 'auto' : '3/4' }}
                    >
                      {coverUrl ? (
                        <>
                          <div className="relative w-full" style={{ minHeight: '240px' }}>
                            <Image
                              src={coverUrl}
                              alt={series.name}
                              fill
                              className="object-cover img-hover-scale"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </>
                      ) : (
                        <div className="w-full aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <span className="text-gray-400 text-4xl">🖼️</span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-4 sm:p-5">
                      <h3 className="text-sm sm:text-[15px] font-medium text-gray-800 group-hover:text-gray-900 transition-colors line-clamp-1">
                        {series.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        共 {count} 张作品
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {filteredSeries.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            该分类暂无作品
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center pb-12 sm:pb-20">
        <p className="text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} BOBULI SPACE
        </p>
      </footer>
    </div>
  );
}
