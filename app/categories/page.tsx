"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { CATEGORIES } from '../products/data';

const CATEGORY_IMAGES: { [key: string]: string } = {
  "1": "/Cat01_03 Dyna Beige.jpg",
  "2": "/cat02_01.png",
  "3": "/cat03_01.png",
  "4": "/cat04_01.png",
  "5": "/cat05_01.png",
  "6": "/cat06_01.png",
  "7": "/cat07_01.png",
  "8": "/cat08_01.png",
};

export default function CategoriesSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-[#0B0B0B] border-t border-white/5 z-10" id="categories-section">
      {/* Background radial soft gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#B9B1A5]/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" id="categories-header-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] md:text-xs text-[#B9B1A5] font-mono tracking-[0.4em] uppercase" id="categories-pre-title">
              Our Collections
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-wide mt-3 mb-6" id="categories-main-title">
              Premium Stone Categories
            </h2>
            <div className="w-16 h-[1px] bg-[#B9B1A5] mx-auto mb-6" />
            <p className="text-sm md:text-base text-[#E5E5E5]/70 font-light leading-relaxed" id="categories-description">
              Explore our hand-selected luxury range of natural marbles, granites, limestone, and exquisite pebbles curated for elite structural spaces.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" id="categories-grid">
          {CATEGORIES.map((cat, index) => {
            const imageUrl = CATEGORY_IMAGES[cat.id] || "/sample1.png";
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative h-[360px] rounded-sm overflow-hidden border border-white/10 hover:border-[#B9B1A5]/50 bg-[#121212] flex flex-col justify-end p-6 transition-all duration-300 shadow-xl"
                id={`category-card-${cat.id}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={imageUrl}
                    alt={cat.name}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent z-10 opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="relative z-20 flex flex-col gap-3" id={`category-card-content-${cat.id}`}>
                  <span className="text-[10px] text-[#B9B1A5] font-mono tracking-widest uppercase" id={`category-card-number-${cat.id}`}>
                    Collection 0{index + 1}
                  </span>
                  
                  <h3 className="text-xl font-serif font-bold text-white tracking-wide group-hover:text-[#B9B1A5] transition-colors duration-300" id={`category-card-title-${cat.id}`}>
                    {cat.name}
                  </h3>
                  
                  <p className="text-xs text-[#E5E5E5]/70 line-clamp-2 leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 h-0 group-hover:h-8" id={`category-card-desc-${cat.id}`}>
                    {cat.description}
                  </p>

                  <Link
                    href={`/products?category=${cat.id}`}
                    className="inline-flex items-center gap-2 text-[10px] text-[#B9B1A5] font-mono tracking-[0.2em] uppercase mt-2 focus:outline-none"
                    id={`category-card-link-${cat.id}`}
                  >
                    View Collection
                    <motion.span
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </motion.span>
                  </Link>
                </div>

                {/* Gold Accent Top Border on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B9B1A5] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-30" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
