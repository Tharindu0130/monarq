"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

// PRODUCTS ARRAY
const products = [
  {
    id: "parker-51",
    name: "Parker 51 Fountain Pen",
    price: "Rs.2,000",
    image: "/products/product1.png",
    colors: ["#111111", "#24374b", "#8f8f8f", "#c5a25f"],
  },
  {
    id: "sonnet-intrepid",
    name: "Sonnet Intrepid Journeys",
    price: "Rs.10,000",
    image: "/products/product2.png",
    colors: ["#111111", "#8a8a8a"],
  },
  {
    id: "sonnet-cisele",
    name: "Sonnet Ciselé Rollerball",
    price: "Rs.20,000",
    image: "/products/product3.png",
    colors: ["#111111", "#24466a", "#6f6f6f"],
  },
  {
    id: "jotter-xl",
    name: "Jotter XL Monochrome",
    price: "Rs.5,000",
    image: "/products/product4.png",
    colors: ["#111111", "#6f6f6f"],
  },
  {
    id: "urban",
    name: "Urban Fountain Pen",
    price: "Rs.9,875",
    image: "/products/product5.png",
    colors: ["#111111", "#b2b2b2"],
  },
];

const gallery = [
  "/parker/p1.png",
  "/parker/p2.png",
  "/parker/p3.png",
  "/parker/p4.png",
  "/parker/p5.png",
];

export default function ProductDetailClient({ productId }: { productId: string }) {
  const [qty, setQty] = useState(1);
  const [mainImage, setMainImage] = useState(gallery[0]);



const { addToCart } = useCart();

  // RELATED PRODUCTS
  const relatedProducts = useMemo(() => {
    return products
      .filter((p) => p.id !== productId)
      .slice(0, 4);
  }, [productId]);

  // CURRENT PRODUCT 
  const product = products.find((p) => p.id === productId) || products[0];
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <main className="bg-[#f5f1eb] w-full min-h-screen">
      <Navbar />

      {/* MAIN */}
      <section className="w-full py-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-[100px_1fr_1fr] gap-10">

            {/* THUMBNAILS */}
            <div className="flex md:flex-col gap-4">
              {gallery.map((img) => (
                <button
                  key={img}
                  onClick={() => setMainImage(img)}
                  className={`w-14 h-14 border p-1 cursor-pointer transition-all ${
                    mainImage === img ? "border-black scale-105" : "border-[#e2d8cc]"
                  }`}
                >
                  <img src={img} alt="Thumbnail view" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* IMAGE */}
            <div className="flex justify-center items-center">
              <img
                src={mainImage}
                alt={product.name}
                className="w-[180px] md:w-[250px] object-contain"
              />
            </div>

            {/* DETAILS */}
            <div>
              <h1 className="text-[30px] font-serif font-bold text-black">
                {product.name}
              </h1>

              <p className="mt-2 text-[13px] text-[#5a5a5a]">
                The Parker 51 features a streamlined silhouette and iconic hooded nib.
              </p>

              <div className="mt-3 text-[12px] flex gap-2">
                <span className="text-[#c5a25f]">★★★★★</span>
                <span>5.0</span>
                <span>(128 Reviews)</span>
              </div>

              <div className="mt-1 flex gap-2 text-[12px]">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span className="text-green-600">In Stock</span>
              </div>

              <p className="mt-4 text-[28px] text-[#c5a25f] font-semibold">
                {product.price}
              </p>

              {/* COLORS */}
              <div className="mt-4">
                <p className="text-[13px] font-semibold text-[#7a2d2d]">
                  Colors:
                </p>
                <div className="flex gap-3 mt-2">
                  {product.colors.map((c) => {
                    const isSelected = selectedColor === c;

                    return (
                      <button
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        className={`w-6 h-6 rounded-full border transition-all duration-200 cursor-pointer
        ${isSelected ? "ring-2 ring-black scale-110" : "hover:scale-105"}
      `}
                        style={{ backgroundColor: c }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* WRITING TYPE */}
              <p className="mt-4 text-[13px]">
                <span className="font-semibold text-[#7a2d2d]">
                  Writing Type:
                </span>{" "}
                <span className="text-black font-medium">Fountain</span>
              </p>

              {/* QUANTITY */}
              <div className="mt-2 flex items-center border border-[#c5a25f] rounded-full w-fit px-4 py-1.5 gap-4">

                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-6 h-6 flex items-center justify-center rounded-full border border-[#c5a25f] text-[#7a2d2d] text-sm cursor-pointer hover:bg-[#c5a25f] hover:text-white"
                >
                  -
                </button>

                <span className="text-[16px] font-semibold text-black min-w-[20px] text-center">
                  {qty}
                </span>

                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-6 h-6 flex items-center justify-center rounded-full border border-[#c5a25f] text-[#7a2d2d] text-sm cursor-pointer hover:bg-[#c5a25f] hover:text-white"
                >
                  +
                </button>

              </div>
              <div className="mt-5 flex gap-4 w-full">
                <button className="flex-1 bg-transparent border border-[#7a2e2e] text-[#7a2e2e] py-2.5 text-sm font-semibold rounded-full cursor-pointer hover:bg-[#7a2e2e] hover:text-white transition">
                  Buy Now
                </button>
                <button
  onClick={() =>
    addToCart({
      id: product.id,
      name: product.name,
      price: Number(product.price.replace(/[^0-9]/g, "")),
      image: product.image,
      quantity: qty,
    })
  }
  className="flex-1 bg-[#c6a55c] text-[#7a2e2e] py-2.5 text-sm font-semibold rounded-full cursor-pointer hover:bg-[#b8964f] transition flex items-center justify-center gap-2"
>
  <i className="fa-solid fa-cart-shopping"></i> Add To Cart
</button>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* PRODUCT DETAILS */}
      <section className="w-full bg-[#d6cec4] py-16">

        {/* Wider container */}
        <div className="max-w-[1400px] mx-auto px-10 md:px-20">

          {/* TITLE */}
          <h2 className="text-center text-[#7a2e2e] text-[22px] font-serif font-semibold mb-14">
            Product Details
          </h2>

          {/* CONTENT */}
          <div className="grid md:grid-cols-2 gap-24 text-[13px] leading-7">

            {/* DESCRIPTION */}
            <div>
              <h3 className="font-semibold text-[16px] mb-4 text-black">
                Description
              </h3>

              <p className="text-[#3f3f3f] text-[15px]">
                The Parker 51 is as groundbreaking today as it was when first launched in 1941.
                This unique writing instrument is inspired by the pen once hailed as the
                "world's most wanted" – retaining its distinctive streamlined silhouette and
                iconic hooded nib; yet is made for the future – this pen is hand assembled and
                made from durable precious resin, benefitting from Parker’s expertise and
                reputation for superior craftsmanship. From conception to assembly, the
                attention to detail is second to none. The cap is decorated with a
                complementary metallic jewel and each finish is inspired by heritage colours
                of the past, a tribute to the original Parker 51 range. Inspired by the past.
                Made for the future.
              </p>
            </div>

            {/* FEATURES */}
            <div>
              <h3 className="font-semibold text-[16px] mb-4 text-black">
                Features
              </h3>

              <ul className="list-disc ml-4 space-y-2 text-[#3f3f3f] text-[15px]">
                <li>
                  The Parker 51 Black CT features a streamlined silhouette and iconic hooded
                  stainless steel nib. Hand assembled using durable Black precious resin,
                  complemented by a stainless steel cap, palladium cap jewel and trims
                </li>

                <li>
                  Parker 51 is a modern take on the original icon once hailed as the world’s
                  most wanted first launched in 1941
                </li>

                <li>
                  Durable glossy black precious resin barrel and stainless steel cap with
                  palladium finish trims and the signature PARKER arrow clip
                </li>

                <li>
                  Featuring a unique hooded stainless steel nib delivering a writing
                  experience that is both reliable and personal
                </li>

                <li>
                  A distinctive streamlined silhouette with a seamless transition from
                  barrel to nib, benefitting from Parker’s expertise for superior craftsmanship
                </li>

                <li>
                  A unique yet sophisticated gift, your Parker 51 fountain pen is presented
                  in a premium PARKER gift box with a long black QUINK ink cartridge
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      {/* RELATED */}
      <section className="py-12 px-6 md:px-16">
        <h3 className="text-center text-[#7a2e2e] text-[20px] mb-8 text-sm font-semibold">
          You May Also Like
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          {relatedProducts.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`}>
              <div className="border border-[#b76e6e] rounded-xl p-4 text-center hover:shadow-md cursor-pointer">

                <img src={p.image} alt={p.name} className="h-[120px] mx-auto mb-3" />

                <p className="text-[13px] font-semibold text-black leading-tight mb-1">
                  {p.name}
                </p>

                <p className="text-[#c6a55c] text-xs">{p.price}</p>

                <div className="flex justify-center gap-1 mt-2">
                  {p.colors.map((c) => (
                    <span
                      key={c}
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}