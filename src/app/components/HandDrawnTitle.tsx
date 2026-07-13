'use client';

import { motion } from 'framer-motion';

export default function HandDrawnTitle({ subtitle, delay = 0 }: { subtitle?: string; delay?: number }) {
  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.2, delay: delay + i * 0.15, ease: [.16, 1, .3, 1] }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center"
    >
      {/* Hand-drawn title area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay }}
        className="relative mb-4"
      >
        <svg
          viewBox="0 0 640 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[280px] sm:w-[400px] md:w-[500px] h-auto"
        >
          <defs>
            <filter id="handDrawnSketch">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>

          {/* Decorative sketch border - dashed rectangle behind title */}
          <motion.rect
            x="8" y="8" width="624" height="104" rx="12"
            stroke="#555" strokeWidth="1.2" strokeDasharray="6 4"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            transition={{ duration: 1, delay: delay + 0.6 }}
          />

          {/* Hand-drawn style title */}
          <g filter="url(#handDrawnSketch)">
            {/* B */}
            <motion.path
              d="M44 100 V28 H90 Q112 28 112 50 Q112 68 92 72 L116 100"
              stroke="#374151" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
              fill="none"
              custom={0} variants={drawVariants} initial="hidden" animate="visible"
            />
            <motion.path
              d="M48 64 H84 Q98 64 98 74 Q98 84 84 84 H48"
              stroke="#374151" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
              fill="none"
              custom={1} variants={drawVariants} initial="hidden" animate="visible"
            />

            {/* O */}
            <motion.path
              d="M130 56 Q130 32 156 32 Q182 32 182 56 Q182 80 156 80 Q130 80 130 56 Z"
              stroke="#374151" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
              fill="none"
              custom={2} variants={drawVariants} initial="hidden" animate="visible"
            />

            {/* B */}
            <motion.path
              d="M202 100 V28 H248 Q268 28 268 50 Q268 68 248 72 L274 100"
              stroke="#374151" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
              fill="none"
              custom={3} variants={drawVariants} initial="hidden" animate="visible"
            />
            <motion.path
              d="M206 64 H242 Q256 64 256 74 Q256 84 242 84 H206"
              stroke="#374151" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
              fill="none"
              custom={4} variants={drawVariants} initial="hidden" animate="visible"
            />

            {/* U */}
            <motion.path
              d="M292 32 V88 Q292 104 316 104 Q340 104 340 88 V32"
              stroke="#374151" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
              fill="none"
              custom={5} variants={drawVariants} initial="hidden" animate="visible"
            />

            {/* L */}
            <motion.path
              d="M358 32 V100 H406"
              stroke="#374151" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
              fill="none"
              custom={6} variants={drawVariants} initial="hidden" animate="visible"
            />

            {/* I */}
            <motion.path
              d="M424 32 V100"
              stroke="#374151" strokeWidth="4.5" strokeLinecap="round"
              fill="none"
              custom={7} variants={drawVariants} initial="hidden" animate="visible"
            />
            <motion.path
              d="M410 32 H438"
              stroke="#374151" strokeWidth="2.5" strokeLinecap="round"
              fill="none"
              custom={8} variants={drawVariants} initial="hidden" animate="visible"
            />

            {/* S */}
            <motion.path
              d="M496 44 Q464 40 460 56 Q456 74 480 78 L516 84 Q540 88 544 104 Q548 116 536 116 Q520 116 502 110"
              stroke="#374151" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
              fill="none"
              custom={9} variants={drawVariants} initial="hidden" animate="visible"
            />

            {/* P */}
            <motion.path
              d="M562 32 V100"
              stroke="#374151" strokeWidth="4.5" strokeLinecap="round"
              fill="none"
              custom={10} variants={drawVariants} initial="hidden" animate="visible"
            />
            <motion.path
              d="M562 32 H588 Q612 32 612 52 Q612 72 588 72 H562"
              stroke="#374151" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
              fill="none"
              custom={11} variants={drawVariants} initial="hidden" animate="visible"
            />

            {/* A */}
            <motion.path
              d="M630 100 L654 32 L678 100"
              stroke="#374151" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
              fill="none"
              custom={12} variants={drawVariants} initial="hidden" animate="visible"
            />
            <motion.path
              d="M642 78 H666"
              stroke="#374151" strokeWidth="4" strokeLinecap="round"
              fill="none"
              custom={13} variants={drawVariants} initial="hidden" animate="visible"
            />

            {/* C */}
            <motion.path
              d="M720 56 Q696 32 672 56 Q648 80 672 104 Q696 116 720 100"
              stroke="#374151" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
              fill="none"
              custom={14} variants={drawVariants} initial="hidden" animate="visible"
            />

            {/* E */}
            <motion.path
              d="M738 32 V100 H776"
              stroke="#374151" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
              fill="none"
              custom={15} variants={drawVariants} initial="hidden" animate="visible"
            />
            <motion.path
              d="M738 66 H770"
              stroke="#374151" strokeWidth="4" strokeLinecap="round"
              fill="none"
              custom={16} variants={drawVariants} initial="hidden" animate="visible"
            />
          </g>
        </svg>

        {/* Distressed texture dots */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #000 0.5px, transparent 0.5px)',
            backgroundSize: '6px 6px',
          }}
        />
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 1.4, duration: 0.8 }}
          className="text-gray-500 text-xs tracking-widest"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
