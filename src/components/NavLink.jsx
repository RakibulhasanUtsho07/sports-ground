"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

function NavLink({href, className, children}) {
    const pathName  = usePathname()
    const isActive = pathName === href 
  return (
    <Link href={href} className={`${isActive ? "bg-transparent focus:bg-transparent active:bg-transparent outline-none focus:outline-none border-b-3 border-green-500 text-green-500 rounded-none pb-2": ""} `}>
        {children}
    </Link>
  )
}

export default NavLink
