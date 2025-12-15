import Image from 'next/image';
import React from 'react'

export default function Pricepage() {
  const data = [
    {
      imagePath: "/Images/floor.png",
      bhk: "2 BHK",
      area: "790 - 914 Sqft",
      price: "₹ 1.15 Cr* Onwards",
    },
    {
      imagePath: "/Images/floor.png",
      bhk: "3 BHK",
      area: "1110 Sqft",
      price: "₹ 1.64 Cr* Onwards",
    },
    {
      imagePath: "/Images/floor.png",
      bhk: "4 BHK",
      area: "1802 Sqft",
      price: "₹ 2.55 Cr* Onwards",
    },
  ];

  return (
    <div>
      <section className="my-6" id='Price'>
        <div className="">
          <div className="flex justify-center items-center gap-4">
            <hr className="border-0.5 border-[#83b638] w-10 max-md:hidden" />
            <h1 className="text-xl md:text-3xl font-medium text-[#83b638] text-center">Price Of Godrej Emerald Waters</h1>
            <hr className="border-0.5 border-[#83b638] w-10 max-md:hidden" />
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="border border-[#83b638] rounded-xl p-6 bg-white hover:scale-105 duration-700"
                >
                  {/* Image */}
                  <div className="relative bg-[#f7f4ef] rounded-md h-44 flex items-center justify-center">
                    <Image
                      src={item.imagePath}
                      width={200}
                      height={100}
                      alt="Floor Plan"
                      className="opacity-70"
                    />

                    {/* Zoom icon */}
                    <div className="absolute bg-white shadow-md rounded-lg p-3">
                      <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14zm0-4v-6m-3 3h6"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="mt-6 space-y-4">
                    <Row label="Typology" value={item.bhk} bold />
                    <Divider />
                    <Row label="Carpet Area" value={item.area} />
                    <Divider />
                    <Row label="Price" value={item.price} green />
                    <Divider />

                    {/* Button */}
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-gray-600">Price Sheet</span>
                      <button className="bg-[#83b638] text-white px-6 py-2 rounded-md font-semibold shadowBtn">
                        Get Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}


function Row({ label, value, bold, green }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-700">{label}</span>
      <span
        className={`${
          bold ? "font-bold" : ""
        } ${green ? "text-lime-600 font-semibold" : "text-black"}`}
      >
        {value}
      </span>
    </div>
  );
}

function Divider() {
  return <hr className="border-gray-300" />;
}
