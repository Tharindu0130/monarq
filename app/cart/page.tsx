"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/components/CartContext";
import { useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  const handleSelectAll = () => {
    if (selectedItems.size === cart.length && cart.length > 0) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(cart.map((item) => item.id)));
    }
  };

  const toggleSelect = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const deleteSelected = () => {
    selectedItems.forEach((id) => removeFromCart(id));
    setSelectedItems(new Set());
  };

  const handleDelete = (id: string) => {
    removeFromCart(id);
    const newSelected = new Set(selectedItems);
    newSelected.delete(id);
    setSelectedItems(newSelected);
  }

  const summaryItems = cart.filter(item => selectedItems.has(item.id));
  const itemsTotal = summaryItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = itemsTotal > 0 ? 500 : 0; 
  
  const total = itemsTotal > 0 ? itemsTotal + deliveryFee : 0;

  return (
    <main className="bg-[#f5f1eb] w-full min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 w-full py-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6">
            
            {/* Top Bar */}
            <div className="flex justify-between items-center bg-[#e8decb] border border-[#d6c9b5] rounded-xl px-6 py-4">
              <div className="flex items-center gap-4">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 accent-[#7a2e2e] cursor-pointer"
                  checked={cart.length > 0 && selectedItems.size === cart.length}
                  onChange={handleSelectAll}
                />
                <span className="text-[#7a2e2e] font-serif text-[15px]">Select All</span>
              </div>
              <button 
                onClick={deleteSelected}
                className="flex items-center gap-2 text-gray-500 text-[13px] hover:text-gray-700 transition"
              >
                <i className="fa-solid fa-trash text-[#a19b8f]"></i>
                Delete
              </button>
            </div>

            {/* Products List */}
            <div className="bg-[#e8decb] border border-[#d6c9b5] rounded-xl p-6">
              <h2 className="text-[#7a2e2e] font-serif font-bold text-[18px] mb-6 block w-full border-b border-[#d6c9b5] pb-4">
                Products <span className="text-[14px] font-normal ml-2">({cart.length})</span>
              </h2>

              <div className="flex flex-col gap-6">
                {cart.length === 0 ? (
                  <div className="text-center py-8 text-[#7a2e2e]">Your cart is empty.</div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row md:items-center gap-6 pb-6 border-b border-[#d6c9b5] last:border-0 last:pb-0">
                      
                      <div className="flex items-center gap-4">
                        {/* Checkbox */}
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 accent-[#7a2e2e] cursor-pointer"
                          checked={selectedItems.has(item.id)}
                          onChange={() => toggleSelect(item.id)}
                        />
                        
                        {/* Image */}
                        <div className="w-[80px] h-[80px] bg-[#beb1a3] rounded-xl flex justify-center items-center overflow-hidden ml-2 shadow-inner">
                          <img src={item.image} alt={item.name} className="w-[80%] h-auto object-contain" />
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex-1 md:ml-4">
                        <h3 className="text-black font-serif font-bold text-[16px] leading-tight">{item.name}</h3>
                        <p className="text-[#c6a55c] font-semibold text-[14px] mt-1">Rs.{item.price.toLocaleString()}</p>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center justify-between border border-[#c6a55c] rounded-full px-2 py-1 bg-transparent min-w-[100px]">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-[#a19b8f] hover:text-[#7a2e2e] transition text-[14px] px-1"
                        >
                          <i className="fa-solid fa-circle-minus"></i>
                        </button>
                        <span className="text-black font-semibold text-[13px]">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-[#a19b8f] hover:text-[#7a2e2e] transition text-[14px] px-1"
                        >
                          <i className="fa-solid fa-circle-plus"></i>
                        </button>
                      </div>

                      {/* Delete */}
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="text-[#7a2e2e] hover:text-red-700 ml-4 transition"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>

                    </div>
                  ))
                )}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE (Order Summary) */}
          <div className="h-fit">
            <div className="bg-[#e8decb] border border-[#d6c9b5] rounded-xl p-6 shadow-sm">
              <h2 className="text-[#c6a55c] font-serif font-bold text-[18px] mb-6">
                Order Summary
              </h2>
              
              <div className="flex justify-between text-[#3f3f3f] text-[14px] mb-4">
                <span>Items Total</span>
                <span>{itemsTotal > 0 ? `Rs. ${itemsTotal.toLocaleString()}` : "-"}</span>
              </div>
              
              <div className="flex justify-between text-[#3f3f3f] text-[14px] mb-6">
                <span>Delivery Fee</span>
                <span>{deliveryFee > 0 ? `Rs. ${deliveryFee.toLocaleString()}` : "-"}</span>
              </div>

              <div className="border-t border-[#d6c9b5] pt-4 mb-8 flex justify-between items-center">
                <span className="text-black font-bold text-[16px]">Total</span>
                <span className="text-[#c6a55c] font-bold text-[16px]">
                  {total > 0 ? `Rs. ${total.toLocaleString()}` : "-"}
                </span>
              </div>

              <button className="w-full bg-[#c6a55c] text-[#7a2e2e] font-semibold py-3 rounded-lg hover:bg-[#b8964f] hover:text-white transition">
                Procced to Pay
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
