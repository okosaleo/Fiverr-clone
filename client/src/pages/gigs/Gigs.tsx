import { useState, useRef } from "react"
import GigCard from "../../components/GigCard"
import { useQuery } from "@tanstack/react-query"
import newRequest from "../../utils/newRequests"

export default function Gigs() {
  const [sort, setSort] = useState("sales")
  const [open, setOpen] = useState(false)
  const minRef = useRef();
  const maxRef = useRef();

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      newRequest.get("/gigs").then((res) => {
        return res.data
      })
  })

  const reSort = (type) =>{
    setSort(type)
    setOpen(false)
  }

  return (
    <div className="flex justify-center bg-gray-50 ">
      <div className="w-[1400px] px-8 py-2 flex flex-col gap-4">
        <span className=" font-semibold text-sm text-gray-400">FIVERR &gt; GRAPHICS & DESIGN &gt;</span>
        <h1 className=" text-2xl text-black font-bold">AI Artists</h1>
        <p className=" font-normal text-gray-400">Explore the boundaries of art and technology wiith fiverr's AI artists</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 font-medium text-gray-600">
            <span>Budget</span>
            <input className=" p-1 border border-gray-500 outline-none" type="text" placeholder="min" ref={minRef}/>
            <input className=" p-1 border border-gray-500 outline-none" type="text" placeholder="max" ref={maxRef} />
            <button className=" bg-green-600 text-white cursor-pointer border-0  py-[5px] px-3 rounded">Apply</button>
          </div>
          <div className=" flex items-center gap-3 relative">
            <span className="text-gray-400 font-bold">SortBy</span>
            <span className="text-black font-extrabold">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src="./Images/down.png" alt="" onClick={()=>setOpen(!open)}/> 
            { open && (<div className=" p-5 bg-white rounded border border-gray-400 absolute top-7 right-0 flex flex-col gap-5 text-gray-600">
            {sort === "sales" ? <span onClick={()=>reSort("createdAt")} className="font-extrabold">Newest</span>
            : <span onClick={()=>reSort("sales")} className=" font-extrabold">Best Selling</span> } 
            </div>)}
          </div>
        </div>
        <div className=" flex justify-between flex-wrap px-24">
          {isLoading ? "Loading" : error ? "Someething went wrong!" :
           data.map((gig) => 
            <GigCard key={gig.id} props={gig}/>
          )}
        </div>
      </div>
    </div>
  )
}
