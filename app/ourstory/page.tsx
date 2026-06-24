"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { 
  Award, 
  ShieldCheck, 
  Globe, 
  Sparkles, 
  ArrowRight, 
  Cpu 
} from "lucide-react";
import Link from "next/link";
import HeaderSection from "../header/page";
import FooterSection from "../footer/page";
import QuoteModal from "../quotemodal/page";

interface Milestone {
  year: string;
  brand: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  achievements: string[];
}

const MILESTONES: Milestone[] = [
  {
    year: "1990 - 2016",
    brand: "SSS Enterprises",
    subtitle: "Foundational Years & Wholesale Trading",
    description: "The Genesis of our geological expertise. Operating as SSS Enterprises, we laid the bedrock of our business by wholesaling raw blocks and trading premium granite stones throughout Southern India, establishing high-integrity quarry partnerships that remain active today.",
    image: "/cat02_01.png",
    tag: "The Foundation",
    achievements: [
      "Secured direct partnerships with 15+ domestic quarries",
      "Supplied over 5 million Sq.Ft of structural granite slabs",
      "Built an unblemished reputation for raw block curation"
    ]
  },
  {
    year: "2017 - 2024",
    brand: "TEJ Natural Stones",
    subtitle: "Technological Processing & Global Exports",
    description: "Evolving to meet international architectural standards under TEJ Natural Stones. We set up high-capacity processing factories equipped with multi-blade diamond gang saws and epoxy resin lines, expanding our footprint to supply projects across the USA, UK, and UAE.",
    image: "/cat01_02.png",
    tag: "Global Expansion",
    achievements: [
      "Established multi-blade processing factory with 100k Sq.Ft monthly capacity",
      "Initiated registered exports to residential developers globally",
      "Pioneered automated resin treatment for micro-fissure stabilization"
    ]
  },
  {
    year: "2024",
    brand: "STONEX",
    subtitle: "Pioneering Engineered Surfaces & Modern quartz",
    description: "Recognizing a paradigm shift towards engineered kitchen countertops and high-durability surfaces, we introduced STONEX. This brand line focused on high-pressure vacuum-molded engineered quartz, combining natural crystal aggregate with luxurious designs.",
    image: "/cat06_01.png",
    tag: "Innovation Epoch",
    achievements: [
      "Launched engineered quartz line with 25+ signature designs",
      "Supplied prestigious commercial lobbies and high-rise countertops",
      "Introduced non-porous stain-resistant architectural surfaces"
    ]
  },
  {
    year: "2026",
    brand: "Elior Natural Stones",
    subtitle: "The Ultimate Luxury Evolution & Brand Rebirth",
    description: "The peak of our 36-year legacy. Rebranded as 'Elior' — meaning 'My God is Light' in Hebrew — celebrating the breathtaking beauty of light filtering through exotic natural quartzites, onyx, and translucent marbles. Elior is a digital-first, high-touch luxury concierge sourcing the world’s most magnificent exotic stones directly for premium, elite architects and designers.",
    image: "/cat01_01.png",
    tag: "Luxury Rebirth",
    achievements: [
      "Exclusive direct-from-quarry exotic imports from Italy, Spain, and Brazil",
      "Digital Concierge with virtual Dry Lay full-slab matching preview technology",
      "Opening of our ultra-luxury boutique showroom with private curations"
    ]
  }
];

const TRUST_FACTORS = [
  {
    icon: Award,
    title: "36-Year Generational Heritage",
    description: "Since 1990, our family-led enterprise has survived and thrived across market shifts, maintaining an uncompromised reputation for absolute commercial honesty and deep geological wisdom."
  },
  {
    icon: ShieldCheck,
    title: "The Elite 12% Selection Standard",
    description: "We inspect blocks directly at the quarry face. Only the top 12% of quarried blocks possess the structural density and pristine crystallization required to receive the Elior Luxury Grade classification."
  },
  {
    icon: Globe,
    title: "Direct Sourcing, No Middlemen",
    description: "By managing our own supply chain directly from premium quarries in Carrara (Italy), Espirito Santo (Brazil), and Rajasthan (India), we eliminate inflated broker fees and guarantee 100% genuine origin tracing."
  },
  {
    icon: Cpu,
    title: "State-of-the-Art Italian Calibration",
    description: "Our processing lines use advanced computerized block cutters and multi-head line polishers. Every slab is checked with laser precision for uniform thickness, flat surfaces, and a perfect glossy finish."
  }
];

export default function OurStoryPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#E5E5E5] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]" id="our-story-page-root">
      
      {/* Header section */}
      <HeaderSection onGetQuote={() => setIsQuoteOpen(true)} />

      {/* Hero Banner Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/5" id="story-hero-section">
        {/* Ambient background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cat01_03.png"
            alt="Our Heritage Marble"
            fill
            referrerPolicy="no-referrer"
            className="object-cover opacity-25 filter grayscale contrast-125 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/85 to-[#0B0B0B]/40" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 pt-20" id="story-hero-content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono text-[#D4AF37] tracking-[0.4em] uppercase" id="story-hero-tagline">
              A Legacy Written in Stone
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-wide mt-4 mb-6" id="story-hero-title">
              Our Journey Since 1990
            </h1>
            <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mb-6" />
            <p className="text-sm md:text-base lg:text-lg text-[#E5E5E5]/70 font-light max-w-2xl mx-auto leading-relaxed" id="story-hero-desc">
              From local block trading to global architectural marvels, our 36-year story is built on a steadfast commitment to natural beauty, precision craftsmanship, and uncompromised trust.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative thin bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      </section>

      {/* Main Timeline Section */}
      <section className="py-24 bg-[#0B0B0B] relative z-10" id="story-timeline-section">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-20" id="timeline-header-wrapper">
            <span className="text-[10px] text-[#D4AF37] font-mono tracking-[0.3em] uppercase">Chronology of Excellence</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide mt-3">The Evolution of Elior</h2>
            <p className="text-xs md:text-sm text-[#E5E5E5]/60 font-light mt-4">
              Explore the four historic epochs of our stone-cutting heritage and how we became a trusted partner for luxury designers.
            </p>
          </div>

          <div className="relative border-l border-white/10 md:border-l-0 md:after:content-[''] md:after:absolute md:after:top-0 md:after:bottom-0 md:after:left-1/2 md:after:-translate-x-1/2 md:after:w-[1px] md:after:bg-white/10" id="timeline-flow-container">
            {MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={milestone.year} 
                  className={`relative mb-20 md:mb-28 flex flex-col md:flex-row items-stretch ${isEven ? 'md:flex-row-reverse' : ''}`}
                  id={`timeline-node-${index}`}
                >
                  {/* Circle Pinpoint */}
                  <div className="absolute left-[-25px] md:left-1/2 md:-translate-x-1/2 top-4 w-12 h-12 rounded-full bg-[#121212] border-2 border-[#D4AF37] flex items-center justify-center z-30 shadow-lg shadow-black">
                    <span className="text-[10px] font-mono font-bold text-[#D4AF37]">{index + 1}</span>
                  </div>

                  {/* Empty space for grid on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Box */}
                  <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-12">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="bg-[#121212] border border-white/10 hover:border-[#D4AF37]/40 rounded-sm p-6 md:p-8 transition-all duration-300 shadow-xl relative"
                      id={`timeline-card-${index}`}
                    >
                      {/* Top border gold hover light */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <span className="text-2xl font-serif font-bold text-[#D4AF37] tracking-wider font-mono">
                          {milestone.year}
                        </span>
                        <span className="text-[9px] font-mono uppercase bg-white/5 text-[#E5E5E5]/70 border border-white/10 px-2.5 py-1 rounded-full">
                          {milestone.tag}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-wide">
                        {milestone.brand}
                      </h3>
                      
                      <p className="text-xs font-mono text-[#D4AF37]/80 uppercase tracking-widest mt-1 mb-4">
                        {milestone.subtitle}
                      </p>

                      {/* Timeline Node Image */}
                      <div className="relative w-full h-[180px] rounded-sm overflow-hidden mb-6 border border-white/5">
                        <Image
                          src={milestone.image}
                          alt={milestone.brand}
                          fill
                          referrerPolicy="no-referrer"
                          className="object-cover object-center filter saturate-75 hover:saturate-100 transition-all duration-500 hover:scale-105"
                          sizes="(max-w-768px) 100vw, 500px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </div>

                      <p className="text-sm text-[#E5E5E5]/70 font-light leading-relaxed mb-6">
                        {milestone.description}
                      </p>

                      {/* Bulleted Achievements */}
                      <div className="border-t border-white/5 pt-4">
                        <h4 className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.2em] mb-3 font-semibold">Key Achievements</h4>
                        <ul className="space-y-2.5">
                          {milestone.achievements.map((ach, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs text-[#E5E5E5]/80">
                              <span className="text-[#D4AF37] font-serif mt-0.5">✦</span>
                              <span className="font-light leading-relaxed">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Trust Builder Section (Generational Integrity & Verification) */}
      <section className="py-24 bg-[#121212] border-t border-b border-white/5 relative overflow-hidden" id="story-trust-builder">
        {/* Soft gold backdrop radial glow */}
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#D4AF37]/2 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20" id="trust-header-wrapper">
            <span className="text-[10px] text-[#D4AF37] font-mono tracking-[0.4em] uppercase">Why Elite Architects Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-3">The Elior Trust Builder</h2>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6 mb-4" />
            <p className="text-sm text-[#E5E5E5]/60 font-light leading-relaxed max-w-2xl mx-auto">
              Our legacy is built on transparency, meticulous engineering standards, and direct quarry connections. Here is the foundation of our unshakeable credibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="trust-factors-grid">
            {TRUST_FACTORS.map((factor, idx) => {
              const IconComp = factor.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-[#0B0B0B] border border-white/5 hover:border-[#D4AF37]/30 p-6 rounded-sm transition-all duration-300 flex flex-col gap-4 shadow-lg group hover:-translate-y-1"
                  id={`trust-card-${idx}`}
                >
                  <div className="w-10 h-10 rounded-sm bg-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                    {factor.title}
                  </h3>
                  <p className="text-xs text-[#E5E5E5]/60 font-light leading-relaxed">
                    {factor.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Interactive Trust Stats banner */}
          <div className="mt-20 bg-[#0B0B0B] border border-[#D4AF37]/15 rounded-sm p-8 md:p-12 relative overflow-hidden" id="trust-stats-banner">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/3 rounded-full blur-2xl pointer-events-none" />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center" id="stats-grid-wrapper">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white font-mono">36+</span>
                <span className="text-[10px] text-[#D4AF37] font-mono uppercase tracking-widest mt-2">Years Legacy</span>
              </div>
              <div className="flex flex-col items-center border-l border-white/10">
                <span className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white font-mono">12M+</span>
                <span className="text-[10px] text-[#D4AF37] font-mono uppercase tracking-widest mt-2">Sq.Ft Supplied</span>
              </div>
              <div className="flex flex-col items-center border-l border-white/10">
                <span className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white font-mono">100%</span>
                <span className="text-[10px] text-[#D4AF37] font-mono uppercase tracking-widest mt-2">Direct Sourced</span>
              </div>
              <div className="flex flex-col items-center border-l border-white/10">
                <span className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white font-mono">12%</span>
                <span className="text-[10px] text-[#D4AF37] font-mono uppercase tracking-widest mt-2">Curation Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builder - FAQ-style mini Verification */}
      <section className="py-20 bg-[#0B0B0B] text-center relative z-10" id="story-call-to-action">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-gradient-to-b from-[#121212] to-[#0D0D0D] rounded-sm p-8 md:p-12 relative"
          >
            <span className="text-[10px] font-mono text-[#D4AF37] tracking-[0.3em] uppercase block mb-3">Authenticity Check</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">Ready to Source Exceptional Stones?</h2>
            <p className="text-xs md:text-sm text-[#E5E5E5]/60 font-light leading-relaxed mt-4 mb-8 max-w-xl mx-auto">
              Our direct-to-quarry supply line and specialized logistics team ensure flawless execution. Enquire now and request a physical sample of our stones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#D4AF37] text-[#0B0B0B] hover:bg-[#bfa032] text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] cursor-pointer"
                id="cta-quote-btn"
              >
                Request Custom Quote
                <Sparkles className="w-4 h-4 text-[#0B0B0B]" />
              </button>
              
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-transparent border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm hover:bg-white/[0.02]"
                id="cta-browse-btn"
              >
                Browse Slabs
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
