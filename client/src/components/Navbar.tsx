import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import newRequest from "../utils/newRequests"


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

        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        const handleLogout = async () => {
            try {
                await newRequest.post("/auth/logout")
                localStorage.setItem("currentUser", null);
                navigate("/")
            } catch(err) {
                console.log(err)
            }
        }

        const navigate = useNavigate()

  return (
    <div className={`flex items-center flex-col transition-all ease-linear delay-500 sticky top-0 z-50 ${active || pathname !=="/" ? 'bg-white' : 'bg-[#1dbf73]'}`}>
        <div className="flex w-4/5 justify-between py-5 px-0">
            <div className={`text-4xl font-bold transition-all ease-linear delay-500 ${active || pathname !=="/" ? 'text-black' : 'text-white'}`}>
                <Link to="/">
                <span>fiverr</span>
                </Link>
                <span className="text-[#1dbf73]">.</span>
            </div>
            <div className={`flex items-center gap-6 font-medium cursor-pointer transition-all ease-linear delay-500 ${active || pathname !=="/" ? 'text-black' : 'text-white'}`}>
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser && <Link to="/login">Sign In</Link>}
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                {!currentUser && <Link to="/register" className={`py-2 px-5 rounded-md cursor-pointer bg-transparent border hover:bg-[#1dbf73] hover:border-[#1dbf73] ${active || pathname !=="/" ? 'text-black border-black' : 'text-white'}`}>Join</Link>}
                {currentUser && (
                    <div className="flex items-center gap-3 relative" onClick={()=>setOpen(!open)}>
                        <img src={currentUser.img || "/Images/noavatar.jpg"} alt="" className="w-8 h-8 rounded-full object-cover" />
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
                            <Link to="/" onClick={handleLogout}>Logout</Link>
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
