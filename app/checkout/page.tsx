"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/components/CartContext";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, ChangeEvent } from "react";
import { SRI_LANKA_LOCATIONS } from "@/data/sri_lanka_locations";
import emailjs from "@emailjs/browser";

function CheckoutContent() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const searchParams = useSearchParams();

  const isBuyNow = searchParams.has("buyNow");

  const [buyNowItem, setBuyNowItem] = useState(() => {
    const param = searchParams.get("buyNow");
    if (param) {
      try {
        const parsed = JSON.parse(decodeURIComponent(param));
        if (parsed && typeof parsed === "object" && parsed.id) {
          return parsed;
        }
      } catch (error) {
        console.error("Failed to parse buyNow parameter:", error);
      }
    }
    return null;
  });

  const items = isBuyNow && buyNowItem ? [buyNowItem] : cart;

  const handleUpdateQty = (id: string, newQty: number) => {
    const validQty = Math.max(1, newQty);
    if (isBuyNow && buyNowItem) {
      setBuyNowItem({ ...buyNowItem, quantity: validQty });
    } else {
      updateQuantity(id, validQty);
    }
  };

  const handleDelete = (id: string) => {
    if (isBuyNow && buyNowItem) {
      setBuyNowItem(null);
    } else {
      removeFromCart(id);
    }
  };

  const total = items?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ) || 0;

  // Form State
  const [isEditable, setIsEditable] = useState(true);
  const [hasSaved, setHasSaved] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    province: "",
    phone: "",
    district: "",
    address: ""
  });

  const handleSave = () => {
    // 1. Basic non-empty validation
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      alert("Please fill in all required fields (Name, Phone, and Address) before saving.");
      return;
    }

    // 2. Email validation (if provided)
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address (e.g., name@example.com).");
      return;
    }

    // 3. Phone validation (Sri Lankan mobile format)
    if (!/^(?:\+94|0)?7[0-9]{8}$/.test(formData.phone.trim())) {
      alert("Please enter a valid Sri Lankan phone number (e.g., 07XXXXXXXX).");
      return;
    }

    setHasSaved(true);
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleProvinceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      province: e.target.value,
      district: ""
    });
  };

  const handleDistrictChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      district: e.target.value
    });
  };

  const liveAddress = [formData.district, formData.province, formData.address].filter(Boolean).join(", ");

  const getInputClass = () => `w-full border border-gray-500 rounded-md p-2.5 text-black placeholder-gray-400 text-[13px] focus:outline-none focus:border-black transition-colors ${isEditable ? 'bg-[#e8f0fe] opacity-100' : 'bg-transparent opacity-60 cursor-not-allowed'}`;
  const getSelectClass = (val: string) => `w-full border border-gray-500 rounded-md p-2.5 text-[13px] appearance-none focus:outline-none focus:border-black transition-colors ${isEditable ? 'bg-[#e8f0fe] opacity-100 ' + (val ? 'text-black' : 'text-gray-400') : 'bg-transparent opacity-60 cursor-not-allowed text-gray-500'}`;

  const [showSuccess, setShowSuccess] = useState(false);

  const handleProceedToPay = async () => {
  if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
    alert("Please fill in all required contact details before proceeding.");
    return;
  }

  if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    alert("Invalid email format. Please edit your contact info.");
    return;
  }

  if (!/^(?:\+94|0)?7[0-9]{8}$/.test(formData.phone.trim())) {
    alert("Invalid phone number. Please enter a valid Sri Lankan number.");
    return;
  }

  const orderItems = items.map(item =>
    `${item.name} (Qty: ${item.quantity}) - Rs.${item.price.toLocaleString()}`
  ).join("\n");

  const totalWithDelivery = total + 200;

  const orderedDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  try {
    // ✅ SEND EMAIL FIRST
    await emailjs.send(
      "service_alm7rgg",
      "template_efvm3i5",
      {
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        order: orderItems,
        total: totalWithDelivery,
        date: orderedDate
      },
      "IdzwzMw0_Z1I4vmAn"
    );

    // ✅ SHOW SUCCESS UI
    setShowSuccess(true);

    // ✅ WHATSAPP MESSAGE
    const message = `🛒 *New Order*

Date: ${orderedDate}
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}

Order Details:

${orderItems}

Address:
${formData.address}

Total: Rs.${totalWithDelivery.toLocaleString()}`;

    const whatsappUrl = `https://wa.me/94776706481?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setShowSuccess(false);
    }, 1500);

  } catch (error) {
    console.error(error);
    alert("Failed to send order. Please try again.");
  }
};

  return (
    <main className="bg-[#f5f1eb] min-h-screen flex flex-col relative">
      <Navbar />

      {/* Success Message Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center transform scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-check text-green-600 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#7a2e2e] mb-2">Order placed!</h3>
            <p className="text-gray-600">Redirecting to WhatsApp...</p>
            <div className="mt-6 flex justify-center">
              <div className="w-8 h-8 border-4 border-[#c5a35d] border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      )}

      <section className="flex-1 max-w-[1200px] w-full mx-auto px-4 md:px-16 py-10 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">

          {/* Shipping Forms Card */}
          <div className="bg-[#ede0d4] p-4 sm:p-8 rounded-xl border border-[#d6c9b5] shadow-sm">
            <h2 className="text-[#7a2e2e] font-serif font-bold text-[22px] mb-8">
              Shipping & Billing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">

              {/* Row 1 */}
              <div>
                <label className="block text-[13px] text-black font-semibold mb-1.5 border-b-0">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  disabled={!isEditable}
                  placeholder="Enter Your Name"
                  className={getInputClass()}
                  required
                />
              </div>
              <div>
                <label className="block text-[13px] text-black font-semibold mb-1.5 border-b-0">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={!isEditable}
                  placeholder="Enter Your Email"
                  className={getInputClass()}
                />
              </div>

              {/* Row 2 */}
              <div>
                <label className="block text-[13px] text-black font-semibold mb-1.5">Phone Number</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={!isEditable}
                  placeholder="Enter Your Phone Number"
                  className={getInputClass()}
                  required
                />
              </div>
              <div>
                <label className="block text-[13px] text-black font-semibold mb-1.5">Province</label>
                <div className="relative">
                  <select
                    value={formData.province}
                    onChange={handleProvinceChange}
                    disabled={!isEditable}
                    className={getSelectClass(formData.province)}
                  >
                    <option value="" disabled hidden>Choose Your Province</option>
                    {SRI_LANKA_LOCATIONS.provinces.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  <i className={`fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-sm ${isEditable ? 'text-gray-500' : 'text-gray-400 opacity-60'}`}></i>
                </div>
              </div>

              {/* Row 3 - Only District now as Row 3 replaced Row 4's single item */}
              <div>
                <label className="block text-[13px] text-black font-semibold mb-1.5">District</label>
                <div className="relative">
                  <select
                    value={formData.district}
                    onChange={handleDistrictChange}
                    disabled={!isEditable || !formData.province}
                    className={getSelectClass(formData.district)}
                  >
                    <option value="" disabled hidden>Choose Your District</option>
                    {formData.province && SRI_LANKA_LOCATIONS.districts[formData.province as keyof typeof SRI_LANKA_LOCATIONS.districts]?.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  <i className={`fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-sm ${isEditable ? 'text-gray-500' : 'text-gray-400 opacity-60'}`}></i>
                </div>
              </div>


              {/* Row 5 */}
              <div className="md:col-span-2">
                <label className="block text-[13px] text-black font-semibold mb-1.5">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  disabled={!isEditable}
                  placeholder="Type Here"
                  className={getInputClass()}
                  required
                />
              </div>
            </div>


            {/* Action Buttons */}
            <div className="mt-10 flex gap-2 sm:gap-4">
              <button
                onClick={handleEdit}
                disabled={isEditable || !hasSaved}
                className={`flex-1 ${(!isEditable && hasSaved) ? 'bg-[#c5a35d] text-[#7a2e2e] hover:bg-[#b8954f]' : 'bg-transparent border border-[#c5a35d] text-[#c5a35d] opacity-50 cursor-not-allowed'} py-3.5 rounded-lg font-bold text-[16px] transition`}
              >
                Edit
              </button>
              <button
                onClick={handleSave}
                disabled={!isEditable}
                className={`flex-1 ${isEditable ? 'bg-[#c5a35d] text-[#7a2e2e] hover:bg-[#b8954f]' : 'bg-transparent border border-[#c5a35d] text-[#c5a35d] opacity-50 cursor-not-allowed'} py-3.5 rounded-lg font-bold text-[16px] transition`}
              >
                Save
              </button>
            </div>
          </div>

          {/* Checkout Products Card */}
          <div className="bg-[#ede0d4] p-4 sm:p-8 rounded-xl border border-[#d6c9b5] shadow-sm mb-16">
            <h2 className="text-[#7a2e2e] font-serif font-bold text-[20px] mb-6 flex items-center gap-2 border-b border-[#d6c9b5] pb-4">
              Products <span className="text-[16px] text-[#7a2e2e] font-normal">({items ? items.length : 0})</span>
            </h2>

            <div className="flex flex-col gap-6 pt-2">
              {!items || items.length === 0 ? (
                <div className="text-[#7a2e2e]">Your checkout list is empty.</div>
              ) : (
                items.map((item: any) => (
                  <div key={item.id} className="flex flex-col md:flex-row md:items-center gap-6">

                    <div className="flex items-center gap-4">
                      <div className="w-[85px] h-[85px] bg-[#beb1a3] rounded-xl flex justify-center items-center overflow-hidden border border-[#a29283]">
                        <img src={item.image} alt={item.name} className="w-[70%] h-auto object-contain" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-black font-serif font-bold text-[16px] leading-tight">{item.name}</h3>
                      <p className="text-[#c5a35d] font-semibold text-[14px] mt-1">Rs.{item.price.toLocaleString()}</p>
                    </div>

                    <div className="flex items-center justify-between border border-[#c5a35d] rounded-full px-2 py-1 bg-transparent min-w-[100px]">
                      <button
                        onClick={() => handleUpdateQty(item.id, item.quantity - 1)}
                        className="text-[#a19b8f] hover:text-[#7a2e2e] transition text-[14px] px-1"
                      >
                        <i className="fa-solid fa-circle-minus"></i>
                      </button>
                      <span className="text-black font-semibold text-[13px]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleUpdateQty(item.id, item.quantity + 1)}
                        className="text-[#a19b8f] hover:text-[#7a2e2e] transition text-[14px] px-1"
                      >
                        <i className="fa-solid fa-circle-plus"></i>
                      </button>
                    </div>

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

        {/* RIGHT COLUMN (Tall Card) */}
        <div>
          <div className="bg-[#ede0d4] rounded-xl border border-[#d6c9b5] shadow-sm p-4 sm:p-6 sticky top-6">

            {/* Contact Info Section */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[#7a2e2e] font-serif font-bold text-[18px]">Contact Info</h2>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-[13px] text-black font-semibold mb-1">Full Name</label>
                <div className="text-[13px] text-gray-800 break-words">{formData.fullName || "—"}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] text-black font-semibold mb-1">Email</label>
                  <div className="text-[13px] text-gray-800 break-words truncate">{formData.email || "—"}</div>
                </div>
                <div>
                  <label className="block text-[13px] text-black font-semibold mb-1">Phone</label>
                  <div className="text-[13px] text-gray-800">{formData.phone || "—"}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-[#d6c9b5] pt-3">
                <div>
                  <label className="block text-[12px] text-gray-500 font-semibold mb-0.5">Province</label>
                  <div className="text-[13px] text-black">{formData.province || "—"}</div>
                </div>
                <div>
                  <label className="block text-[12px] text-gray-500 font-semibold mb-0.5">District</label>
                  <div className="text-[13px] text-black">{formData.district || "—"}</div>
                </div>
              </div>


              <div>
                <label className="block text-[13px] text-black font-semibold mb-1 border-t border-[#d6c9b5] pt-3">Full Address</label>
                <div className="text-[13px] text-gray-800 break-words italic">
                  {liveAddress || "—"}
                </div>
              </div>
            </div>

            {/* Spacer */}
            <div className="h-8"></div>

            {/* Order Summary Section */}
            <h2 className="text-[#c5a35d] font-serif font-bold text-[18px] mb-5">
              Order Summary
            </h2>

            <div className="flex justify-between text-[#3f3f3f] text-[14px] mb-3">
              <span className="font-semibold">Items Total</span>
              <span className="font-semibold text-[#5a5a5a]">Rs. {total > 0 ? total.toLocaleString() : "0"}</span>
            </div>

            <div className="flex justify-between text-[#3f3f3f] text-[14px] mb-6">
              <span className="font-semibold">Delivery Fee</span>
              <span className="font-semibold text-[#5a5a5a]">Rs. 200</span>
            </div>

            <div className="border-t border-[#d6c9b5] pt-5 mb-8 flex justify-between items-center">
              <span className="text-black font-bold text-[16px]">Total</span>
              <span className="text-[#c5a35d] font-bold text-[16px]">LKR {(total > 0 ? total + 200 : 0).toLocaleString()}</span>
            </div>

            <button
              onClick={handleProceedToPay}
              className="bg-[#c5a35d] w-full py-3.5 rounded-lg text-[#7a2e2e] font-bold text-[16px] hover:bg-[#b8954f] hover:text-white transition focus:outline-none"
            >
              Proceed to Pay
            </button>

          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f5f1eb] flex items-center justify-center font-serif text-[#7a2e2e] text-lg">Loading Checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}