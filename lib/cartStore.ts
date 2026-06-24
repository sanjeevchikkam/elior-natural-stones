"use client";

export interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
  categoryName: string;
}

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem("elior-cart");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error("Failed to read cart from localStorage", e);
    return [];
  }
}

export function saveCart(cart: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("elior-cart", JSON.stringify(cart));
    // Trigger custom event so header and page react to changes
    window.dispatchEvent(new Event("cart-updated"));
  } catch (e) {
    console.error("Failed to save cart to localStorage", e);
  }
}

export function addToCart(product: { id: string; name: string; price: string; image: string; categoryName: string }) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart(cart);
}

export function removeFromCart(id: string) {
  const cart = getCart();
  const filtered = cart.filter((item) => item.id !== id);
  saveCart(filtered);
}

export function updateQuantity(id: string, quantity: number) {
  if (quantity <= 0) {
    removeFromCart(id);
    return;
  }
  const cart = getCart();
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
}

export function getCartTotal(): number {
  const cart = getCart();
  return cart.reduce((total, item) => {
    // Parse price string e.g. "$85.00 / Sq.Ft" or "$14.50 / Bag"
    const num = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return total + (isNaN(num) ? 0 : num) * item.quantity;
  }, 0);
}

export function getCartCount(): number {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
}

export function clearCart() {
  saveCart([]);
}
