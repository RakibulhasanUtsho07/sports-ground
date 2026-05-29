import React from 'react'

function SearchBar() {
    return (
        <div>
            <div className="relative w-[400px] md:flex-grow">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-emerald-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z" />
                    </svg>
                </span>
                <input
                    type="text"
                    placeholder="Search fields, stadiums, or sports..."
                    className="w-full h-12 pl-12 pr-4 bg-[#0f172a]/80 text-sm font-medium text-slate-200 placeholder-slate-500 rounded-xl md:rounded-2xl border border-slate-700/50 focus:border-emerald-500 focus:outline-none transition-all shadow-inner"
                />
            </div>
        </div>
    )
}

export default SearchBar
