import { useEffect, useState } from "react"
import leo from "../assets/leo.jfif"
import { Link, useLocation } from "react-router-dom"


export default function Navbar() {
    const [active,setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const {pathname} = useLocation()

    const isActive = ()=>(
        window.scrollY > 0 ? setActive(true) : setActive(false)
    )
    useEffect(()=>{
        window.addEventListener("scroll", isActive);

        return ()=>(
            window.removeEventListener("scroll", isActive)
        )
        }, [])

        const currentUser= {
            id:1,
            username:"Okosa Leonard",
            isSeller:true
        }
  return (
    <div className={`flex items-center flex-col transition-all ease-linear delay-500 sticky top-0 z-50 ${active || pathname !=="/" ? 'bg-white' : 'bg-green-800'}`}>
        <div className="flex w-4/5 justify-between py-5 px-0">
            <div className={`text-4xl font-bold transition-all ease-linear delay-500 ${active || pathname !=="/" ? 'text-black' : 'text-white'}`}>
                <Link to="/">
                <span>fiverr</span>
                </Link>
                <span className="text-green-600">.</span>
            </div>
            <div className={`flex items-center gap-6 font-medium cursor-pointer transition-all ease-linear delay-500 ${active || pathname !=="/" ? 'text-black' : 'text-white'}`}>
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign In</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                {!currentUser && <button className={`py-2 px-5 rounded-md cursor-pointer bg-transparent border hover:bg-green-600 hover:border-green-600 ${active || pathname !=="/" ? 'text-black border-black' : 'text-white'}`}>Join</button>}
                {currentUser && (
                    <div className="flex items-center gap-3 relative" onClick={()=>setOpen(!open)}>
                        <img src={leo} alt="" className="w-8 h-8 rounded-full object-cover" />
                        <span>{currentUser?.username}</span>
                        {open && <div className="absolute top-12 bg-white p-5 right-0 border rounded-lg border-gray-400 flex flex-col gap-2 text-gray-600 w-48 font-medium">
                        {currentUser?.isSeller && (
                            <>
                            <Link to="/mygigs">Gigs</Link>
                            <Link to="/add">Add New Gig</Link>
                            </>
                        )}
                            <Link to="/orders">Orders</Link>
                            <Link to="/messages">Messages</Link>
                            <Link to="/">Logout</Link>
                            </div>}
                    </div>
                )}
            </div>   
        </div>
        {(active || pathname !=="/") && (
        <>
        <hr className="w-full border bg-gray-400" />
            <div className="w-4/5 py-3 px-0 flex justify-between font-light text-gray-400">
               <Link to="/">Graphics & Design</Link>
               <Link to="/">Video Animation</Link>
               <Link to="/">Writing & Translation</Link>
               <Link to="/">AI Services</Link>
               <Link to="/">Digital Marketing</Link>
               <Link to="/">Music & Audio</Link>
               <Link to="/">Programming and Tech</Link>
               <Link to="/">Business</Link>
               <Link to="/">LifeStyle</Link>
            </div>
            </>
)}
    </div>
  )
}
