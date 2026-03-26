"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Personalization() {
  return (
    <main className="bg-[#f5f1eb] text-gray-800 min-h-screen">

      {/* NAVBAR */}
      <Navbar />

     <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <img
    src="/personalization/hero.png"
    alt="Personalized pen"
    className="w-full h-full object-cover"
  />


  <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#7b1e22] text-white px-8 md:px-24 py-16 md:py-20 w-[92%] md:w-[650px] lg:w-[720px] h-[75%] shadow-lg text-center">


    <div className="border-t border-white/40 mb-6"></div>


    <h1 className="text-2xl md:text-3xl font-serif text-[#d4af37] mb-4">
      Personalization
    </h1>


    <p className="text-sm md:text-[18px] leading-6 text-gray-200">
      Turn your purchase into a meaningful and memorable gift with custom
      personalization. We offer professional engraving on our pens, allowing
      you to add a name, date, or special message. Each personalization is
      carefully completed in-house to ensure quality and precision, so your
      customized piece can be prepared and delivered to you quickly.
    </p>


    <div className="border-b border-white/40 mt-6"></div>

  </div>

</section>

<section className="bg-[#f5f1eb] pl-6 md:pl-16 lg:pl-24 pr-6 py-20">

  <div className="max-w-[1650px] grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div>

      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#7b1e22] mb-6">
        Engraving
      </h2>

      <p className="text-[15px] md:text-[18px] text-gray-700 leading-8 mb-6">
        Our engraving is completed using advanced laser technology that precisely
        removes the top layer of the pen to reveal the metal beneath. This method
        creates a clean, permanent marking without damaging the pen’s finish.
      </p>

      <p className="text-[15px] md:text-[18px] text-gray-700 leading-8 mb-10">
        Depending on the pen material, the engraving result may vary. Lacquered pens
        often reveal a brass base, producing a subtle gold-toned engraving, while
        silver finishes can create an elegant two-tone effect. Because each pen differs
        in size and curvature, the number of characters allowed may vary, so please
        check the character limit listed on each product page. We also offer a selection
        of engraving fonts, including{" "}
        <span className="italic text-[#c6a55c]">Italic</span>,{" "}
        <span className="text-[#c6a55c] font-semibold">Times New Roman</span>,{" "}
        <span className="text-[#c6a55c]">Allura</span> and{" "}
        <span className="text-[#c6a55c]">Calibri</span>, allowing you to personalize your pen
        in a style that suits your message.
      </p>

      
      <div className="flex flex-wrap gap-8">

       
        <div className="text-center">
          <div className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full border border-gray-300 flex items-center justify-center overflow-hidden">
            <img src="/personalization/font1.png" className="w-full h-full object-cover" />
          </div>
          <p className="text-sm mt-2 text-gray-700">Calibri</p>
        </div>

      
        <div className="text-center">
          <div className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full border border-gray-300 flex items-center justify-center overflow-hidden">
            <img src="/personalization/font2.png" className="w-full h-full object-cover" />
          </div>
          <p className="text-sm mt-2 text-gray-700">Allura</p>
        </div>

       
        <div className="text-center">
          <div className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full border border-gray-300 flex items-center justify-center overflow-hidden">
            <img src="/personalization/font3.png" className="w-full h-full object-cover" />
          </div>
          <p className="text-sm mt-2 text-gray-700">Italic</p>
        </div>

       
        <div className="text-center">
          <div className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full border border-gray-300 flex items-center justify-center overflow-hidden">
            <img src="/personalization/font4.png" className="w-full h-full object-cover" />
          </div>
          <p className="text-sm mt-2 text-gray-700">Times New Roman</p>
        </div>

      </div>

    </div>

    
    <div className="flex justify-center md:justify-end">
      <img
        src="/personalization/engraving.png"
        alt="Engraved pen"
        className="w-[300px] md:w-[300px] lg:w-[450px] rounded-[30px] object-cover shadow-md"
      />
    </div>

  </div>

</section>
<div className="w-[90%] h-[1px] bg-[#c6a55c] mx-auto my-12"></div>


<section className="bg-[#f5f1eb] px-6 md:px-12 lg:px-20 py-20">

  <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 items-center">

  
    <div className="flex justify-center md:justify-start">
      <img
        src="/personalization/embossing-main.png"
        alt="Embossing"
        className="w-[300px] md:w-[360px] lg:w-[420px] rounded-[30px] object-cover shadow-md"
      />
    </div>

  
    <div>

      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#7b1e22] mb-6">
        Embossing
      </h2>

      <p className="text-[15px] md:text-[17px] text-gray-700 leading-8 mb-6">
        We provide a bespoke in-house embossing service that transforms your journal
        or notebook into a meaningful and lasting gift. This personalization adds a
        unique touch, making it perfect for special occasions or professional use.
      </p>

      <p className="text-[15px] md:text-[17px] text-gray-700 leading-8 mb-10">
        Using a traditional hand-operated embossing press, we apply controlled heat
        and pressure to create a clean, elegant impression on the leather surface.
        The embossed text can then be enhanced with{" "}
        <span className="text-[#c6a55c] font-semibold">silver or gold leaf</span>,
        giving it a refined and luxurious finish.
      </p>

    
      <div className="flex items-center gap-8">

       
        <div className="text-center">
          <img
            src="/personalization/emboss1.png"
            className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-full object-cover mb-2"
          />
          <p className="text-sm text-gray-700">Colorless</p>
        </div>

      
        <div className="text-center">
          <img
            src="/personalization/emboss2.png"
            className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-full object-cover mb-2"
          />
          <p className="text-sm text-gray-700">Gold</p>
        </div>

   
        <div className="text-center">
          <img
            src="/personalization/emboss3.png"
            className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-full object-cover mb-2"
          />
          <p className="text-sm text-gray-700">Silver</p>
        </div>

      </div>

    </div>

  </div>

</section>

<div className="w-[90%] h-[1px] bg-[#c6a55c] mx-auto my-12"></div>

<section className="bg-[#f5f1eb] px-6 md:px-12 lg:px-20 py-20">

  <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>

      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#7b1e22] mb-6">
        Cooperate
      </h2>

      <p className="text-[15px] md:text-[17px] text-gray-700 leading-8 mb-6">
        We specialize in personalized pens and journals that are perfectly suited
        for premium corporate gifts. Our in-house laser engraving service allows us
        to customize pens quickly and precisely with both logos and text, ensuring
        a professional finish for every order.
      </p>

      <p className="text-[15px] md:text-[17px] text-gray-700 leading-8 mb-6">
        Our experienced embossing team can also personalize a wide range of products
        including leather journals, notebooks, diaries, wallets, and planners.
        Whether you require a small order or a large bulk quantity, we are equipped
        to handle different needs and budgets while maintaining the highest quality
        standards.
      </p>

      <p className="text-[15px] md:text-[17px] text-gray-700 leading-8">
        For corporate inquiries or bulk orders, please contact us and our team will
        be happy to assist you with a quotation and a digital preview of your
        branding on selected products
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/personalization/corporate.png"
        alt="Corporate gift set"
        className="w-[300px] md:w-[360px] lg:w-[420px] rounded-[30px] object-cover shadow-md"
      />
    </div>

  </div>

</section>


      {/* FOOTER */}
      <Footer />

    </main>
  );
}