"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, Phone, User, Check, Layers, Ruler } from 'lucide-react';
import { CATEGORIES } from '../products/data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]?.name || 'ITALIAN MARBLE');
  const [sft, setSft] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile || !category || !sft) return;

    // Format WhatsApp message beautifully
    const rawMessage = `Hello Elior Natural Stones,\n\nI would like to request a custom price estimate and availability for the following category:\n\n👤 *Customer Name:* ${name}\n📞 *Mobile Number:* ${mobile}\n🧱 *Stone Category:* ${category}\n📐 *Required Sft:* ${sft}\n\nPlease connect with me regarding raw block availability, premium pricing, and custom finishes.\n\nThank you!`;
    const whatsappUrl = `https://wa.me/918125958071?text=${encodeURIComponent(rawMessage)}`;

    setIsSubmitted(true);

    // Visual feedback before opening WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      // Reset form states
      onClose();
      setIsSubmitted(false);
      setName('');
      setMobile('');
      setCategory(CATEGORIES[0]?.name || 'ITALIAN MARBLE');
      setSft('');
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" id="quote-modal-container">
          {/* Backdrop with elegant blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (!isSubmitted) onClose();
            }}
            className="fixed inset-0 bg-[#000000]/80 backdrop-blur-md cursor-pointer"
            id="quote-modal-backdrop"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg bg-[#121212] border border-[#D4AF37]/30 rounded-lg p-6 md:p-8 shadow-2xl z-10 overflow-hidden"
            id="quote-modal-card"
          >
            {/* Subtle visual gold lighting highlight inside the modal */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 blur-2xl rounded-full pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              disabled={isSubmitted}
              className="absolute top-5 right-5 text-white/50 hover:text-white hover:bg-white/5 p-2 rounded-full transition-all duration-300 disabled:opacity-30 cursor-pointer animate-none"
              aria-label="Close dialog"
              id="close-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="quote-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-[#D4AF37]/10 rounded-sm border border-[#D4AF37]/25" id="modal-title-icon-wrapper">
                      <Layers className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-serif font-bold text-white tracking-wide" id="modal-title">
                        Enquiry
                      </h2>
                      <p className="text-xs font-mono text-[#D4AF37] tracking-wider uppercase mt-1">
                        Get direct quarry pricing & details
                      </p>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5" id="quote-request-form">
                    {/* Name input */}
                    <div className="flex flex-col gap-2" id="form-group-name">
                      <label htmlFor="customer-name" className="text-xs font-mono font-medium tracking-wider text-white/70 uppercase">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          id="customer-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          placeholder="e.g. Sanjeev Naidu Chikkam"
                          className="w-full pl-11 pr-4 py-3 bg-black/40 border border-white/10 focus:border-[#D4AF37]/60 rounded-sm text-sm text-white placeholder-white/30 focus:outline-none transition-all duration-300 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                        />
                      </div>
                    </div>

                    {/* Mobile input */}
                    <div className="flex flex-col gap-2" id="form-group-mobile">
                      <label htmlFor="customer-mobile" className="text-xs font-mono font-medium tracking-wider text-white/70 uppercase">
                        Mobile / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
                          <Phone className="w-4 h-4" />
                        </span>
                        <input
                          type="tel"
                          id="customer-mobile"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          required
                          placeholder="e.g. +91 81259 58071"
                          className="w-full pl-11 pr-4 py-3 bg-black/40 border border-white/10 focus:border-[#D4AF37]/60 rounded-sm text-sm text-white placeholder-white/30 focus:outline-none transition-all duration-300 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                        />
                      </div>
                    </div>

                    {/* Stone Category drop-down selector */}
                    <div className="flex flex-col gap-2" id="form-group-category">
                      <label htmlFor="stone-category" className="text-xs font-mono font-medium tracking-wider text-white/70 uppercase">
                        Stone Category *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
                          <Layers className="w-4 h-4" />
                        </span>
                        <select
                          id="stone-category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full pl-11 pr-10 py-3 bg-black/40 border border-white/10 focus:border-[#D4AF37]/60 rounded-sm text-sm text-white placeholder-white/30 focus:outline-none transition-all duration-300 focus:bg-black/60 cursor-pointer appearance-none focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                        >
                          {CATEGORIES.map((cat) => (
                            <option key={cat.id} value={cat.name} className="bg-[#121212] text-white py-2">
                              {cat.name}
                            </option>
                          ))}
                        </select>
                        {/* Custom Elegant Arrow */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#D4AF37]">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Enquiry sft input */}
                    <div className="flex flex-col gap-2" id="form-group-sft">
                      <label htmlFor="enquiry-sft" className="text-xs font-mono font-medium tracking-wider text-white/70 uppercase">
                        Required Sft *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30">
                          <Ruler className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          id="enquiry-sft"
                          value={sft}
                          onChange={(e) => setSft(e.target.value)}
                          required
                          placeholder="Sft"
                          className="w-full pl-11 pr-4 py-3 bg-black/40 border border-white/10 focus:border-[#D4AF37]/60 rounded-sm text-sm text-white placeholder-white/30 focus:outline-none transition-all duration-300 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                        />
                      </div>
                    </div>

                    {/* Submit Details Button */}
                    <button
                      type="submit"
                      className="w-full mt-6 py-4 bg-[#D4AF37] hover:bg-[#bfa032] text-[#0B0B0B] font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-sm shadow-[0_10px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_12px_25px_rgba(212,175,55,0.35)] flex items-center justify-center gap-2.5 group cursor-pointer"
                      id="submit-quote-form"
                    >
                      Submit & Send Details
                      <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="quote-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                  id="success-message-block"
                >
                  <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full flex items-center justify-center mb-6 text-[#D4AF37]" id="success-icon-wrapper">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2" id="success-title">
                    Thank you, {name}!
                  </h3>
                  <p className="text-sm text-[#E5E5E5]/70 max-w-xs mb-6 font-light" id="success-description">
                    Opening WhatsApp to securely deliver your premium stone enquiry to Elior Natural Stones...
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] tracking-widest uppercase animate-pulse">
                    <Sparkles className="w-4 h-4" />
                    Connecting...
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
