"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  ChevronLeft, 
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import HeaderSection from "../header/page";
import FooterSection from "../footer/page";
import QuoteModal from "../quotemodal/page";

interface Project {
  id: string;
  title: string;
  location: string;
  stoneUsed: string;
  scope: string;
  description: string;
  image: string;
  year: string;
  stats: { label: string; value: string }[];
}

const LUXURY_PROJECTS: Project[] = [
  {
    id: "proj-01",
    title: "The Lumina Quartzite Penthouse",
    location: "Jubilee Hills, Hyderabad",
    stoneUsed: "Exotic Taj Mahal Quartzite",
    scope: "Backlit Accent Walls, Master Bath Vanity & Fireplace Hearth",
    description: "A masterclass in modern luxury. We hand-selected three block-matched slabs of premium Taj Mahal Quartzite directly from Brazilian quarries. The entry hall features custom-machined LED backlighting behind translucent 18mm stone veneers, generating an ethereal, golden ambient glow.",
    image: "/cat01_01.png",
    year: "2025",
    stats: [
      { label: "Slabs Curated", value: "8 Premium Slabs" },
      { label: "Precision Cut", value: "0.2mm Tolerance" },
      { label: "Total Area", value: "1,850 Sq.Ft" }
    ]
  },
  {
    id: "proj-02",
    title: "The Carrara Grand Lobby",
    location: "Financial District, Gachibowli",
    stoneUsed: "Statuario Extra & Arabescato Italian Marble",
    scope: "Double-Height Book-Matched Wall Cladding & Inlay Flooring",
    description: "Designed to inspire awe upon arrival. This commercial lobby features a flawless 35-foot double-height Statuario marble installation, book-matched with mathematical symmetry. Specialized anti-stain impregnators were applied at the molecular level to shield the high-traffic Italian floor tiles.",
    image: "/cat01_02.png",
    year: "2025",
    stats: [
      { label: "Book-matching", value: "4-Way Quad-Match" },
      { label: "Finish Quality", value: "95% Gloss Factor" },
      { label: "Total Area", value: "4,200 Sq.Ft" }
    ]
  },
  {
    id: "proj-03",
    title: "The Obsidian Executive Lounge",
    location: "Sheraton Suites, Bengaluru",
    stoneUsed: "Black Marinace Granite & Engineered Quartz",
    scope: "Seamless Lounge Bar Countertop, Executive Boardrooms & Columns",
    description: "An elegant contrast of dark monolithic masses and crystalline light. The executive bar countertop spans 24 feet without a single visible joint, featuring deep pebble-like fossilized granite aggregates matched with heavy black quartzites. Perfect edge profiling offers unmatched touch tactile luxury.",
    image: "/cat06_01.png",
    year: "2026",
    stats: [
      { label: "Counter Span", value: "24 Ft Jointless" },
      { label: "Edge Profile", value: "Double Mitered Ogee" },
      { label: "Total Area", value: "1,100 Sq.Ft" }
    ]
  }
];

export default function ProjectsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const cardWidth = clientWidth * 0.85; // match card responsive width
      const scrollTo = direction === "left" 
        ? scrollLeft - cardWidth 
        : scrollLeft + cardWidth;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  };

  const handleScrollEvent = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const cardWidth = clientWidth * 0.85;
      const index = Math.round(scrollLeft / cardWidth);
      if (index >= 0 && index < LUXURY_PROJECTS.length) {
        setActiveProjectIdx(index);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#E5E5E5] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]" id="projects-page-root">
      
      {/* Header section */}
      <HeaderSection onGetQuote={() => setIsQuoteOpen(true)} />

      {/* Page Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden border-b border-white/5" id="projects-hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cat02_03.png"
            alt="Exotic Marble Texture"
            fill
            referrerPolicy="no-referrer"
            className="object-cover opacity-20 filter grayscale scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/90 to-[#0B0B0B]/40" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 pt-16" id="projects-hero-text">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] md:text-xs font-mono text-[#D4AF37] tracking-[0.4em] uppercase" id="projects-tagline">
              Masterpieces in Natural Medium
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide mt-3 mb-4" id="projects-title">
              Our Architectural Portfolio
            </h1>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-4" />
            <p className="text-xs md:text-sm text-[#E5E5E5]/60 font-light max-w-xl mx-auto leading-relaxed" id="projects-subtitle">
              Sourcing the extraordinary, polishing to absolute physical perfection. Witness our luxury natural stones applied in elite residential & commercial spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flagship Horizontal Scrolling Projects Section */}
      <section className="py-24 bg-[#0B0B0B] relative overflow-hidden" id="horizontal-scroller-section">
        {/* Ambient background decoration */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#D4AF37]/2 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header controls layout */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" id="scroller-header">
            <div>
              <span className="text-[9px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-2">Featured Showcases</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white tracking-wide">
                Seamless Stone Formats
              </h2>
              <p className="text-xs text-white/50 mt-2 font-light">
                Swipe or use arrow buttons to explore high-resolution spatial layout captures.
              </p>
            </div>

            {/* Custom arrow navigation triggers */}
            <div className="flex items-center gap-3" id="scroller-controls">
              <button
                onClick={() => scroll("left")}
                className="w-11 h-11 rounded-full border border-white/10 hover:border-[#D4AF37]/50 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:bg-white/[0.02] active:scale-95 transition-all duration-300 cursor-pointer"
                aria-label="Scroll left"
                id="scroll-left-btn"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-1.5 font-mono text-xs text-white/40 items-center px-2">
                <span className="text-[#D4AF37] font-bold">0{activeProjectIdx + 1}</span>
                <span>/</span>
                <span>03</span>
              </div>

              <button
                onClick={() => scroll("right")}
                className="w-11 h-11 rounded-full border border-white/10 hover:border-[#D4AF37]/50 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:bg-white/[0.02] active:scale-95 transition-all duration-300 cursor-pointer"
                aria-label="Scroll right"
                id="scroll-right-btn"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Horizontally scrolling row container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScrollEvent}
            className="flex overflow-x-auto gap-6 md:gap-8 pb-8 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            id="horizontal-projects-slider"
          >
            {LUXURY_PROJECTS.map((project) => (
              <div 
                key={project.id}
                className="w-[88vw] sm:w-[75vw] md:w-[65vw] lg:w-[850px] shrink-0 snap-start bg-[#121212] border border-white/5 hover:border-[#D4AF37]/25 rounded-sm p-4 md:p-6 transition-all duration-500 group relative flex flex-col lg:flex-row gap-6 md:gap-8 shadow-2xl"
                id={`project-card-${project.id}`}
              >
                {/* Decorative absolute corner year tag */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-mono tracking-widest text-[#D4AF37]/90 z-20">
                  EST. {project.year}
                </div>

                {/* Left Side: High Definition Render/Photo Block */}
                <div className="w-full lg:w-[48%] relative h-[250px] md:h-[350px] lg:h-[420px] rounded-sm overflow-hidden border border-white/5 bg-black shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover object-center filter saturate-[85%] group-hover:saturate-100 transition-all duration-700 ease-out group-hover:scale-[1.02]"
                    sizes="(max-w-768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />
                  
                  {/* Scope label badge on bottom left of image */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-white/50 block">Scope of Work</span>
                    <span className="text-xs font-semibold text-white/95 truncate block mt-0.5">{project.scope}</span>
                  </div>
                </div>

                {/* Right Side: Editorial Information Content */}
                <div className="flex flex-col justify-between flex-grow py-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 tracking-wide leading-snug">
                      {project.title}
                    </h3>

                    {/* Divider line */}
                    <div className="w-12 h-[1px] bg-white/10 group-hover:bg-[#D4AF37]/50 transition-colors duration-500" />

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase text-white/40 block tracking-widest">Premium Material Sourced</span>
                      <p className="text-xs md:text-sm font-semibold text-white/90 font-sans">
                        {project.stoneUsed}
                      </p>
                    </div>

                    <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project specific Technical Metrics */}
                  <div className="border-t border-white/5 pt-6 mt-6 grid grid-cols-3 gap-2" id={`project-stats-${project.id}`}>
                    {project.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="text-left">
                        <span className="text-[8px] font-mono text-white/40 uppercase tracking-wider block">{stat.label}</span>
                        <span className="text-xs font-bold text-white mt-1 block font-mono">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scrolling slider track progress indicators */}
          <div className="flex items-center justify-center gap-2 mt-8" id="scroller-progress-dots">
            {LUXURY_PROJECTS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const clientWidth = scrollContainerRef.current.clientWidth;
                    scrollContainerRef.current.scrollTo({
                      left: clientWidth * 0.85 * dotIdx,
                      behavior: "smooth"
                    });
                    setActiveProjectIdx(dotIdx);
                  }
                }}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${activeProjectIdx === dotIdx ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/15 hover:bg-white/30"}`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Trust verification banner before call to action */}
      <section className="py-20 bg-[#121212] border-t border-b border-white/5" id="portfolio-credentials">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left" id="credentials-inner-layout">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block">1. Perfect Matching</span>
              <h4 className="text-base font-serif font-bold text-white">Full-Slab Dry Lay matching</h4>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                We perform virtual dry lay of custom quartzite and marble blocks, enabling architects to visualize grain matching before delivery.
              </p>
            </div>
            
            <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block">2. Strict Calibration</span>
              <h4 className="text-base font-serif font-bold text-white">Advanced Italian Calibration</h4>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Every slab undergoes computerized thickness calibration matching, ensuring precise joints and uniform flooring structures.
              </p>
            </div>

            <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block">3. Direct Sourcing</span>
              <h4 className="text-base font-serif font-bold text-white">100% Genuine Origin Tracing</h4>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                By eliminating intermediate brokers and trading layers, Elior guarantees direct quarry handoffs and pristine material grades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-24 bg-[#0B0B0B] text-center relative z-10" id="projects-call-to-action">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-[#D4AF37]/20 bg-gradient-to-b from-[#121212] to-[#0D0D0D] rounded-sm p-8 md:p-12 relative"
          >
            <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-3">Custom Consultations</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">Have a Custom Project in Mind?</h2>
            <p className="text-xs md:text-sm text-[#E5E5E5]/60 font-light leading-relaxed mt-4 mb-8 max-w-xl mx-auto">
              Our dynamic quarry supply line and experienced design consulting team ensure your stone projects are executed with zero margins of error. Let&apos;s work together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#D4AF37] text-[#0B0B0B] hover:bg-[#bfa032] text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] cursor-pointer"
                id="cta-quote-btn"
              >
                Request Consultation Quote
                <Sparkles className="w-4 h-4 text-[#0B0B0B]" />
              </button>
              
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-transparent border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm hover:bg-white/[0.02]"
                id="cta-browse-btn"
              >
                Browse Stone Inventory
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Branding section */}
      <FooterSection onGetQuote={() => setIsQuoteOpen(true)} />

      {/* Quote Modal Overlay */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

    </div>
  );
}
