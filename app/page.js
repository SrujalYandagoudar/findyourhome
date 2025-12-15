"use client";
import useScrollReveal from "@/app/hooks/useScrollReveal";
import Navbar from './Navbar/page'
import Heropage from './HeroPage/page'
import Amenities from './Amenities/page'
import Pricepage from './Pricepage/page'
import Siteplan from './Siteplan/page'
import Gallery  from './Gallery/page'
import Location from './Location/page'
import VirtualTour from './VirtualTour/page'
import About from './About/page'
import Footer from './Footer/page'

export default function Page() {
  useScrollReveal();

  return (
    <main>
      <Navbar />

      <div className="reveal">
        <Heropage />
      </div>

      <div className="reveal">
        <Amenities />
      </div>

      <div className="reveal">
        <Pricepage />
      </div>

      <div className="reveal">
        <Siteplan />
      </div>

      <div className="reveal">
        <Gallery />
      </div>

      <div className="reveal">
        <Location />
      </div>

      <div className="reveal">
        <VirtualTour />
      </div>

      <div className="reveal">
        <About />
      </div>

      <Footer />
    </main>
  );
}
