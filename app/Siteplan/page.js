import Image from 'next/image';
import React from 'react'

export default function Siteplan() {

  const plans = [
    {
      title: "Master Plan",
      imagePath: "/Images/floor.png",
      button: "View Plan",
    },
    {
      title: "Floor Plan",
      imagePath: "/Images/floor.png",
      button: "Floor Plan",
      highlight: true,
    },
    {
      title: "Unit Plan",
      imagePath: "/Images/floor.png",
      button: "View Plan",
    },
  ];

  return (
    <>
      <section className="" id='Siteplan'>

        <div className="">
          <div className="flex justify-center items-center gap-4">
            <hr className="border-0.5 border-[#83b638] w-10 max-md:hidden" />
            <h1 className="text-xl md:text-3xl font-medium text-[#83b638] text-center">Site & Floor Plan Of Godrej Emerald Waters</h1>
            <hr className="border-0.5 border-[#83b638] w-10 max-md:hidden" />
          </div>

           <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`border border-[#83b638] rounded-xl p-4 transition-all ${
              plan.highlight ? "shadow-xl" : ""
            }`}
          >
            {/* Image Wrapper */}
            <div className="relative group rounded-lg overflow-hidden">
              {/* Image */}
              <Image
                src={plan.imagePath}
                alt={plan.title}
                width={200}
                height={200}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Center Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="bg-[#83b638] text-white px-6 py-3 rounded-md font-semibold
                  opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-300"
                >
                  {plan.button}
                </button>
              </div>
            </div>

            {/* Title */}
            <p className="text-center mt-4 font-semibold text-lg">
              {plan.title}
            </p>
          </div>
        ))}
      </div>

      {/* Download Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#83b638] shadowBtn text-white px-8 py-3 rounded-md font-semibold ">
          Download Floor Plan
        </button>
      </div>
    </div>
        </div>

      </section>

    </>
  )
}
