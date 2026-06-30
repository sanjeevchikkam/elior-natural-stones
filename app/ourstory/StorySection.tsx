"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award, Hourglass } from "lucide-react";

export default function StorySection() {
  const previewTimeline = [
    {
      year: "1990 - 2016",
      brand: "SSS Enterprises",
      role: "Geological Foundation",
      desc: "Wholesaling raw block slabs across Southern India, building quarry relationships."
    },
    {
      year: "2017 - 2024",
      brand: "TEJ Natural Stones",
      role: "Processing & Global Exports",
      desc: "Pioneering high-tech manufacturing, diamond saws, and elite global exports."
    },
    {
      year: "2024",
      brand: "STONEX",
      role: "Modern Engineered Surfaces",
      desc: "Introducing specialized premium quartz slab lines for high-end modern designs."
    }
  ];

  return (
    <section className="py-24 bg-[#121212] border-t border-b border-white/5 relative overflow-hidden" id="our-story">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/2 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/[0.01] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story Teaser & Trust metrics */}
          <div className="lg:col-span-5" id="story-section-teaser-info">
            <span className="text-[10px] md:text-xs text-[#D4AF37] font-mono tracking-[0.4em] uppercase" id="story-section-pre-title">
              Our Heritage & Trust
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-wide mt-3 mb-6 leading-tight" id="story-section-title">
              Crafting Excellence <br />Since 1990
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37] mb-6" />
            
            <p className="text-sm text-[#E5E5E5]/70 font-light leading-relaxed mb-8" id="story-section-description">
              Over the past 36 years, we have evolved from regional block trading to direct quarry sourcing of the world’s most spectacular exotic stones. Under our newly unveiled flagship name, <strong>Elior Natural Stones</strong>, we continue our commitment to generational trust, uncompromised quality standards, and master precision.
            </p>

            {/* Quick Trust badges */}
            <div className="space-y-4 mb-8" id="story-section-badges">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-sm bg-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">The Elite 12% Standard</h4>
                  <p className="text-[11px] text-white/40 font-light leading-normal mt-0.5">We source directly from quarries; only prime-cut structural blocks earn our grade.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-sm bg-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Generational Integrity</h4>
                  <p className="text-[11px] text-white/40 font-light leading-normal mt-0.5">A continuous multi-generational legacy in stone-cutting and client advisory.</p>
                </div>
              </div>
            </div>

            <Link
              href="/ourstory"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-transparent border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-sm hover:bg-[#D4AF37]/5"
              id="story-section-cta"
            >
              Explore Full Legacy
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Mini-timeline preview */}
          <div className="lg:col-span-7" id="story-section-timeline-preview">
            <div className="bg-[#0B0B0B] border border-white/5 rounded-sm p-6 md:p-8 relative" id="story-timeline-preview-card">
              <div className="absolute top-4 right-4 text-[10px] font-mono text-white/20 tracking-widest uppercase flex items-center gap-1.5">
                <Hourglass className="w-3.5 h-3.5 text-[#D4AF37]/60" />
                Timeline
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-6 border-b border-white/5 pb-4">
                Milestones & Evolution
              </h3>

              <div className="relative border-l border-white/10 pl-5 space-y-8" id="mini-timeline-track">
                {previewTimeline.map((item, index) => (
                  <div key={item.year} className="relative" id={`mini-timeline-node-${index}`}>
                    {/* Ring dot */}
                    <div className="absolute -left-[26px] top-1 w-3 h-3 rounded-full bg-[#121212] border-2 border-[#D4AF37] z-10" />
                    
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                      <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                        {item.year}
                      </span>
                      <span className="text-[10px] font-mono text-white/40 uppercase">
                        {item.role}
                      </span>
                    </div>
                    
                    <h4 className="text-sm font-semibold text-white mt-1">
                      {item.brand}
                    </h4>
                    
                    <p className="text-xs text-white/50 font-light mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trust Badge Watermark */}
              <div className="mt-8 border-t border-white/5 pt-5 flex items-center justify-between" id="timeline-preview-footer">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#D4AF37]/80 uppercase tracking-widest font-semibold">Elior Natural Stones</span>
                  <span className="text-[9px] text-white/30 font-mono mt-0.5">Trust Builder Approved</span>
                </div>
                <div className="text-[9px] font-mono bg-white/5 text-white/50 px-2 py-1 rounded border border-white/10">
                  Est. 1990
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
