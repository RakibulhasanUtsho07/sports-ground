
import MyBookingCard from '@/components/MyBookingCard'
import { bookingGrounds } from '@/lib/data/data'
import React from 'react'

async function MyBookingPage() {
  const bookingGround = await bookingGrounds()
  console.log(bookingGround)
  return (
    <div className='container mx-auto p-5 '>
      <h2 className='text-3xl font-bold mt-15 '>My Booking Facilities</h2>
      <div className='space-y-5'>
         {
          bookingGround.map((ground, ind)=>{
            return(
               <MyBookingCard key={ind} ground={ground}>

          </MyBookingCard>
            )

          })
         }
      </div>
    </div>
  )
}

export default MyBookingPage
