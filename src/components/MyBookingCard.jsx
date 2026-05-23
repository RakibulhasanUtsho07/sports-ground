import Image from 'next/image'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { HiOutlineCalendar, HiOutlineClock, HiOutlineUser, HiOutlineTag } from 'react-icons/hi';
import { BookingDialog } from './DeleteDialog';

function MyBookingCard({ ground }) {
  const { image_url,facility_type, userName,duration, name, location, totalPrice, price_per_hour,departureDate,userId } = ground
  console.log(name, "ground")
  return (
    <div className="max-w-5xl mx-auto mt-6 px-4">
            {/* Main Booking Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col md:flex-row gap-6 items-stretch">
                
                {/* Left Side: Ground Image with Tag */}
                <div className="relative w-full md:w-[260px] h-[180px] md:h-auto min-h-[160px] rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                    <Image 
                        className="object-cover" 
                        src={ground?.image_url || "/placeholder-turf.jpg"} 
                        fill
                        sizes="(max-w-7xl) 300px"
                        alt={ground?.name || "Ground Image"} 
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-purple-700 font-bold text-[11px] px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm border border-purple-100">
                        {facility_type || "Sports"}
                    </span>
                </div>

                {/* Center Side: Booking Core Details */}
                <div className="flex-1 flex flex-col justify-between space-y-4 md:space-y-0">
                    <div className="space-y-1.5">
                        {/* Title & Location */}
                        <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">{name}</h1>
                        <p className="text-slate-500 font-medium flex items-center gap-1.5 text-sm">
                            <CiLocationOn className="text-base text-emerald-500" />
                            <span>{location}</span>
                        </p>
                    </div>

                    {/* Meta Data Grid (Clean 2-Column Info Block) */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 bg-slate-50/80 border border-slate-100 p-3.5 rounded-2xl text-xs font-medium text-slate-600">
                        <div className="flex items-center gap-2">
                            <HiOutlineCalendar className="text-slate-400 text-sm" />
                            <span>Date: <strong className="text-slate-800">{departureDate}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HiOutlineClock className="text-slate-400 text-sm" />
                            <span>Duration: <strong className="text-slate-800">{duration} Hrs</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HiOutlineUser className="text-slate-400 text-sm" />
                            <span>Booked By: <strong className="text-slate-800 truncate max-w-[120px] inline-block align-bottom">{userName}</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HiOutlineTag className="text-slate-400 text-sm" />
                            <span>Rate: <strong className="text-slate-800">${price_per_hour}/hr</strong></span>
                        </div>
                    </div>

                    {/* Subtle User ID Footer */}
                    <div className="text-[11px] text-slate-400 pl-1 font-mono">
                        Booking ID: {userId || "N/A"}
                    </div>
                </div>

                {/* Right Side: Price Summary & Actions */}
                <div className="w-full md:w-44 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-stretch gap-4 flex-shrink-0">
                    {/* Price Content */}
                    <div className="text-left md:text-center space-y-0.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Paid</span>
                        <h2 className="text-2xl font-black text-purple-600">${totalPrice}</h2>
                    </div>

                    {/* Action Button */}
                    <BookingDialog></BookingDialog>
                </div>

            </div>
        </div>
  )
}

export default MyBookingCard
