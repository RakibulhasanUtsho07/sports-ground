import EmptyFacility from '@/components/EmptyAllFacilityPage'
import GroundCard from '@/components/GroundCard'
import { getGrounds } from '@/lib/data/data'
import React from 'react'

 async function AllFacilitiesPage({params}) {
  

    const grounds = await getGrounds()
  return (
    <div className='mt-15 container mx-auto'>
        {
          grounds > 0 ? <div>
          <h3 className='text-3xl font-bold'>All Facilities</h3>
        <div className="grid grid-cols-2 gap-10 mt-10 ">

          {
            grounds.map((ground, ind)=>{
            return(
              <GroundCard key={ind} ground={ground}>

              </GroundCard>
            )
            })
          }
        </div>
        </div>:
        <EmptyFacility></EmptyFacility>
        }
    </div>
  )
}

export default AllFacilitiesPage
