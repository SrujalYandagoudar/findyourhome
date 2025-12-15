import Image from "next/image";
import React from "react";

export default function Heropage() {
  return (
    <>
      {/* HERO */}
          <section id="Home" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] min-h-[calc(100vh-80px)]">

        {/* LEFT IMAGE */}
        <div className="relative h-[240px] sm:h-[320px] lg:h-auto">
          <Image
            src="/Images/hero.png"
            alt="Godrej Emerald Waters"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center px-6 lg:px-8 py-6 bg-white border-l border-[#83b638]">

          {/* Heading */}
          <div className="text-center space-y-2">
            <p className="text-sm">Introducing</p>

            <h1 className="text-[#83b638] text-2xl lg:text-3xl font-semibold">
              Godrej Emerald Waters
            </h1>

            <p className="text-sm">By Godrej Properties</p>
            <p className="text-sm">At Pimpri - Chinchwad, Pune</p>
          </div>

          {/* Highlights Box */}
          <div className="flex justify-center">
            <ul className="border border-[#83b638] rounded-lg list-disc px-12 py-3 my-4 space-y-2 text-sm">
            <li className="marker:text-[#83b638]">
              One Of PCMC’s Tallest Landmarks
            </li>
            <li className="marker:text-[#83b638]">
              Next To Sant Tukaram Nagar Metro
            </li>
            <li className="marker:text-[#83b638]">
              On Old Mumbai–Pune Highway
            </li>
          </ul>
          </div>

          {/* Pricing */}
          <div className="text-center space-y-2">
            <p className="text-sm">
              Luxurious 2, 3 & 4 BHK starting from
            </p>

            <h2 className="text-[#83b638] text-3xl font-semibold">
              ₹ 1.15 Cr* Onwards
            </h2>

            <div className="flex items-center gap-2 justify-center">
              <span className="h-px bg-[#83b638] w-10"></span>
              <span className="text-[#83b638] text-sm font-semibold">
                Get Luxury Walkthrough
              </span>
              <span className="h-px bg-[#83b638] w-10"></span>
            </div>

            <p className="text-sm">Tailored For You</p>
          </div>

          {/* FORM */}
          <div className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md outline-none"
            />

            <div className="flex gap-2">
              <select className="w-2/3 px-4 py-2 border rounded-md">
                <option>India (+91)</option>
              </select>
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 border rounded-md outline-none"
              />
            </div>

            <div className="flex items-start gap-2 text-xs text-gray-500">
              <input type="checkbox" defaultChecked />
              <p>
                I consent to the use of provided data in accordance with the{" "}
                <span className="text-[#83b638]">privacy policy</span>
              </p>
            </div>

            <button className="w-full bg-[#83b638] text-white py-3 font-semibold rounded-md hover:opacity-90 transition">
              Get It Now
            </button>
          </div>
        </div>
      </div>
    </section>

      {/* OVERVIEW */}
      <section className="my-12 px-4 md:px-20 lg:px-32">
        <div className="text-center">
          <div className="flex justify-center items-center gap-4">
            <hr className="border border-[#83b638] w-10 max-md:hidden" />
            <h1 className="text-2xl md:text-3xl font-medium text-[#83b638]">
              Overview
            </h1>
            <hr className="border border-[#83b638] w-10 max-md:hidden" />
          </div>

          <p className="text-justify py-6 leading-8">
           Godrej Emerald Waters brings contemporary living to Pimpri, Pune, with its meticulously designed 2, 3 & 4 BHK residences. Spread across 7.16 acres, Godrej Emerald Waters offers three elegant towers with 169 exclusive homes surrounded by 1.5 acres of podium greens and 0.5 acres of ground-level landscapes. At Godrej Emerald Waters, residents enjoy 20+ modern lifestyle amenities, including landscaped greens, a fruit orchard, barbecue zones, camping decks, and a warm bonfire corner. Every feature at Godrej Emerald Waters enhances daily life with comfort, leisure, and nature. Carefully curated communal spaces at Godrej Emerald Waters inspire interaction, celebrations, and shared moments, fostering a welcoming neighbourhood. From relaxed outdoor evenings to refreshing strolls, Godrej Emerald Waters creates an environment where families grow and communities flourish. With its immersive experiences, Godrej Emerald Waters redefines holistic urban living.
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium text-[#83b638] mb-4">
              Highlights Of Godrej Emerald Waters
            </h2>

            <ul className="space-y-2">
              <li className="marker:text-[#83b638]">
                Retail convenience with modern amenities
              </li>
              <li className="marker:text-[#83b638]">
                Vaastu-friendly homes with podium parking
              </li>
              <li className="marker:text-[#83b638]">
                Strategically located along the highway
              </li>
              <li className="marker:text-[#83b638]">
                Opposite Sant Tukaram Metro Station
              </li>
              <li className="marker:text-[#83b638]">
                Beside ICC Devi Gaurav Tech Park
              </li>
            </ul>

            <button className="mt-6 bg-[#83b638] glass-shine w-full sm:w-1/2 text-white py-3 font-semibold rounded-sm shadowBtn">
              Get it Now
            </button>
          </div>

          <div className="relative h-[250px] md:h-[350px]">
            <Image
              src="/Images/hero.png"
              alt="Project View"
              fill
              className="object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
