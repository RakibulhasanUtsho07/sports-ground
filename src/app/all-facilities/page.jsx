import EmptyFacility from '@/components/EmptyAllFacilityPage'
import FilterBar from '@/components/FilterBar'
import GroundCard from '@/components/GroundCard'
import SearchBar from '@/components/SearchBar'
import { auth } from '@/lib/auth'
import { getGrounds } from '@/lib/data/data'
import { headers } from 'next/headers'
import React from 'react'

 async function AllFacilitiesPage({params}) {
   
  

    const grounds = await getGrounds()
  return (
    <div className='mt-15 md:w-full lg:container mx-auto'>
        {
          grounds <= 0 ? 
        <EmptyFacility></EmptyFacility>:
        <div>
          <h3 className='text-3xl font-bold ml-5 lg:ml-0'>All Facilities</h3>
          <div className='mt-10 flex justify-between'>
            <SearchBar></SearchBar>
            <FilterBar></FilterBar>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ">

          {
            grounds.map((ground, ind)=>{
            return(
              <GroundCard key={ind} ground={ground}>

              </GroundCard>
            )
            })
          }
        </div>
        </div>
        }
    </div>
  )
}

export default AllFacilitiesPage
