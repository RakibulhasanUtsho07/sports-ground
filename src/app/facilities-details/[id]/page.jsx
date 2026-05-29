import GroundDetailsPage from '@/components/GroundDetailsPage'
import { auth } from '@/lib/auth'
import { getGroundDetails } from '@/lib/data/data'
import { headers } from "next/headers"

import React from 'react'

async function FacilitiesDetailsPage({params}) {
     const {token} = await auth.api.getToken({
        headers: await headers()
    })
   console.log(token,"token")

    const {id} = await params
    console.log(id, "params id")
    
    const groundDetails = await getGroundDetails(id, token )
    console.log(groundDetails, "hello")
    
  return (
    <div>
       <GroundDetailsPage id={id} groundDetails={groundDetails}></GroundDetailsPage>
    </div>
  )
}

export default FacilitiesDetailsPage
