"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  location: string;
  stoneUsed: string;
  scope: string;
  description: string;
  image: string;
  year: string;
}

const PREVIEW_PROJECTS: Project[] = [
  {
    id: "proj-01",
    title: "The Lumina Quartzite Penthouse",
    location: "Jubilee Hills, Hyderabad",
    stoneUsed: "Exotic Taj Mahal Quartzite",
    scope: "Backlit Accent Walls & Hearth",
    description: "Premium Taj Mahal Quartzite custom-machined with internal high-end LED backlit stone veneers generating a premium warm golden glow.",
    image: "/cat01_01.png",
    year: "2025"
  },
  {
    id: "proj-02",
    title: "The Carrara Grand Lobby",
    location: "Financial District, Gachibowli",
    stoneUsed: "Statuario Italian Marble",
    scope: "Book-Matched Double-Height Cladding",
    description: "35-foot double-height Statuario marble installation book-matched with mathematical precision and certified anti-stain seals.",
    image: "/cat01_02.png",
    year: "2025"
  },
  {
    id: "proj-03",
    title: "The Obsidian Executive Lounge",
    location: "Sheraton Suites, Bengaluru",
    stoneUsed: "Black Marinace & Engineered Quartz",
    scope: "Monolithic Lounge Bar Countertop",
    description: "24-foot seamless deep-fossilized black granite Aggregates with mitered ogee profiles built for ultimate touch tactile luxury.",
    image: "/cat06_01.png",
    year: "2026"
  }
];

export default function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const cardWidth = clientWidth * 0.82; // matching responsive width
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
      const cardWidth = clientWidth * 0.82;
      const index = Math.round(scrollLeft / cardWidth);
      if (index >= 0 && index < PREVIEW_PROJECTS.length) {
        setActiveProjectIdx(index);
      }
    }
  };

  return (
    <section className="py-24 bg-[#0B0B0B] border-t border-b border-white/5 relative overflow-hidden" id="projects">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-[#B9B1A5]/2 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" id="home-projects-header">
          <div>
            <span className="text-[10px] text-[#B9B1A5] font-mono tracking-[0.4em] uppercase block mb-2">Our Masterpieces</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-wide">
              Flagship Spatial Projects
            </h2>
            <div className="w-12 h-[1px] bg-[#B9B1A5] mt-4" />
          </div>

          {/* Scrolling Arrow controls */}
          <div className="flex items-center gap-3" id="home-projects-controls">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#B9B1A5]/50 flex items-center justify-center text-white/70 hover:text-[#B9B1A5] hover:bg-white/[0.02] active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Scroll left"
              id="home-scroll-left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-1 font-mono text-xs text-white/30 items-center px-1">
              <span className="text-[#B9B1A5] font-bold">0{activeProjectIdx + 1}</span>
              <span>/</span>
              <span>03</span>
            </div>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#B9B1A5]/50 flex items-center justify-center text-white/70 hover:text-[#B9B1A5] hover:bg-white/[0.02] active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Scroll right"
              id="home-scroll-right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container with snaps */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScrollEvent}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-6 scroll-smooth snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          id="home-projects-slider"
        >
          {PREVIEW_PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[680px] shrink-0 snap-start bg-[#121212] border border-white/5 hover:border-[#B9B1A5]/25 rounded-sm p-4 md:p-5 transition-all duration-500 group relative flex flex-col sm:flex-row gap-5 md:gap-6"
              id={`home-project-card-${project.id}`}
            >
              {/* Year indicator */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-0.5 rounded text-[8px] font-mono tracking-wider text-[#B9B1A5]">
                {project.year}
              </div>

              {/* Image Frame */}
              <div className="w-full sm:w-[45%] relative h-[180px] sm:h-auto min-h-[200px] rounded-sm overflow-hidden border border-white/5 bg-black shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover object-center filter saturate-[80%] group-hover:saturate-100 transition-all duration-700 ease-out group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              </div>

              {/* Information */}
              <div className="flex flex-col justify-between flex-grow py-1">
                <div className="space-y-3.5">
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#B9B1A5] uppercase tracking-wider">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </div>

                  <h3 className="text-base font-serif font-bold text-white group-hover:text-[#B9B1A5] transition-colors duration-300 tracking-wide leading-tight">
                    {project.title}
                  </h3>

                  <div className="space-y-1">
                    <span className="text-[8px] font-mono uppercase text-white/40 block tracking-widest">Material Selected</span>
                    <p className="text-[11px] font-semibold text-white/85">
                      {project.stoneUsed}
                    </p>
                  </div>

                  <p className="text-xs text-white/50 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Micro CTA */}
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-end">
                  <Link 
                    href="/projects" 
                    className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#B9B1A5]/80 hover:text-[#B9B1A5] transition-colors duration-200"
                  >
                    View Projects
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic page navigator button */}
        <div className="mt-10 text-center" id="home-projects-footer-cta">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-transparent border border-white/15 hover:border-[#B9B1A5] text-white hover:text-[#B9B1A5] text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-sm hover:bg-white/[0.01]"
            id="home-projects-view-all-link"
          >
            View Full Portfolio
            <Sparkles className="w-4 h-4 text-[#B9B1A5]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
