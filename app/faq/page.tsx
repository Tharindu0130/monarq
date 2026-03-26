"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="space-y-2">

            {/* QUESTION BOX */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-4 py-3 bg-[#e7e0d6] rounded-lg text-left text-[14px] text-black font-medium"
            >
                <span>{question}</span>

                <span className="text-[#7a2d2d] text-xl font-bold">
                    {open ? "−" : "+"}
                </span>
            </button>

            {/* ANSWER OUTSIDE */}
            {open && (
                <p className="px-2 text-[13px] text-gray-700 leading-6">
                    {answer}
                </p>
            )}

        </div>
    );
}

export default function FAQPage() {
    const [activeSection, setActiveSection] = useState("ordering");

    return (
        <main className="bg-[#f5f1eb] min-h-screen">
            <Navbar />

            {/* HERO */}
            <section className="relative w-full h-[260px] md:h-[320px] flex items-center justify-center">

                <img
                    src="/faq/hero.png"
                    alt="FAQ Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />

            </section>

            {/* CONTENT */}
            <section className="py-12 px-6 md:px-16">
                <div className="max-w-[1200px] mx-auto grid md:grid-cols-[250px_1fr] gap-10">

                    {/* SIDEBAR */}
                    <div className="bg-[#e7e0d6] p-4 rounded-xl shadow w-[250px] h-fit">

                        <div className="space-y-3">

                            {["ordering", "delivery", "engraving", "support"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setActiveSection(item)}
                                    className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-all duration-200
  ${activeSection === item
                                            ? "bg-[#c5a25f] text-black"
                                            : "bg-[#f2f2f2] text-black hover:bg-gray-200"
                                        }
`}
                                >
                                    {item === "support"
                                        ? "AFTER-SALES SUPPORT"
                                        : item.toUpperCase()}
                                </button>
                            ))}

                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="space-y-10">

                        {/* ORDERING */}
                        {activeSection === "ordering" && (
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-black">ORDERING</h2>

                                <div className="space-y-3 text-2xl ">

                                    <FAQItem
                                        question="The item I want is out of stock. When will it be available again?"
                                        answer="We regularly restock our products, and most items are available again within a week. If it remains out of stock longer, please contact our support team"
                                    />

                                    <FAQItem
                                        question="Can I pay in my local currency?"
                                        answer="Yes, payments are processed in your local currency depending on your region."
                                    />

                                    <FAQItem
                                        question="Are taxes included in the product price?"
                                        answer="Taxes may vary based on location and will be shown at checkout."
                                    />

                                    <FAQItem
                                        question="What is the difference between a rollerball and a ballpoint pen?"
                                        answer="Rollerball pens use liquid ink for smoother writing, while ballpoint pens use oil-based ink."
                                    />

                                    <FAQItem
                                        question="Do your pens come in gift boxes?"
                                        answer="Yes, all our pens come in premium gift boxes, perfect for gifting."
                                    />

                                    <FAQItem
                                        question="Do your pens come with a warranty?"
                                        answer="Yes, all our pens come with a 1-year warranty against manufacturing defects."
                                    />

                                    <FAQItem
                                        question="Do you offer discounts for bulk or corporate orders?"
                                        answer="Yes, we offer competitive pricing for bulk and corporate orders."
                                    />

                                </div>
                            </div>
                        )}

                        {/* DELIVERY */}
                        {activeSection === "delivery" && (
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-black">DELIVERY</h2>

                                <div className="space-y-3">

                                    <FAQItem
                                        question="Do you deliver internationally?"
                                        answer="Yes, we offer worldwide shipping."
                                    />

                                    <FAQItem
                                        question="How long will delivery take?"
                                        answer="Delivery typically takes 3–7 business days."
                                    />

                                    <FAQItem
                                        question="Can I track my order?"
                                        answer="Yes, tracking details will be sent after dispatch."
                                    />

                                    <FAQItem
                                        question="Will I need to pay customs or additional charges?"
                                        answer="answers may vary based on location and will be shown at checkout."
                                    />

                                </div>
                            </div>
                        )}

                        {/* ENGRAVING */}
                        {activeSection === "engraving" && (
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-black">ENGRAVING</h2>

                                <div className="space-y-3">

                                    <FAQItem
                                        question="Can I change my engraving after placing an order?"
                                        answer="Please contact us immediately if changes are needed."
                                    />

                                    <FAQItem
                                        question="Can I send my own pen for engraving?"
                                        answer="Yes, we accept external engraving requests."
                                    />

                                    <FAQItem
                                        question="How is the engraving done?"
                                        answer="We use precision laser engraving for durability."
                                    />

                                    <FAQItem
                                        question="Can I engrave more characters than the limit?"
                                        answer="Please contact us immediately if changes are needed."
                                    />

                                    <FAQItem
                                        question="Can I choose the engraving color?"
                                        answer="Please contact us immediately if changes are needed."
                                    />

                                </div>
                            </div>
                        )}

                        {/* SUPPORT */}
                        {activeSection === "support" && (
                            <div>
                                <h2 className="text-3xl font-serif mb-6 text-black">
                                    AFTER-SALES SUPPORT
                                </h2>

                                <div className="space-y-3">

                                    <FAQItem
                                        question="What is your return policy?"
                                        answer="We offer returns within 7 days of purchase."
                                    />

                                    <FAQItem
                                        question="Can damaged pens be repaired?"
                                        answer="Yes, we provide repair services for eligible products."
                                    />

                                    <FAQItem
                                        question="How can I stay updated on new products and offers?"
                                        answer="Subscribe to our newsletter or follow us on social media."
                                    />

                                    <FAQItem
                                        question="My fountain pen is not writing properly. What should I do?"
                                        answer="Clean the nib and ensure proper ink flow before use."
                                    />

                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}