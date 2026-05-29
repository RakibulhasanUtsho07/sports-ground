import ManageFacility from '@/components/ManageFacility'
import { getGrounds } from '@/lib/data/data'
import React from 'react'

async function ManageGround({params}) {
  
  const manageGround =await getGrounds()
  console.log( manageGround)
  return (
    <div className='mt-15  md:w-full lg:container mx-auto'>
            <h3 className='text-3xl font-bold'>Manage All Facilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ">
    
              {
                manageGround.map((ground, ind)=>{
                return(
                  <ManageFacility key={ind} ground={ground}>
    
                  </ManageFacility>
                )
                })
              }
            </div>
        </div>
      
  )
}

export default ManageGround