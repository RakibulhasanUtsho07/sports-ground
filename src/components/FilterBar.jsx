import React from 'react'

function FilterBar() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">

                {/* ফ্যাসিলিটি টাইপ ফিল্টার */}
                <div className="relative w-full sm:w-44">
                    <select className="w-full h-12 px-4 bg-[#0f172a]/80 text-sm font-bold text-slate-300 rounded-xl md:rounded-2xl border border-slate-700/50 focus:border-emerald-500 focus:outline-none appearance-none cursor-pointer transition-all">
                        <option value="">All Sports</option>
                        <option value="football">Football</option>
                        <option value="cricket">Cricket</option>
                        <option value="badminton">Badminton</option>
                        <option value="futsal">Futsal</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </div>

                {/* লোকেশন ফিল্টার */}
                <div className="relative w-full sm:w-44">
                    <select className="w-full h-12 px-4 bg-[#0f172a]/80 text-sm font-bold text-slate-300 rounded-xl md:rounded-2xl border border-slate-700/50 focus:border-emerald-500 focus:outline-none appearance-none cursor-pointer transition-all">
                        <option value="">All Locations</option>
                        <option value="uttara">Uttara</option>
                        <option value="mirpur">Mirpur</option>
                        <option value="banani">Banani</option>
                        <option value="dhanmondi">Dhanmondi</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </div>

                {/* অ্যাকশন সার্চ বাটন */}
                <button
                    type="button"
                    className="w-full sm:w-auto h-12 px-6 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-xl md:rounded-2xl transition-all shadow-lg shadow-emerald-600/10 active:scale-95 cursor-pointer flex items-center justify-center gap-2 flex-shrink-0"
                >
                    <span>Find</span>
                </button>

            </div>
        </div>
    )
}

export default FilterBar
