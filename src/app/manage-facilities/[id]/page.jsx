import ManageFacility from '@/components/ManageFacility'
import ManageGroundCard from '@/components/ManageGroundCard'
import { getGroundDetails } from '@/lib/data/data'
import React from 'react'

async function ManageGround({params}) {
  const {id} = await params
  const manageGround =await getGroundDetails(id)
  console.log("id", id)
  return (
    <div>
      <ManageGroundCard id={id} manageGround={manageGround} ></ManageGroundCard>
    </div>
  )
}

export default ManageGround
