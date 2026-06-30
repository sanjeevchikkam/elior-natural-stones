"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  PhoneCall
} from "lucide-react";
import HeaderSection from "../header/page";
import FooterSection from "../footer/page";
import ContactSection from "./ContactSection";
import QuoteModal from "../quotemodal/page";

export default function ContactUsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#E5E5E5] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]" id="contact-us-page-root">
      
      {/* Header section */}
      <HeaderSection onGetQuote={() => setIsQuoteOpen(true)} />

      {/* Page Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden border-b border-white/5" id="contact-hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cat05_01.png"
            alt="Premium Limestone Block"
            fill
            referrerPolicy="no-referrer"
            className="object-cover opacity-20 filter grayscale scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/90 to-[#0B0B0B]/40" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 pt-16" id="contact-hero-text">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] md:text-xs font-mono text-[#D4AF37] tracking-[0.4em] uppercase" id="contact-page-tagline">
              Establish Premium Correspondence
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-wide mt-3 mb-4" id="contact-page-title">
              Contact Elior Natural Stones
            </h1>
            <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mb-4" />
            <p className="text-xs md:text-sm text-[#E5E5E5]/60 font-light max-w-xl mx-auto leading-relaxed" id="contact-page-subtitle">
              Have specific architectural blueprints or custom dimension guidelines? We are fully equipped to assist your sourcing requests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Main Sourcing & Contact Section */}
      <ContactSection />

      {/* Trust-Building: Virtual Yard Location Tour Card & Physical Sourcing Verification */}
      <section className="py-20 bg-[#121212] border-t border-b border-white/5" id="virtual-yard-trust">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="yard-trust-layout">
            
            {/* Sourcing credentials left block */}
            <div className="lg:col-span-6 space-y-6" id="yard-trust-left">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Physical Inspection Welcomed
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">
                Direct Slab & Block Physical Inspections
              </h3>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light">
                We maintain active, dry-laid showcases of imported Italian Marble, exquisite Quartzite slabs, and curated Indian Granites at our premium depot yards in Hyderabad. 
              </p>
              <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                Architects, interior designers, and property planners are always welcome to schedule a custom visit. Our team coordinates guided inspections, testing data presentations, and edge trim selections on-site.
              </p>

              <div className="pt-4 flex flex-wrap gap-4" id="inspections-features">
                <div className="flex items-center gap-2.5 bg-black/30 border border-white/5 px-4 py-2.5 rounded-sm text-xs text-white/80 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Pre-Booked Private Slot
                </div>
                <div className="flex items-center gap-2.5 bg-black/30 border border-white/5 px-4 py-2.5 rounded-sm text-xs text-white/80 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  Direct Sourcing Pricing
                </div>
              </div>
            </div>

            {/* Sourcing credentials right visual placeholder */}
            <div className="lg:col-span-6" id="yard-trust-right">
              <div className="relative h-[280px] sm:h-[350px] w-full rounded-sm overflow-hidden border border-white/10 group bg-black" id="yard-image-container">
                <Image
                  src="/cat01_03.png"
                  alt="Elior Natural Stones Slab Yard"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover filter saturate-[75%] group-hover:saturate-100 transition-all duration-700 ease-out group-hover:scale-105"
                  sizes="(max-w-1024px) 100vw, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                
                {/* Embedded address details */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2 z-10">
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#D4AF37] uppercase tracking-wider bg-[#D4AF37]/10 border border-[#D4AF37]/35 w-max px-2.5 py-1 rounded-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    Depot Coordinates
                  </div>
                  <h4 className="text-base font-serif font-bold text-white">Elior Premium Depot & Stockyard</h4>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
                    Plot No. 42-45, Phase-II, Industrial Sourcing Zone, Hyderabad, India.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Partnership Network Info Banner */}
      <section className="py-24 bg-[#0B0B0B]" id="global-sourcing-credentials">
        <div className="max-w-5xl mx-auto px-6 text-center" id="global-credentials-wrapper">
          <div className="inline-flex p-3 bg-white/5 border border-white/10 rounded-full text-[#D4AF37] mb-6">
            <PhoneCall className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">
            Need Instant Procurement Assistance?
          </h2>
          <p className="text-xs md:text-sm text-white/60 leading-relaxed font-light max-w-xl mx-auto mt-4 mb-8">
            Our direct client support team is fully available on phone or WhatsApp. Call us directly to inquire about raw blocks, bulk pricing, shipping timelines, or custom cut-to-size requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+918125958071"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#D4AF37] text-[#0B0B0B] hover:bg-[#bfa032] text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)]"
              id="procurement-call-btn"
            >
              CallSourcing Hotline
              <PhoneCall className="w-4 h-4 text-[#0B0B0B]" />
            </a>
            
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-transparent border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm hover:bg-white/[0.02]"
              id="procurement-quote-btn"
            >
              Request Custom Quote Estimate
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer Branding section */}
      <FooterSection onGetQuote={() => setIsQuoteOpen(true)} />

      {/* Quote Modal Overlay */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

    </div>
  );
}
