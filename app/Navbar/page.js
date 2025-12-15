'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="border-b border-[#83b638] sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center px-4 md:px-10 py-2">

        {/* Logo */}
        <Image src="/Images/logo.png" alt="logo" width={200} height={80} />

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6 max-xl:gap-4 text-sm font-medium">
            <li><Link href="#Home">Home</Link></li>
            <li><Link href="#Amenities">Amenities</Link></li>
            <li><Link href="#Price">Pricing</Link></li>
            <li><Link href="#Siteplan">Floor Plan</Link></li>
            <li><Link href="#Gallery">Gallery</Link></li>
            <li><Link href="#Location">Location</Link></li>
            <li><Link href="#VirtualTour">Virtual Site Visit</Link></li>
            <li><Link href="#About">Brochure</Link></li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4">
          <button className="bg-[#fafafa] flex items-center gap-2 px-6 py-2 rounded-sm hover:-mt-1 duration-300">
            <Image src="/Images/phone.png" alt="phone" width={15} height={15} />
            <span className="font-semibold">Contact</span>
          </button>

          <button className="bg-[#25D366] text-white flex items-center gap-2 px-4 py-2 rounded-sm hover:-mt-1 duration-300">
            <Image src="/Images/whatsapp.png" alt="whatsapp" width={18} height={18} />
            <span className="font-semibold">WhatsApp</span>
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#83b638] px-6 py-4 animate-slideDown">
          <ul className="flex flex-col items-center gap-4 text-sm font-medium">
            <li><Link href="#Home" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="#Amenities" onClick={() => setIsOpen(false)}>Amenities</Link></li>
            <li><Link href="#Price" onClick={() => setIsOpen(false)}>Pricing</Link></li>
            <li><Link href="#Siteplan" onClick={() => setIsOpen(false)}>Floor Plan</Link></li>
            <li><Link href="#Gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link href="#Location" onClick={() => setIsOpen(false)}>Location</Link></li>
            <li><Link href="#VirtualTour" onClick={() => setIsOpen(false)}>Virtual Site Visit</Link></li>
            <li><Link href="#About" onClick={() => setIsOpen(false)}>Brochure</Link></li>
          </ul>

        
        </div>
      )}
    </section>
  )
}
