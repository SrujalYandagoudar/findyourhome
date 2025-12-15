"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#f6f6f6] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-6">

        {/* QR Code */}
        <div className="flex justify-center">
          <div className="bg-white p-3 rounded-lg shadow-md">
            <Image
              src="/Images/qr.png"
              alt="RERA QR Code"
              width={200} height={200}
              className="w-32 h-32"
            />
          </div>
        </div>

        {/* RERA Text */}
        <div className="text-sm text-gray-700 leading-relaxed">
          <p>
            Project Registered under Government of India RERA Act 2016 |
            <a
              href="https://www.maharera.maharashtra.gov.in"
              target="_blank"
              className="text-blue-600 ml-1 underline"
            >
              www.maharera.maharashtra.gov.in
            </a>
          </p>
          <p>
            Government RERA Authorised Advertiser: Homesfy Realty Ltd.
            Registration No.: A51900000136
          </p>
          <p>Project Registration No.: P52100051200</p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-600 max-w-4xl mx-auto leading-relaxed">
          <span className="text-lime-600 font-semibold">Disclaimer:</span>{" "}
          We’re an authorized marketing channel partner (Homesfy Realty Ltd).
          The provided content, images & videos are sourced from respective
          owners and are provided only for information purposes, it does not
          constitute an offer to buy any service. The price plans are subject
          to change without prior notice, and the properties mentioned are
          subject to availability. You can receive a call, SMS, or emails on
          contact details registered with us.
        </p>

        {/* Copyright */}
        <div className="text-sm text-gray-700">
          © Copyright |{" "}
          <a href="#" className="text-blue-600 underline">
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Floating Chat Button */}
      
    </footer>
  );
}
