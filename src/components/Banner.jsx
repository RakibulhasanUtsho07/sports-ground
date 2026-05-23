import Image from 'next/image'
import React from 'react'
import banner from "@/assets/banner.png"
import { Button } from '@heroui/react'
import Link from 'next/link';
function Banner() {
  return (
    <section className="container mx-auto mt-10 mb-16 px-4 md:px-0">
      <div className="relative w-full h-[500px] md:h-[650px] rounded-2xl overflow-hidden shadow-2xl group">
        
        {/* Banner Image with subtle zoom effect */}
        <Image 
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
          src={banner} 
          fill
          priority
          alt="Sports Turf Banner"
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        {/* Text and Content Layout */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 max-w-2xl z-10 text-white">
          
          {/* Accent Badge */}
          <span className="inline-block bg-blue-600 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full w-fit mb-4 animate-pulse">
            Premium Turf Booking
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase">
            Your Next Level <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Ground Here
            </span>
          </h2>

          {/* Main Description */}
          <p className="mt-4 text-gray-200 text-base md:text-lg font-medium leading-relaxed drop-shadow-md">
            Don't just play—experience the game. Lock in your prime-time slot at the city's finest, all-weather sports turf. Seamless booking, professional lighting, and an unmatched atmosphere.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8  gap-4">
            <Link href={"/all-facilities"} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-lg shadow-blue-900/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Explore Now
            </Link>
            
          </div>

          {/* Secondary Info / Subtext */}
          <p className="mt-8 text-xs text-gray-400 max-w-md border-l-2 border-blue-500 pl-3 italic">
            *Open 24/7. Professional-grade turf with premium lighting and amenities.
          </p>
          
        </div>

        {/* Bottom Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>
    </section>
  )
}

export default Banner
