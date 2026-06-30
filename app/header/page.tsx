"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles, ShoppingCart, ChevronDown } from "lucide-react";
import Link from "next/link";
import { getCartCount } from "@/lib/cartStore";
import { CATEGORIES } from "@/app/products/data";

interface HeaderSectionProps {
  onGetQuote?: () => void;
}

export default function HeaderSection({ onGetQuote }: HeaderSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Update cart count on load and on custom event
  useEffect(() => {
    setCartCount(getCartCount());

    const updateCount = () => {
      setCartCount(getCartCount());
    };

    window.addEventListener("cart-updated", updateCount);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("cart-updated", updateCount);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hello Eliora Natural Stones,\n\nI am interested in your Collections.\n\nPlease share pricing and availability.\n\nThank you."
  );
  const whatsappUrl = `https://wa.me/918125958071?text=${whatsappMessage}`;

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0B0B0B]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Side: Logo & Title */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none" id="header-logo-link">
          <div
            className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/40 p-[2px] transition-transform duration-500 group-hover:scale-105"
            id="header-logo-container"
          >
            <img
              src="/sample1.png"
              alt="Elior natural stones"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
              id="header-logo-img"
            />
          </div>
          <div className="flex flex-col">
            <span
              className="text-white font-serif text-lg md:text-xl font-bold tracking-widest leading-none group-hover:text-[#D4AF37] transition-colors duration-300"
              id="header-brand-name"
            >
              ELIOR
            </span>
            <span
              className="text-[10px] text-[#D4AF37] font-mono tracking-[0.3em] uppercase leading-none mt-1"
              id="header-brand-sub"
            >
              Natural Stones
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          <Link
            href="/"
            className="text-sm font-medium tracking-widest uppercase text-[#E5E5E5] hover:text-[#D4AF37] transition-colors duration-300 relative group py-2"
            id="nav-item-home"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Interactive Products Hover Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => setIsProductsHovered(true)}
            onMouseLeave={() => setIsProductsHovered(false)}
            id="nav-products-dropdown-container"
          >
            <button
              onClick={() => {
                window.location.href = "/products";
              }}
              className="text-sm font-medium tracking-widest uppercase text-[#E5E5E5] hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-1.5 focus:outline-none cursor-pointer"
              id="nav-item-products"
            >
              Products
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isProductsHovered ? "rotate-180 text-[#D4AF37]" : "text-[#E5E5E5]"
                }`}
              />
            </button>

            {/* Dropdown Menu Overlay */}
            <AnimatePresence>
              {isProductsHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 bg-[#121212] border border-white/10 rounded-sm shadow-2xl overflow-hidden p-2 z-50"
                  id="products-hover-menu"
                >
                  <div className="grid grid-cols-1 gap-1">
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/products?category=${cat.id}`}
                        className="flex flex-col p-2.5 rounded-sm hover:bg-[#D4AF37]/10 transition-colors duration-200 group/item text-left"
                      >
                        <span className="text-xs font-mono font-semibold text-[#E5E5E5] group-hover/item:text-[#D4AF37] tracking-wider">
                          {cat.name}
                        </span>
                        <span className="text-[10px] text-white/40 line-clamp-1 group-hover/item:text-white/60 mt-0.5">
                          {cat.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/projects"
            className="text-sm font-medium tracking-widest uppercase text-[#E5E5E5] hover:text-[#D4AF37] transition-colors duration-300 relative group py-2"
            id="nav-item-projects"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/ourstory"
            className="text-sm font-medium tracking-widest uppercase text-[#E5E5E5] hover:text-[#D4AF37] transition-colors duration-300 relative group py-2"
            id="nav-item-our-story"
          >
            Our Story
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/contactus"
            className="text-sm font-medium tracking-widest uppercase text-[#E5E5E5] hover:text-[#D4AF37] transition-colors duration-300 relative group py-2"
            id="nav-item-contact"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* Right Side: Get Quote & Shopping Cart Buttons */}
        <div className="flex items-center gap-4" id="header-cta-group-desktop">
          <button
            onClick={(e) => {
              if (onGetQuote) {
                e.preventDefault();
                onGetQuote();
              } else {
                window.open(whatsappUrl, "_blank", "noopener,noreferrer");
              }
            }}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0B] text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] cursor-pointer"
            id="get-quote-btn-desktop"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Get Quote
          </button>

          {/* Luxury Shopping Cart Icon Link */}
          <Link
            href="/cartpage"
            className="relative p-2.5 bg-white/5 hover:bg-[#D4AF37]/10 border border-white/10 hover:border-[#D4AF37]/40 text-[#E5E5E5] hover:text-[#D4AF37] rounded-sm transition-all duration-300 flex items-center justify-center focus:outline-none"
            id="cart-button-link"
            aria-label="View Shopping Cart"
          >
            <ShoppingCart className="w-4 h-4" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1.5 -right-1.5 bg-[#D4AF37] text-[#0B0B0B] text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md shadow-black/50"
                  id="cart-badge-count"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#0B0B0B] border-t border-white/5 absolute top-full left-0 right-0 shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
            id="mobile-nav-drawer"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold tracking-widest uppercase text-[#E5E5E5] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors duration-300"
                  id="mobile-nav-item-home"
                >
                  Home
                </Link>

                <Link
                  href="/products"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold tracking-widest uppercase text-[#E5E5E5] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors duration-300"
                  id="mobile-nav-item-products"
                >
                  Products
                </Link>

                {/* Mobile Categories Accordion Section */}
                <div className="flex flex-col gap-2 py-2 border-b border-white/5">
                  <span className="text-xs font-mono font-semibold text-[#D4AF37] tracking-[0.2em] uppercase mb-1">
                    Stone Categories
                  </span>
                  <div className="grid grid-cols-1 gap-2 pl-2">
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/products?category=${cat.id}`}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-medium text-[#E5E5E5] hover:text-[#D4AF37] py-1 transition-colors duration-200"
                        id={`mobile-nav-cat-${cat.id}`}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/projects"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold tracking-widest uppercase text-[#E5E5E5] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors duration-300"
                  id="mobile-nav-item-projects"
                >
                  Projects
                </Link>

                <Link
                  href="/ourstory"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold tracking-widest uppercase text-[#E5E5E5] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors duration-300"
                  id="mobile-nav-item-our-story"
                >
                  Our Story
                </Link>

                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold tracking-widest uppercase text-[#E5E5E5] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors duration-300"
                  id="mobile-nav-item-contact"
                >
                  Contact Us
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={(e) => {
                    setIsOpen(false);
                    if (onGetQuote) {
                      e.preventDefault();
                      onGetQuote();
                    } else {
                      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="w-full text-center block px-6 py-3 bg-[#D4AF37] text-[#0B0B0B] text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:bg-[#bfa032] rounded-sm shadow-[0_4px_20px_rgba(212,175,55,0.2)] cursor-pointer"
                  id="get-quote-btn-mobile"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
