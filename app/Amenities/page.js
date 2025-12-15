import React from 'react'
import ImageScroller from '../Components/ImageScroller';



export default function Amenities() {
    const items = [
        { src: "/Images/hero.png", caption: "Garden", alt: "Garden" },
        { src: "/Images/hero.png", caption: "Garden View", alt: "Garden View" },
        { src: "/Images/hero.png", caption: "Fitness Center", alt: "Fitness" },
        { src: "/Images/hero.png", caption: "Swimming Pool", alt: "Pool" },
        { src: "/Images/hero.png", caption: "Lobby", alt: "Lobby" },
    ];

    return (
        <>
            <section className=" my-6" id='Amenities'>
                <div className="  p-8">
                    <div className="flex justify-center items-center gap-4">
                        <hr className="border-0.5 border-[#83b638] w-10 max-md:hidden" />
                        <h1 className="text-xl md:text-3xl font-medium text-[#83b638] text-center">Amenities of Godrej Emerald Waters</h1>
                        <hr className="border-0.5 border-[#83b638] w-10 max-md:hidden" />
                    </div>
                   
                    <ImageScroller images={items}
                        cardWidth={460}
                        gap={28}
                        auto={true}
                        interval={3000}
                        pauseOnHover={true}
                        resumeAfter={3000} />

                         <div className="flex justify-center items-center pt-6">
                            <button
                                className="bg-[#83b638] glass-shine  text-white px-10 py-3 font-semibold rounded-sm shadowBtn relative"
                            >
                                Download Amenities
                            </button>

                        </div>
                </div>
            </section>
        </>
    )
}
