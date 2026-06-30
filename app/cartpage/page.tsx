"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trash2, ArrowLeft, ShoppingBag, MessageSquare, Check } from "lucide-react";
import Link from "next/link";
import HeaderSection from "@/app/header/page";
import FooterSection from "@/app/footer/page";
import QuoteModal from "@/app/quotemodal/page";
import { getCart, removeFromCart, clearCart, CartItem } from "@/lib/cartStore";

export default function CartPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [itemSfts, setItemSfts] = useState<{ [key: string]: string }>({});

  // Sync state with localstorage on mount and changes
  const syncCartState = () => {
    setCartItems(getCart());
  };

  useEffect(() => {
    syncCartState();
    window.addEventListener("cart-updated", syncCartState);
    return () => {
      window.removeEventListener("cart-updated", syncCartState);
    };
  }, []);

  const handleRemove = (id: string) => {
    removeFromCart(id);
  };

  const handleSftChange = (id: string, value: string) => {
    setItemSfts(prev => ({ ...prev, [id]: value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    // Compile cart items into a beautifully formatted WhatsApp invoice summary
    let itemSummary = "";
    cartItems.forEach((item, index) => {
      const sftVal = itemSfts[item.id] || "Not specified";
      itemSummary += `${index + 1}. *${item.name}* (${item.categoryName})\n   Enquiry Sft: *${sftVal}*\n\n`;
    });

    const clientInfo = `👤 *Customer Name:* ${name || "Not specified"}\n📞 *Mobile Number:* ${mobile || "Not specified"}\n📍 *Delivery Location:* ${location || "Not specified"}\n✉️ *Message:* ${message || "Not specified"}\n\n`;

    const rawMessage = `Hello Elior Natural Stones,\n\nI would like to request a custom price estimate and delivery timeframe for the following natural stones:\n\n${clientInfo}📦 *Stone Order Summary:*\n${itemSummary}Please connect with me regarding raw availability, shipping logistics, and our custom slab cuts.\n\nThank you!`;
    
    const whatsappUrl = `https://wa.me/918125958071?text=${encodeURIComponent(rawMessage)}`;

    setIsCheckingOut(true);

    // Provide visual success animation before routing to WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      clearCart();
      setIsCheckingOut(false);
      setName("");
      setMobile("");
      setLocation("");
      setMessage("");
      setItemSfts({});
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#E5E5E5] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]" id="cart-page-root">
      
      {/* 1. Header Navigation */}
      <HeaderSection onGetQuote={() => setIsQuoteOpen(true)} />

      {/* 2. Main Cart Layout Area */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-28" id="cart-main-container">
        
        {/* Breadcrumb back to products */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] hover:text-[#bfa032] uppercase tracking-widest transition"
            id="back-products-breadcrumb"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>

        <h1 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mb-8" id="cart-heading">
          Your Collection Basket
        </h1>

        <AnimatePresence mode="wait">
          {cartItems.length === 0 ? (
            /* Elegant Empty Cart State */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 border border-white/5 rounded-sm bg-white/[0.01] flex flex-col items-center justify-center p-6"
              id="empty-cart-state"
            >
              <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37]/25 rounded-full flex items-center justify-center text-[#D4AF37] mb-6">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-serif font-bold text-white mb-2">
                Your Basket is Empty
              </h2>
              <p className="text-sm text-[#E5E5E5]/50 max-w-sm mb-8 font-light">
                Explore our premium collection of Italian Marbles, Granites, Slate Stones, and Pebbles to design your dream surfaces.
              </p>
              <Link
                href="/products"
                className="px-8 py-3 bg-[#D4AF37] hover:bg-[#bfa032] text-[#0B0B0B] text-xs font-bold uppercase tracking-widest transition-all rounded-sm shadow-[0_4px_15px_rgba(212,175,55,0.2)]"
                id="empty-cart-cta"
              >
                Browse Collections
              </Link>
            </motion.div>
          ) : (
            /* Multi-column checkout grid */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
              id="cart-items-layout"
            >
              
              {/* Left Column: Items List */}
              <div className="lg:col-span-8 space-y-4" id="cart-left-items-column">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[#121212] border border-white/5 rounded-sm group hover:border-[#D4AF37]/20 transition-all duration-300"
                    id={`cart-item-${item.id}`}
                  >
                    {/* Square Image & Title Column */}
                    <div className="flex items-center gap-4 w-full flex-grow">
                      <div className="w-16 h-16 relative rounded-sm overflow-hidden border border-white/5 bg-black/40 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-1.5 w-full">
                        <span className="text-[9px] font-mono tracking-wider text-[#D4AF37] uppercase block">
                          {item.categoryName}
                        </span>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 flex-wrap">
                          <h3 className="text-sm font-semibold text-white tracking-wide">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-2" id={`sft-wrapper-${item.id}`}>
                            <label htmlFor={`sft-input-${item.id}`} className="text-[10px] font-mono text-white/50 whitespace-nowrap">Required enquiry:</label>
                            <input
                              type="text"
                              id={`sft-input-${item.id}`}
                              required
                              placeholder="sft"
                              value={itemSfts[item.id] || ""}
                              onChange={(e) => handleSftChange(item.id, e.target.value)}
                              className="w-24 bg-black/40 border border-white/10 focus:border-[#D4AF37]/60 rounded-sm text-[11px] py-1 px-2.5 text-white focus:outline-none transition font-mono"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Trash Action */}
                    <div className="flex items-center justify-end w-full sm:w-auto border-t sm:border-t-0 border-white/5 pt-3 sm:pt-0 shrink-0">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-transparent hover:border-red-500/30 rounded-sm transition focus:outline-none cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column: Order Summary & Estimate Form */}
              <div className="lg:col-span-4" id="cart-right-summary-column">
                <div className="bg-[#121212] border border-[#D4AF37]/30 rounded-sm p-6 relative overflow-hidden space-y-6">
                  {/* Glowing ambient backing */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 blur-2xl rounded-full pointer-events-none" />

                  <h3 className="text-lg font-serif font-bold text-white border-b border-white/5 pb-4">
                    Estimate Summary
                  </h3>

                  {/* Direct Contact Form before WhatsApp handover */}
                  <form onSubmit={handleCheckout} className="space-y-4">
                    <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider block">
                      Enquiry Contact Details (Required)
                    </span>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase text-white/40 block">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sanjeev Chikkam"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 focus:border-[#D4AF37]/60 rounded-sm text-xs py-2 px-3 text-white focus:outline-none transition"
                        id="enquiry-name-input"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase text-white/40 block">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 81259 58071"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 focus:border-[#D4AF37]/60 rounded-sm text-xs py-2 px-3 text-white focus:outline-none transition"
                        id="enquiry-mobile-input"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase text-white/40 block">Delivery Site / Location</label>
                      <input
                        type="text"
                        placeholder="e.g. Hyderabad, TS"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 focus:border-[#D4AF37]/60 rounded-sm text-xs py-2 px-3 text-white focus:outline-none transition"
                        id="enquiry-location-input"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase text-white/40 block">Message</label>
                      <textarea
                        placeholder="e.g. Please share pricing and availability for these finishes"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                        className="w-full bg-black/40 border border-white/10 focus:border-[#D4AF37]/60 rounded-sm text-xs py-2 px-3 text-white focus:outline-none transition resize-none"
                        id="enquiry-message-input"
                      />
                    </div>

                    {/* Submit Whatsapp Checkout */}
                    <AnimatePresence mode="wait">
                      {isCheckingOut ? (
                        <motion.div
                          key="checkingout"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full py-4 bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest rounded-sm flex items-center justify-center gap-2"
                        >
                          <Check className="w-4 h-4" />
                          Submitting Invoice...
                        </motion.div>
                      ) : (
                        <button
                          key="checkoutbutton"
                          type="submit"
                          className="w-full py-4 bg-[#D4AF37] hover:bg-[#bfa032] text-[#0B0B0B] font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.35)] flex items-center justify-center gap-2 group cursor-pointer"
                          id="submit-cart-whatsapp"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-[#0B0B0B]" />
                          Request WhatsApp Quote
                        </button>
                      )}
                    </AnimatePresence>
                  </form>

                  <p className="text-[9px] text-white/40 font-mono leading-relaxed text-center mt-2">
                    * Final quote involves custom sizing, finishing, slab selections, and edge profiling which will be finalized securely on WhatsApp.
                  </p>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* 3. Footer */}
      <FooterSection onGetQuote={() => setIsQuoteOpen(true)} />

      {/* 4. Request quote modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

    </div>
  );
}
