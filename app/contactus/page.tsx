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
      
      {/* Global Partnership Network Info Banner */}
      

      {/* Footer Branding section */}
      <FooterSection onGetQuote={() => setIsQuoteOpen(true)} />

      {/* Quote Modal Overlay */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

    </div>
  );
}
