// ImageScroller.jsx
"use client"

import React, { useRef, useEffect, useState } from "react"

export default function ImageScroller2({
  images = [],
  cardWidth = 420,
  gap = 24,
  auto = true,
  interval = 3000,
  pauseOnHover = true,
  resumeAfter = 3000,
}) {
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // JS FIX: remove TypeScript types
  const autoplayTimer = useRef(null);
  const resumeTimer = useRef(null);
  const userInteracted = useRef(false);

  useEffect(() => {
    const sc = scrollerRef.current;
    if (!sc) return;

    const update = () => {
      setCanScrollLeft(sc.scrollLeft > 5);
      setCanScrollRight(sc.scrollLeft + sc.clientWidth < sc.scrollWidth - 5);
    };

    update();
    sc.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      sc.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [images.length, cardWidth, gap]);

  const scrollByCard = (dir = "right") => {
    const sc = scrollerRef.current;
    if (!sc) return;

    const delta = (cardWidth + gap) * (dir === "right" ? 1 : -1);
    sc.scrollBy({ left: delta, behavior: "smooth" });

    handleUserInteraction();
  };

  const autoplayTick = () => {
    const sc = scrollerRef.current;
    if (!sc) return;

    if (sc.scrollLeft + sc.clientWidth >= sc.scrollWidth - 5) {
      sc.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      sc.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
    }
  };

  const stopAutoplay = () => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
      autoplayTimer.current = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (!auto) return;

    autoplayTimer.current = setInterval(() => {
      if (userInteracted.current) return;
      autoplayTick();
    }, interval);
  };

  const handleUserInteraction = () => {
    userInteracted.current = true;
    stopAutoplay();

    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
    }

    resumeTimer.current = setTimeout(() => {
      userInteracted.current = false;
      startAutoplay();
    }, resumeAfter);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [auto, interval, cardWidth, gap, images.length]);

  const handleMouseEnter = () => {
    if (pauseOnHover) stopAutoplay();
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && !userInteracted.current) startAutoplay();
  };

  const handleTouchStart = () => {
    handleUserInteraction();
    if (pauseOnHover) stopAutoplay();
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") scrollByCard("right");
      if (e.key === "ArrowLeft") scrollByCard("left");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const noScrollbarStyle = { scrollbarWidth: "none" };

  return (
    <div className="w-full flex items-center justify-center gap-6 relative py-6">

      {/* LEFT BUTTON */}
      <button
        onClick={() => scrollByCard("left")}
        disabled={!canScrollLeft}
        className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md border border-black/10 
          ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* SCROLLER */}
      <div
        ref={scrollerRef}
        className="flex items-stretch overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onScroll={handleUserInteraction}
        style={{ gap: `${gap}px`, paddingBottom: "8px", ...noScrollbarStyle }}
      >
        <style>{`.no-scrollbar::-webkit-scrollbar{display:none;height:0}`}</style>

        <div className="flex items-stretch" style={{ gap: `${gap}px` }}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className="snap-center flex-shrink-0 relative rounded-xl overflow-hidden shadow-xl transition-transform duration-300"
              style={{
                width: `${cardWidth}px`,
                height: `${Math.round(cardWidth * 0.66)}px`,
              }}
            >
              <img
                src={img.src}
                alt={img.alt || img.caption || `image-${idx}`}
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
              />

              <div
                className="absolute bottom-0 left-0 right-0 h-28"
                style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.65))" }}
              />

              
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => scrollByCard("right")}
        disabled={!canScrollRight}
        className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md border border-black/10 
          ${canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

    </div>
  );
}
