"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award, 
  Send, 
  MessageSquare, 
  Building2,
  CheckCircle2,
  Lock
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES } from "../products/data";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]?.name || "ITALIAN MARBLE");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;

    // Beautifully formatted WhatsApp message to maintain direct communication high trust
    const rawMessage = `Hello Elior Natural Stones,\n\nI have submitted a detailed enquiry via the Contact Form:\n\n👤 *Client Name:* ${name}\n📧 *Email Address:* ${email || "Not Provided"}\n📞 *Phone Number:* ${phone}\n🧱 *Stone Interest:* ${category}\n✉️ *Message:* ${message}\n\nPlease connect with me regarding raw slab sourcing or project design consultation.\n\nThank you!`;
    const whatsappUrl = `https://wa.me/918125958071?text=${encodeURIComponent(rawMessage)}`;

    setIsSubmitted(true);

    setTimeout(() => {
      // Trigger WhatsApp redirection
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      
      // Reset form fields
      setIsSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setCategory(CATEGORIES[0]?.name || "ITALIAN MARBLE");
      setMessage("");
    }, 1200);
  };

  return (
    <section className="py-24 bg-[#0B0B0B] text-[#E5E5E5] relative overflow-hidden border-t border-white/5" id="contact-us-section">
      {/* Visual background ambient details */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/2 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#D4AF37]/2 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="contact-content-grid">
          
          {/* Left Column: Trust Signals, verified credentials & details */}
          <div className="lg:col-span-5 space-y-10" id="contact-left-column">
            
            <div className="space-y-4">
              <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] block">
                Contact Us
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-wide">
                Immediate response from Many years
              </h3>
              <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                We believe in zero-intermediate markups. Connect directly with our founding partners and quarry sourcing executives to curate your physical collections.
              </p>
            </div>

            {/* Trust Badges Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5" id="contact-trust-badges">
              <div className="p-4 rounded-sm bg-[#121212] border border-white/5 flex gap-3 items-start">
                <div className="p-2 bg-[#D4AF37]/10 rounded border border-[#D4AF37]/20 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide">Certified Origin</h4>
                  <p className="text-[10px] text-white/40 mt-1 leading-relaxed">
                    100% genuine blocks sourced directly from Italy, Brazil, and Spain.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-[#121212] border border-white/5 flex gap-3 items-start">
                <div className="p-2 bg-[#D4AF37]/10 rounded border border-[#D4AF37]/20 shrink-0">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide">ASTM Tested</h4>
                  <p className="text-[10px] text-white/40 mt-1 leading-relaxed">
                    Verified compressive strength & structural load capacity specs.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="space-y-4 pt-4 border-t border-white/5" id="contact-direct-channels">
              <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-[0.3em] block mb-2">
                Direct Touchpoints
              </span>

              <div className="space-y-3">
                {/* Direct Calling Line */}
                <a 
                  href="tel:+918125958071"
                  className="flex gap-4 items-center group cursor-pointer"
                  id="contact-phone-info"
                >
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 group-hover:border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] transition-all duration-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors tracking-wide uppercase font-mono">Immediate Hotline</h5>
                    <p className="text-xs text-white/60 mt-0.5 font-light group-hover:text-white transition-colors">+91 81259 58071</p>
                  </div>
                </a>

                {/* Email Address */}
                <a 
                  href="mailto:info@eliornaturalstones.com"
                  className="flex gap-4 items-center group cursor-pointer"
                  id="contact-email-info"
                >
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 group-hover:border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] transition-all duration-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white group-hover:text-[#D4AF37] transition-colors tracking-wide uppercase font-mono">Direct Procurement Email</h5>
                    <p className="text-xs text-white/60 mt-0.5 font-light group-hover:text-white transition-colors">info@eliornaturalstones.com</p>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: High-Trust Interactive Form */}
          <div className="lg:col-span-7" id="contact-right-column">
            <div className="bg-[#121212] border border-white/5 hover:border-[#D4AF37]/10 rounded-sm p-6 md:p-8 relative shadow-2xl transition-all duration-500" id="contact-form-card">
              
              {/* Header inside Form Card */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5" id="form-card-header">
                <div className="p-2.5 bg-[#D4AF37]/10 rounded-sm border border-[#D4AF37]/25">
                  <Building2 className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white tracking-wide">
                    Enquiry
                  </h3>
                  <p className="text-[10px] font-mono text-[#D4AF37] tracking-wider uppercase mt-1">
                    Direct Response from the company
                  </p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="direct-supply-form"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col gap-2" id="form-group-name">
                        <label htmlFor="form-name" className="text-[10px] font-mono font-semibold tracking-wider text-white/60 uppercase">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="form-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          placeholder="e.g. Sanjeev Chikkam"
                          className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#D4AF37]/60 rounded-sm text-sm text-white placeholder-white/30 focus:outline-none transition-all duration-300 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="flex flex-col gap-2" id="form-group-phone">
                        <label htmlFor="form-phone" className="text-[10px] font-mono font-semibold tracking-wider text-white/60 uppercase">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          id="form-phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          placeholder="e.g. +91 81259 58071"
                          className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#D4AF37]/60 rounded-sm text-sm text-white placeholder-white/30 focus:outline-none transition-all duration-300 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Email input */}
                      <div className="flex flex-col gap-2" id="form-group-email">
                        <label htmlFor="form-email" className="text-[10px] font-mono font-semibold tracking-wider text-white/60 uppercase">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          id="form-email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. client@example.com"
                          className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#D4AF37]/60 rounded-sm text-sm text-white placeholder-white/30 focus:outline-none transition-all duration-300 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                        />
                      </div>

                      {/* Stone Category selection */}
                      <div className="flex flex-col gap-2" id="form-group-category">
                        <label htmlFor="form-category" className="text-[10px] font-mono font-semibold tracking-wider text-white/60 uppercase">
                          Stone of Interest
                        </label>
                        <select
                          id="form-category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#D4AF37]/60 rounded-sm text-sm text-white placeholder-white/30 focus:outline-none transition-all duration-300 focus:bg-[#121212] cursor-pointer appearance-none focus:shadow-[0_0_15px_rgba(212,175,55,0.1)]"
                        >
                          {CATEGORIES.map((cat) => (
                            <option key={cat.id} value={cat.name} className="bg-[#121212] text-white">
                              {cat.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message / Inquiry text block */}
                    <div className="flex flex-col gap-2" id="form-group-message">
                      <label htmlFor="form-message" className="text-[10px] font-mono font-semibold tracking-wider text-white/60 uppercase">
                        Enquiry / Requirements Description *
                      </label>
                      <textarea
                        id="form-message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={4}
                        placeholder="Please tell your required dimensions, sft area (Eg: 350 sft), block thickness (Eg: 20mm)."
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 focus:border-[#D4AF37]/60 rounded-sm text-sm text-white placeholder-white/30 focus:outline-none transition-all duration-300 focus:bg-black/60 focus:shadow-[0_0_15px_rgba(212,175,55,0.1)] resize-none"
                      />
                    </div>

                    {/* Zero-spam direct transmission guarantee */}
                    <div className="flex items-center gap-2.5 text-white/40 text-[10px] font-mono leading-relaxed bg-black/20 p-3 rounded-sm border border-white/[0.02]">
                      <Lock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>Sourcing requests are transmitted securely to direct partner lines. No unsolicited follow-ups.</span>
                    </div>

                    {/* Submit Sourcing Request Trigger */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#D4AF37] text-[#0B0B0B] hover:bg-[#bfa032] text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.35)] flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.99]"
                      id="submit-sourcing-btn"
                    >
                      Send Enquiry
                      <Send className="w-3.5 h-3.5 text-[#0B0B0B]" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center flex flex-col items-center justify-center"
                    id="contact-form-success"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] mb-6 animate-bounce">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-2" id="contact-success-title">
                      Enquiry Handled with Care
                    </h3>
                    <p className="text-xs md:text-sm text-[#E5E5E5]/70 max-w-sm mb-6 font-light leading-relaxed" id="contact-success-description">
                      Opening a secure executive communications thread on WhatsApp to share pricing, catalogs, and slab availability specs.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase animate-pulse">
                      <MessageSquare className="w-4 h-4" />
                      Redirecting To WhatsApp...
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
