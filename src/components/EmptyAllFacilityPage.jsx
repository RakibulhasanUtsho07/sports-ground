// src/components/EmptyFacility.jsx
import { IoFootballOutline } from 'react-icons/io5';
import { BiSearchAlt } from 'react-icons/bi';

export default function EmptyFacility({ onResetFilters }) {
    return (
        <div className="w-full max-w-xl mx-auto mt-12 px-4">
            {/* ড্যাশড বর্ডার সহ ইউনিক মডার্ন কার্ড */}
            <div className="relative bg-white/60 backdrop-blur-md border-2 border-dashed border-slate-200 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-6 transition-all duration-300">
                
                {/* ইউনিক আইকন কম্বিনেশন */}
                <div className="relative">
                    {/* মেইন গ্লাস সার্কেল */}
                    <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center rotate-12 border border-slate-200 shadow-sm text-slate-400">
                        <IoFootballOutline className="text-4xl animate-spin [animation-duration:10s]" />
                    </div>
                    {/* সার্চ গ্লাস ওভারলে আইকন */}
                    <span className="absolute -top-2 -right-2 bg-purple-600 text-white p-2 rounded-xl shadow-md border-2 border-white">
                        <BiSearchAlt className="text-xl" />
                    </span>
                </div>

                {/* টেক্সট কন্টেন্ট */}
                <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">
                        No Facilities Available
                    </h3>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto font-medium leading-relaxed">
                        We couldn't find any sports grounds or turfs matching your criteria. Try adjusting your filters or search query.
                    </p>
                </div>

                {/* কন্ডিশনাল রিসেট বাটন (যদি ফিল্টার ক্লিয়ার করার অপশন দিতে চান) */}
                {onResetFilters && (
                    <button
                        type="button"
                        onClick={onResetFilters}
                        className="h-11 px-5 bg-slate-900 hover:bg-slate-800 active:bg-black text-white font-bold text-xs rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
                    >
                        Clear All Filters
                    </button>
                )}
            </div>
        </div>
    );
}