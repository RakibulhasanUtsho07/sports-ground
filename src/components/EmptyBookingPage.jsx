// src/components/EmptyBooking.jsx
import Link from 'next/link';
import { HiOutlineCalendar } from 'react-icons/hi';
import { IoFootballOutline } from 'react-icons/io5';

export default function EmptyBookingPage() {
    return (
        <div className="w-full container h-[900px] mx-auto mt-16 px-4 text-center">
            
            <div className="relative bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-6 flex flex-col items-center justify-center">
                
                
                <div className="relative w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center border border-purple-100 animate-bounce duration-1000">
                    <HiOutlineCalendar className="text-4xl text-purple-600" />
                   
                    <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1.5 rounded-xl border-2 border-white shadow-sm">
                        <IoFootballOutline className="text-lg" />
                    </span>
                </div>

                
                <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight">
                        No Bookings Found!
                    </h3>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto font-medium leading-relaxed">
                        You haven't booked any sports fields or turfs yet. Your next match is waiting for you!
                    </p>
                </div>

                
                <Link 
                    href="/all-facilities" // আপনার প্রজেক্টের গ্রাউন্ডস বা টার্ফ লিস্ট পেজের পাথ এখানে দিন
                    className="inline-flex items-center justify-center h-12 px-6 bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white font-bold text-sm rounded-2xl shadow-lg shadow-purple-600/10 hover:shadow-purple-600/20 transition-all duration-200 active:scale-95"
                >
                    Explore Turfs & Book Now
                </Link>
            </div>
        </div>
    );
}