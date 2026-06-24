"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShoppingCart, Check, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import HeaderSection from "@/app/header/page";
import FooterSection from "@/app/footer/page";
import QuoteModal from "@/app/quotemodal/page";
import { CATEGORIES, PRODUCTS, Category, Product } from "./data";
import { addToCart } from "@/lib/cartStore";

// Separate the search param logic into a nested component wrapped in Suspense
function ProductsContent({ onGetQuote }: { onGetQuote: () => void }) {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  useEffect(() => {
    // Determine active category (default to the first category if none matched)
    const activeCatId = catParam || "1";
    const matchedCategory = CATEGORIES.find((c) => c.id === activeCatId) || CATEGORIES[0];
    
    setSelectedCategory(matchedCategory);

    // Apply lazy loading simulation whenever category changes
    setLoading(true);
    const timer = setTimeout(() => {
      const matchedProducts = PRODUCTS.filter((p) => p.categoryId === matchedCategory.id);
      setFilteredProducts(matchedProducts);
      setLoading(false);
    }, 700); // Elegant short delay for dynamic suspense layout

    return () => clearTimeout(timer);
  }, [catParam]);

  const handleAddToCart = (product: Product) => {
    if (!selectedCategory) return;
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      categoryName: selectedCategory.name,
    });

    // Provide immediate visual success feedback on the button
    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-28" id="products-content-container">
      {/* Back link and breadcrumb */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] hover:text-[#bfa032] uppercase tracking-widest transition"
          id="back-home-breadcrumb"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Categories quick horizontal tab switch */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" id="categories-tab-bar">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border whitespace-nowrap ${
                selectedCategory?.id === cat.id
                  ? "bg-[#D4AF37] text-[#0B0B0B] border-[#D4AF37]"
                  : "bg-white/5 text-[#E5E5E5]/60 border-white/10 hover:border-[#D4AF37]/50 hover:text-white"
              }`}
              id={`tab-cat-${cat.id}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          /* Shimmering Lazy Loading Skeletons */
          <motion.div
            key="loading-skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-12"
            id="skeleton-loader-block"
          >
            {/* Header skeleton */}
            <div className="max-w-3xl space-y-4 animate-pulse">
              <div className="h-10 bg-white/5 rounded w-1/2" />
              <div className="h-4 bg-white/5 rounded w-3/4" />
              <div className="h-4 bg-white/5 rounded w-2/3" />
            </div>

            {/* Grid skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-[#121212] border border-white/5 p-4 rounded-sm space-y-4 animate-pulse">
                  <div className="aspect-square w-full bg-white/5 rounded-sm" />
                  <div className="h-6 bg-white/5 rounded w-2/3" />
                  <div className="h-4 bg-white/5 rounded w-1/2" />
                  <div className="h-10 bg-white/5 rounded w-full" />
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Rich Product Listing Layout */
          selectedCategory && (
            <motion.div
              key={selectedCategory.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
              id="category-rendering-layout"
            >
              {/* Category Header */}
              <div className="max-w-4xl border-l-2 border-[#D4AF37] pl-6 py-2" id="category-intro-header">
                <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#D4AF37] uppercase">
                  Category {selectedCategory.id}
                </span>
                <h1 className="text-3xl md:text-5xl font-serif text-white font-bold tracking-tight mt-1 mb-4 uppercase">
                  {selectedCategory.name}
                </h1>
                <p className="text-[#E5E5E5]/75 font-light leading-relaxed text-sm md:text-base">
                  {selectedCategory.description}
                </p>
              </div>

              {/* Products Dynamic Grid List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="products-cards-grid">
                {filteredProducts.map((prod) => (
                  <motion.div
                    key={prod.id}
                    className="group bg-[#121212] border border-white/5 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#D4AF37]/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
                    id={`product-card-${prod.id}`}
                  >
                    {/* Image block (Strict 1:1 Aspect Ratio) */}
                    <div className="aspect-square w-full relative overflow-hidden bg-black/40">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        id={`product-image-${prod.id}`}
                      />
                      {/* Premium rating overlay badge */}
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 px-2 py-1 rounded-sm flex items-center gap-1">
                        <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                        <span className="text-[10px] font-mono font-bold text-white">{prod.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    {/* Meta info details */}
                    <div className="p-5 flex-grow flex flex-col justify-between gap-4">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono tracking-wider text-[#D4AF37] uppercase">
                          {selectedCategory.name}
                        </span>
                        <h3 className="text-base font-semibold text-white tracking-wide leading-snug group-hover:text-[#D4AF37] transition-colors duration-200">
                          {prod.name}
                        </h3>
                        <p className="text-xs text-[#E5E5E5]/60 font-light leading-relaxed line-clamp-2">
                          {prod.description}
                        </p>
                      </div>

                      {/* Pricing and Actions Row */}
                      <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-mono uppercase text-[#D4AF37] tracking-wider font-semibold">
                            Natural Finish
                          </span>
                        </div>

                        <button
                          onClick={() => handleAddToCart(prod)}
                          className={`px-4 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                            addedProductId === prod.id
                              ? "bg-emerald-600 text-white border border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                              : "bg-[#D4AF37] hover:bg-[#bfa032] text-[#0B0B0B] border border-transparent shadow-md hover:shadow-[0_4px_12px_rgba(212,175,55,0.2)]"
                          }`}
                          id={`btn-add-to-cart-${prod.id}`}
                        >
                          {addedProductId === prod.id ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              Added
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-3.5 h-3.5" />
                              Add To Cart
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16 bg-white/[0.01] border border-white/5 rounded-sm">
                  <p className="text-sm text-white/40 font-mono">No products found in this category.</p>
                </div>
              )}
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductsPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#E5E5E5] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]" id="products-page-root">
      
      {/* 1. Header Navigation */}
      <HeaderSection onGetQuote={() => setIsQuoteOpen(true)} />
      
      {/* 2. Main Content inside Suspense to satisfy static export requirements */}
      <main id="products-grid-layout">
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center text-[#D4AF37] font-mono text-sm uppercase tracking-widest animate-pulse">
              Loading Products...
            </div>
          }
        >
          <ProductsContent onGetQuote={() => setIsQuoteOpen(true)} />
        </Suspense>
      </main>
      
      {/* 3. Footer Section */}
      <FooterSection onGetQuote={() => setIsQuoteOpen(true)} />

      {/* 4. Request quote modal dialog */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

    </div>
  );
}
