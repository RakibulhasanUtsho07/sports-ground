import Banner from "@/components/Banner";
import GroundCard from "@/components/GroundCard";

import Navbar from "@/components/Navbar";
import { auth } from "@/lib/auth";
import { getGrounds } from "@/lib/data/data";
import { headers } from "next/headers";
import Image from "next/image";

export default async function Home() {
 
  const grounds = await getGrounds()
  
  const topSixGrounds = grounds.slice(0, 6)
  

  return (
    <div className="container mx-auto mt-10">
      <Banner></Banner>
      <div className="space-y-5">
        <h2 className="text-3xl font-bold ">Our Facilities</h2>
        <div className="grid grid-cols-2 gap-10 ">

          {
            topSixGrounds.map((ground, ind)=>{
            return(
              <GroundCard key={ind} ground={ground}>

              </GroundCard>
            )
            })
          }
        </div>
      </div>
    </div>
  );
}
