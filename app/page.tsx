"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";


export default function Home() {

  // HERO IMAGES
  const images = [
    "/hero1.png",
    "/hero2.png",
    "/hero3.png",
    "/hero4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#f5f1eb] text-gray-800">

      {/* ✅ NAVBAR (ONLY THIS) */}
      <Navbar />

      {/* HERO SLIDER */}
      <section className="w-full pt-0">
        <div className="w-full h-[80vh] overflow-hidden shadow-lg relative">

          <div
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((img, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <img
                  src={img}
                  className="w-full h-full object-cover block"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-20 bg-[#f5f1eb]">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr] items-center gap-8 md:gap-4 max-w-[1600px] mx-auto">


          <div className="flex justify-center md:justify-start order-1">
            <img
              src="/pen-left.png"
              alt="Luxury pen"
              className="w-[140px] sm:w-[180px] md:w-[260px] lg:w-[290px] object-contain"
            />
          </div>


          <div className="text-center md:text-left max-w-[700px] md:px-0 order-2 mb-6 md:mb-0">
            <h2 className="text-[18px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-serif font-semibold text-[#2c2c2c] mb-4 md:mb-5">
              Crafted to Impress. Personalized to Remember.
            </h2>

            <p className="text-[14px] sm:text-[15px] leading-6 md:leading-7 text-gray-600 text-justify">
              Experience the art of giving with our collection of luxury pens,
              designed for those who value elegance and meaning. Each pen is a
              masterpiece, crafted from the finest materials and fully customizable
              with your choice of engraving. From celebrating milestones to showing
              appreciation, our pens transform every gift into a lasting memory.
              Elevate your special moments with a touch of sophistication, and give a
              gift that truly speaks from the heart.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end order-3">
            <img
              src="/pen-writing.png"
              alt="Writing pen"
              className="w-[260px] h-[360px] object-cover rounded-[120px]"
            />
          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section className="px-4 sm:px-6 md:px-10 pt-12 md:pt-16 pb-8 md:pb-12 bg-[#d6cec4]">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[28px] md:text-[30px] font-serif font-bold text-[#7b1e22]">
            Our Brands
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12 justify-items-center">

          {/* CARD 1 */}
          <div className="group relative w-full max-w-[340px] h-[260px] sm:h-[300px] md:h-[320px] lg:h-[340px] rounded-xl overflow-hidden shadow-md">

            <img
              src="/card1.png"
              alt="Lamy pen"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-6">

              <h3 className="text-[#d4af37] font-semibold text-lg mb-4 tracking-wide">
                WATERMAN
              </h3>

              <p className="text-gray-200 text-sm leading-6 mb-6">
                Experience refined craftsmanship with Waterman Paris, where luxury meets precision. Designed for smooth, effortless writing and finished with sophisticated detailing, each pen is perfect for meaningful gifting. Personalize it with custom engraving to create a gift that leaves a lasting impression.
              </p>



            </div>

          </div>

          {/* CARD 2 */}
          <div className="group relative w-full max-w-[340px] h-[260px] sm:h-[300px] md:h-[320px] lg:h-[340px] rounded-xl overflow-hidden shadow-md">

            <img
              src="/card2.png"
              alt="Gift pen box"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-6">

              <h3 className="text-[#d4af37] font-semibold text-lg mb-4 tracking-wide">
                PARKER
              </h3>

              <p className="text-gray-200 text-sm leading-6 mb-6">
                Renowned for its heritage and innovation, Parker pens represent timeless style and exceptional craftsmanship. With smooth performance and refined finishes, each pen is designed to deliver a superior writing experience. Personalize it with custom engraving to create a distinguished gift that speaks of success and sophistication.
              </p>



            </div>

          </div>

          {/* CARD 3 */}
          <div className="group relative w-full max-w-[340px] h-[260px] sm:h-[300px] md:h-[320px] lg:h-[340px] rounded-xl overflow-hidden shadow-md">

            <img
              src="/card3.png"
              alt="Pelikan pen"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center px-6">

              <h3 className="text-[#d4af37] font-semibold text-lg mb-4 tracking-wide">
                MONT BLANC
              </h3>

              <p className="text-gray-200 text-sm leading-6 mb-6">
                A symbol of excellence and prestige, Montblanc pens embody master craftsmanship and timeless elegance. Meticulously crafted with premium materials and iconic design, each piece delivers an unmatched writing experience. Personalize your Montblanc pen with custom engraving to create a truly distinguished gift that reflects success, refinement, and lasting legacy.
              </p>



            </div>

          </div>

        </div>

        {/* Brand logos */}
        <div className="flex justify-center">
          <img src="/brands.png" alt="Brand logos" className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[600px] object-contain" />
        </div>

      </section>
      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-4 sm:px-6 md:px-10 pt-8 md:pt-10 pb-16 md:pb-20 text-center relative">

        <h3 className="text-xl md:pt-5 md:text-3xl font-semibold mb-2 font-serif">
          Testimonials
        </h3>

        <p className="text-xs sm:text-sm text-yellow-700 mb-8 md:mb-12">
          What our customers saying about us.
        </p>

        <div className="grid grid-cols-1 md:pt-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 max-w-[1200px] mx-auto">

          {[
            { name: "Michael T.", img: "/user1.png", text: "From ordering to delivery, the experience was seamless. The packaging alone felt premium, and the pen writes beautifully. Highly recommend for anyone looking for a memorable gift." },
            { name: "Amanda R.", img: "/user2.png", text: "I purchased a personalized pen as a graduation gift, and it exceeded all expectations. The engraving was flawless, and the presentation felt truly luxurious. It made the moment even more special." },
            { name: "Daniel K.", img: "/user3.png", text: "The quality of the pen is outstanding. You can immediately feel the craftsmanship and attention to detail. It’s the perfect corporate gift for executives and clients." },
            { name: "Sophia L.", img: "/user4.png", text: "I ordered a custom-engraved pen for my husband, and he absolutely loved it. Elegant, sophisticated, and meaningful — exactly what I was looking for." },
          ].map((user, i) => (

            <div
              key={i}
              className="bg-[#B8AFA6] p-4 sm:p-6 rounded-xl shadow-[8px_10px_0px_rgba(180,120,120,0.3)] hover:shadow-[10px_14px_0px_rgba(180,120,120,0.4)] transition duration-300 w-full max-w-[260px] mx-auto text-left"
            >

              <p className="text-xs sm:text-sm mb-6 sm:mb-8">"{user.text}"</p>

              <div className="flex items-center gap-2 sm:gap-3">

                <img
                  src={user.img}
                  alt={user.name}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                />

                <div>
                  <p className="text-xs sm:text-sm font-semibold text-[#7a2e2e]">
                    {user.name}
                  </p>
                  <p className="text-[#FFD700] text-sm md:text-base mt-2 tracking-wide">
                    ★★★★★
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

        <img
          src="/gold-pen.png"
          alt="Decorative pen"
          className="hidden md:block absolute top-[-1px] right-0 md:right-10 w-[130px] sm:w-[140px] md:w-[190px] lg:w-[190px]"
        />

      </section>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/94713515220"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 sm:right-6 z-50"
      >
        <div className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition duration-300">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="w-7 h-7"
          >
            <path d="M16 .396C7.163.396 0 7.559 0 16.396c0 2.89.757 5.607 2.078 7.96L.081 32l7.822-2.048a15.93 15.93 0 0 0 8.097 2.207c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.05c-2.522 0-4.87-.735-6.852-2.002l-.49-.31-4.644 1.216 1.24-4.525-.32-.516A13.92 13.92 0 0 1 2.08 16.396c0-7.673 6.247-13.92 13.92-13.92 7.673 0 13.92 6.247 13.92 13.92 0 7.673-6.247 13.92-13.92 13.92zm7.676-10.363c-.42-.21-2.487-1.228-2.872-1.367-.385-.14-.665-.21-.945.21-.28.42-1.085 1.367-1.33 1.647-.245.28-.49.315-.91.105-.42-.21-1.776-.655-3.383-2.087-1.25-1.116-2.095-2.49-2.34-2.91-.245-.42-.026-.647.184-.857.19-.19.42-.49.63-.735.21-.245.28-.42.42-.7.14-.28.07-.525-.035-.735-.105-.21-.945-2.275-1.295-3.115-.34-.816-.685-.705-.945-.718l-.805-.014c-.28 0-.735.105-1.12.525s-1.47 1.437-1.47 3.505c0 2.067 1.505 4.065 1.715 4.345.21.28 2.96 4.52 7.18 6.337 1.003.433 1.785.69 2.395.883 1.006.32 1.92.275 2.644.167.807-.12 2.487-1.015 2.837-1.995.35-.98.35-1.82.245-1.995-.105-.175-.385-.28-.805-.49z" />
          </svg>

        </div>
      </a>

      <Footer />
    </main>

  );
}