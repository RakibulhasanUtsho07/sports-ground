
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

function GroundCard({ ground }) {
    console.log(ground, "single ground")
    return (
        <div className='space-y-4 shadow-md p-5 rounded-2xl'>
            <Image className=' h-70 mx-auto  w-full rounded-2xl' src={ground?.image_url} width={400} height={150} alt={ground?.name} />
            <div className='flex justify-between'>
                <div className='space-y-3'>
                    <h3 className='text-2xl  font-bold '>{ground.name}</h3>
                    <p className='text-xl text-gray-400'>{ground.location}</p>
                    <p className='text-xn font-semibold text-green-700'>{ground.facility_type}</p>
                </div>
                <Link 
    href={`/facilities-details/${ground?._id}`} 
    className="inline-flex whitespace-nowrap items-center justify-center gap-2 px-6 h-11 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-md shadow-emerald-600/10 hover:shadow-lg hover:shadow-emerald-600/20 active:scale-95 group"
>
    <span>Book Now</span>
    <GoArrowRight 
        size={20} 
        className="transition-transform duration-200 group-hover:translate-x-1" 
    />
</Link>

            </div>
        </div>
    )
}

export default GroundCard
