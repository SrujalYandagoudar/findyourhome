import React from "react";

export default function VirtualTour() {
  return (
    <section className="mt-16 px-4 md:px-16 lg:px-32" id="VirtualTour">
      
      {/* Heading */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <hr className="border border-[#83b638] w-10 hidden md:block" />
        <h1 className="text-xl md:text-3xl font-medium text-[#83b638] text-center">
          Virtual Tour
        </h1>
        <hr className="border border-[#83b638] w-10 hidden md:block" />
      </div>

      {/* Video Container */}
      <div className="w-full rounded-xl overflow-hidden shadow-2xl 
                      md:hover:scale-105 transition duration-500">
        
        {/* Aspect Ratio Wrapper */}
        <div className="relative w-full aspect-video">
          <iframe
            src="https://www.youtube.com/embed/FdMc-zgDPAE?si=c3ybZkqQ8xs3AMZN"
            title="Virtual Tour Video"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
