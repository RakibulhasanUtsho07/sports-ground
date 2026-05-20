import GroundDetailsPage from '@/components/GroundDetailsPage'
import { getGroundDetails } from '@/lib/data/data'
import React from 'react'

async function FacilitiesDetailsPage({params}) {
    const {id} = await params
    console.log(id, "params id")
    const groundDetails = await getGroundDetails(id)
  return (
    <div>
       <GroundDetailsPage id={id} groundDetails={groundDetails}></GroundDetailsPage>
    </div>
  )
}

export default FacilitiesDetailsPage
