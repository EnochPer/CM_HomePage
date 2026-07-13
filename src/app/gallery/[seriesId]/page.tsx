'use client';

import { use, useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import artworksData from '../../../../data/artworks.json';

export default function GalleryPage({ params }: { params: Promise<{ seriesId: string }> }) {
  const { seriesId } = use(params);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const seriesKey = `series_${seriesId}` as keyof typeof artworksData;
  const artworks = artworksData[seriesKey] || [];

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || artworks.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex(((index % artworks.length) + artworks.length) % artworks.length);
    setTimeout(() => setIsAnimating(false), 400);
  }, [artworks.length, isAnimating]);

  const nextSlide = useCallback(() => goToSlide(currentIndex + 1), [currentIndex, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentIndex - 1), [currentIndex, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 10) return;
      if (e.deltaY > 0) nextSlide();
      else prevSlide();
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [nextSlide, prevSlide]);

  if (artworks.length === 0) {
    return (
      <div className="min-h-screen bg-[#dce7f1] flex items-center justify-center pt-14">
        <div className="text-center">
          <h1 className="text-2xl text-gray-800 mb-4">系列未找到</h1>
          <Link href="/home" className="text-blue-500 hover:text-blue-600 transition-colors">
            ← 返回首页
          </Link>
        </div>
      </div>
    );
  }

  const currentArtwork = artworks[currentIndex];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#dce7f1] flex flex-col items-center justify-center overflow-hidden selection:bg-gray-900 selection:text-white pt-14"
    >
      {/* Background blur circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/40 rounded-full blur-3xl"
          animate={{ x: [0, 40, -30, 0], y: [0, -20, 20, 0], scale: [1, 1.05, 0.95, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"
          animate={{ x: [0, -50, 40, 0], y: [0, 30, -30, 0], scale: [1, 0.95, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Main Image Area */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-2 sm:gap-4">
        {/* Left Arrow */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          disabled={isAnimating}
          className="lightbox-round flex-shrink-0 text-white text-xl disabled:opacity-35 disabled:cursor-not-allowed"
        >
          ←
        </motion.button>

        {/* Image Container */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-3xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentArtwork.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={currentArtwork.image_url}
                  alt={currentArtwork.title}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Page Counter */}
          <div className="lightbox-pill text-white/90 text-xs sm:text-sm mt-4">
            <span className="font-medium">{currentIndex + 1}</span>
            <span className="text-white/50">/</span>
            <span className="text-white/50">{artworks.length}</span>
          </div>

          {/* Info */}
          <motion.div
            key={currentArtwork.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="mt-3 text-center max-w-xl"
          >
            <h2 className="text-lg sm:text-xl font-light text-gray-800 mb-1">
              {currentArtwork.title}
            </h2>
            {currentArtwork.desc_zh && (
              <p className="text-gray-500 text-sm leading-relaxed">
                {currentArtwork.desc_zh}
              </p>
            )}
          </motion.div>

          {/* Dots */}
          {artworks.length > 1 && (
            <div className="mt-4 flex gap-1.5 items-center">
              {artworks.slice(0, Math.min(artworks.length, 20)).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-6 h-1.5 bg-gray-700'
                      : 'w-1.5 h-1.5 bg-gray-400/50 hover:bg-gray-400'
                  }`}
                />
              ))}
              {artworks.length > 20 && (
                <span className="text-xs text-gray-400 ml-1">+{artworks.length - 20}</span>
              )}
            </div>
          )}
        </div>

        {/* Right Arrow */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          disabled={isAnimating}
          className="lightbox-round flex-shrink-0 text-white text-xl disabled:opacity-35 disabled:cursor-not-allowed"
        >
          →
        </motion.button>
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-4 text-gray-400 text-xs">
        点击箭头或使用键盘 ← → 切换
      </div>
    </div>
  );
}
