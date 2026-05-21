import ManageFacility from '@/components/ManageFacility'
import { getGroundDetails } from '@/lib/data/data'
import React from 'react'

async function ManageGround({params}) {
  const {id} = await params
  const manageGround =await getGroundDetails(id)
  console.log("id", id)
  return (
    <div>
      <ManageFacility id={id } manageGround={manageGround}></ManageFacility>
    </div>
  )
}

export default ManageGround
