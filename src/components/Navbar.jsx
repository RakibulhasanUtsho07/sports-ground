"use client"
import Link from 'next/link'
import NavLink from './NavLink'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

function Navbar() {
    const { data: session } = authClient.useSession()
    const user = session?.user
    const router = useRouter()
    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login"); // router use korle
                },
            },
        });
    }
    const links = (
        <>
            <li>
                <NavLink href="/all-facilities" className="">
                    All Facilities
                </NavLink>
            </li>
            <li>
                <NavLink href="/my-bookings" className="">
                    My Bookings
                </NavLink>
            </li>
            <li>
                <NavLink href="/add-facility" className="">
                    Add Facility
                </NavLink>
            </li>
            <li>
                <NavLink href="/manage" className="">
                    Manage My Facilities
                </NavLink>
            </li>

        </>
    )

    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-sm px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost font-bold text-3xl text-green-500">
                        MatchDay
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {links}
                    </ul>
                </div>
                {
                    user ? <div className='navbar-end flex gap-2'>
                        <Link href={"/login"} onClick={handleLogout} className="">
                            <button className="btn bg-green-500 hover:bg-green-600 text-white border-none font-bold">logout</button>

                        </Link>
                        <div className='flex gap-2 ml-2'>
                            <div>
                                {user?.image ? (
                                    
                                    <Image
                                        className="rounded-full object-cover w-[50px] h-[50px]"
                                        src={user.image}
                                        width={50}
                                        height={50}
                                        alt={user?.name || "User"}
                                    />
                                ) : (
                                    
                                    <div className="w-[50px] h-[50px] rounded-full bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-bold text-xl flex items-center justify-center tracking-wider uppercase select-none">
                                        {user?.name ? user.name.charAt(0) : "U"}
                                    </div>
                                )}
                            </div>
                            <div >
                                <p className='font-semibold  '>{user?.name}</p>
                                <p className='text-xn text-gray-300'>{user?.email.slice(0, 12)}...</p>
                            </div>
                        </div>
                    </div> :
                        <Link href={"/login"} className="navbar-end">
                            <button className="btn bg-green-500 hover:bg-green-600 text-white border-none font-bold">Login</button>
                        </Link>
                }
            </div>
        </div>
    )
}

export default Navbar
