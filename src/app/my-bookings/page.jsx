
import EmptyBookingPage from '@/components/EmptyBookingPage'
import MyBookingCard from '@/components/MyBookingCard'
import { auth } from '@/lib/auth'
import { bookingGrounds } from '@/lib/data/data'
import { headers } from 'next/headers'
import React from 'react'

async function MyBookingPage() {
   const {token} = await auth.api.getToken({
          headers: await headers()
      })
  const bookingGround = await bookingGrounds(token)
  console.log(bookingGround.length)
  console.log(bookingGround)
  return (
    <div >

      {
        bookingGround.length > 0 ? <div className='container mx-auto p-5 '>
          <h2 className='text-3xl font-bold mt-15 '>My Booking Facilities</h2>
          <div className='space-y-5'>
            {
              bookingGround.map((ground, ind) => {
                return (
                  <MyBookingCard key={ind} ground={ground}>

                  </MyBookingCard>
                )

              })
            }
          </div>

        </div>
          :<EmptyBookingPage></EmptyBookingPage>
          
      }
    </div>
  )
}

export default MyBookingPage
