"use client";

import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display } from "next/font/google";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Log form data for debugging
    const formData = new FormData(formRef.current);
    console.log('Form Data:', Object.fromEntries(formData));

    emailjs
      .sendForm(
        'service_usnv2hk',
        'template_bxdfred',
        formRef.current,
        {
          publicKey: 'IdzwzMw0_Z1I4vmAn',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          formRef.current?.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };
  return (
    <main className="bg-[#1a1a1a] text-white min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center px-6 py-24 overflow-hidden">

        <img
          src="/contact/pen-left.png"
          alt="Pen left"
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[130px] lg:w-[160px]"
        />

        <img
          src="/contact/pen-right.png"
          alt="Pen right"
          className="hidden md:block absolute right-0 bottom-0 w-[220px] lg:w-[260px]"
        />

        <img
          src="/contact/arrow.png"
          alt="arrow"
          className="hidden md:block absolute right-[180px] top-16 w-[70px] opacity-80"
        />

        <img
          src="/contact/arrow.png"
          alt="arrow"
          className="hidden md:block absolute left-[140px] bottom-16 w-[40px] opacity-80 rotate-180"
        />

        <div className="max-w-[750px] mx-auto">
          <h1 className={`${playfair.className} text-[26px] md:text-[32px] text-[#d4af37] mb-6 tracking-wide`}>
            Contact Us
          </h1>

          <p className="text-sm md:text-[15px] text-gray-300 leading-7">
            We're here to help and would love to hear from you. Whether you have a question,
            need assistance, or want to learn more about our services, feel free to get in
            touch with us. You can reach out via email, phone, or by filling out the contact
            form, and our team will get back to you as soon as possible. Your feedback and
            inquiries are always welcome, and we're committed to providing you with the best
            possible support.
          </p>
        </div>

      </section>

      {/* CONTACT FORM */}
      <section className="bg-[#f5f1eb] px-6 md:px-12 lg:px-16 py-16">

        <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* FORM */}
          <form ref={formRef} onSubmit={sendEmail}>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input name="from_name" type="text" placeholder="Full Name" className="input-style" required />
              <input name="from_email" type="email" placeholder="Email" className="input-style" required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input name="phone_number" type="text" placeholder="Phone Number" className="input-style" />
              <input name="quantity" type="text" placeholder="Quantity" className="input-style" />
            </div>

            <input name="inquiry" type="text" placeholder="Inquiry Type" className="input-style w-full mb-4" />

            <textarea
              name="message"
              placeholder="Message"
              className="w-full h-[160px] px-5 py-4 bg-[#2b2b2b] text-white rounded-xl resize-none mb-6 outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-[#c6a55c] hover:bg-[#b8964f] text-[#5a2d2d] font-semibold px-8 py-3 rounded-lg transition"
            >
              Send Inquiry
            </button>

          </form>

          {/* IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/contact/form-image.png"
              alt="Luxury pen gift"
              className="w-[300px] md:w-[350px] lg:w-[400px] rounded-[40px] object-cover"
            />
          </div>

        </div>

        {/* CONTACT CARDS */}
        <div className="max-w-[1200px] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          <div className="bg-[#2b2b2b] text-white p-6 md:p-8 rounded-2xl w-full h-full text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
              <div className="bg-[#c6a55c] w-14 h-14 flex items-center justify-center rounded-full">
                <img src="/contact/phone.png" className="w-6 h-6" />
              </div>
              <p className="font-semibold text-base md:text-lg break-all">0742947133</p>
            </div>
            <p className="text-sm text-gray-300 leading-6">
              Give us a call for quick assistance on orders, customizations, or any urgent inquiries.
            </p>
          </div>

          <div className="bg-[#2b2b2b] text-white p-6 md:p-8 rounded-2xl w-full h-full text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
              <div className="bg-[#c6a55c] w-14 h-14 flex items-center justify-center rounded-full">
                <img src="/contact/email.png" className="w-6 h-6" />
              </div>
              <p className="font-semibold text-base md:text-lg break-all">gifting@gmail.com</p>
            </div>
            <p className="text-sm text-gray-300 leading-6">
              Send us an email with your requirements, and our team will get back to you shortly.
            </p>
          </div>

          <div className="bg-[#2b2b2b] text-white p-6 md:p-8 rounded-2xl w-full h-full text-center sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
              <div className="bg-[#c6a55c] w-14 h-14 flex items-center justify-center rounded-full">
                <img src="/contact/location.png" className="w-6 h-6" />
              </div>
              <p className="font-semibold text-sm md:text-base max-w-[220px]">
                Level 5, Ocean View Tower, No. 125 Galle Road, Colombo 03.
              </p>
            </div>
            <p className="text-sm text-gray-300 leading-6">
              Visit us at our location for a closer look at our products and personalized assistance.
            </p>
          </div>

        </div>

      </section>

      {/* MAP */}
      <section className="bg-[#f5f1eb] px-6 md:px-12 lg:px-16 pb-16">

        <div className="max-w-[1200px] mx-auto">

          <div className="overflow-hidden rounded-[40px] shadow-md">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.1417144317128!2d79.93118611656747!3d6.874578014030078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2510010de8ab1%3A0x24908689f556585f!2sDeskMate!5e0!3m2!1sen!2slk!4v1774341473188!5m2!1sen!2slk"
              className="w-full h-[350px] md:h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}