"use client";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 px-6 md:px-16 pt-12 pb-6">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">

        {/* LOGO */}
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <img
            src="/logo.png"
            alt="Brand logo"
            className="w-[140px] md:w-[160px]"
          />
        </div>

        {/* LINKS */}
        <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">

          {/* Home */}
          <div>
            <h4 className="text-white font-semibold mb-3">Home</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Products</li>
              <li className="hover:text-white cursor-pointer">Brands</li>
              <li className="hover:text-white cursor-pointer">Testimonials</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-3">Products</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Pens</li>
              <li className="hover:text-white cursor-pointer">Brands</li>
              <li className="hover:text-white cursor-pointer">Personalization</li>
              <li className="hover:text-white cursor-pointer">Books & Stationary</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-3">Socials</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Facebook</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
              <li className="hover:text-white cursor-pointer">LinkedIn</li>
            </ul>
          </div>

        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* BOTTOM */}
      <div className="flex flex-col items-center gap-4">

        <div className="flex gap-6 text-xl">
          <i className="fa-brands fa-facebook hover:text-white cursor-pointer"></i>
          <i className="fa-brands fa-instagram hover:text-white cursor-pointer"></i>
          <i className="fa-brands fa-linkedin hover:text-white cursor-pointer"></i>
        </div>

        <p className="text-xs text-gray-400">
          © Copyright. All Rights Reserved
        </p>

      </div>

    </footer>
  );
}