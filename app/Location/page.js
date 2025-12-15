"use client";
import React, { useState } from "react";

const DATA = [
  {
    title: "Connectivity",
    items: [
      { name: "Old Pune Mumbai Highway", value: "1 km" },
      { name: "Sant Tukaram Metro Station", value: "2 mins" },
      { name: "Nashik Phata", value: "5 mins" },
    ],
  },
  {
    title: "Education Hub",
    items: [
      { name: "DY Patil College", value: "10 mins" },
      { name: "PCCOE", value: "12 mins" },
    ],
  },
  {
    title: "Hospital",
    items: [
      { name: "Sterling Hospital", value: "8 mins" },
      { name: "Lokmanya Hospital", value: "10 mins" },
    ],
  },
  {
    title: "Shopping / Mall",
    items: [
      { name: "Elpro City Square", value: "12 mins" },
      { name: "Premier Plaza Mall", value: "15 mins" },
    ],
  },
  {
    title: "Tech Park",
    items: [
      { name: "MIDC Bhosari", value: "10 mins" },
      { name: "Hinjewadi IT Park", value: "30 mins" },
    ],
  },
];

export default function Location() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="my-10" id="Location">
      {/* Heading */}
      <div className="flex justify-center items-center gap-3 px-4">
        <hr className="border border-[#83b638] w-8 md:w-12 max-md:hidden" />
        <h1 className="text-xl md:text-3xl font-medium text-[#83b638] text-center">
          Location Advantages – Godrej Emerald Waters
        </h1>
        <hr className="border border-[#83b638] w-8 md:w-12 max-md:hidden" />
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6 mt-10 px-4 md:px-20 lg:px-32">
        
        {/* Map */}
        <div className="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61094.96076262094!2d74.542900256117!3d16.854360335878376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10c8187f060eb%3A0x37911f53cdc1ddb3!2sSangli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1765708579230!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {DATA.map((section, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-[#83b638] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full flex items-center justify-between px-4 md:px-5 py-3 md:py-4 font-medium transition
                  ${isOpen ? "bg-[#83b638] text-white" : "bg-white text-black"}`}
                >
                  <span className="text-sm md:text-base">
                    {section.title}
                  </span>

                  <svg
                    className={`w-5 h-5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="bg-white px-4 md:px-5 py-4 space-y-3">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-sm md:text-base"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-3 h-3 border border-black rounded-full"></span>
                          <span>{item.name}</span>
                        </div>
                        <span className="bg-lime-100 text-lime-700 px-3 py-1 rounded-md text-xs md:text-sm font-medium">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* CTA */}
          <div className="pt-6">
            <button className="bg-[#83b638] w-full text-white py-3 font-semibold rounded-sm shadowBtn hover:opacity-90 transition">
              Request Location Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
