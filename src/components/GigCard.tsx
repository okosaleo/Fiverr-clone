import { Link } from "react-router-dom"

export default function GigCard({props}) {
  return (
    <Link to="/gigs/123">
    <div className="w-[324px] h-[380px] border border-gray-300 mb-6">
        <img src={props.img} className="w-full h-3/6 object-cover" alt="" />
        <div className=" py-3 px-5 flex flex-col gap-4">
        <div className=" flex items-center gap-3">
            <img src={props.pp} className=" w-7 h-7 rounded-full" alt="" />
            <span>{props.username}</span>
        </div>
        <p className=" text-gray-900">{props.desc}</p>
        <div className="flex items-center gap-[5px]">
            <img src="./Images/star.png" className=" w-4 h-4" alt="" />
            <img src="./Images/star.png" className=" w-4 h-4" alt="" />
            <img src="./Images/star.png" className=" w-4 h-4" alt="" />
            <img src="./Images/star.png" className=" w-4 h-4" alt="" />
            <img src="./Images/star.png" className=" w-4 h-4" alt="" />
        </div>
        </div>
        <hr className="h-0 border-[0.5px] border-gray-300 "/>
        <div className=" py-3 px-5 flex items-center justify-between">
            <img src="./Images/heart.png" className=" w-4 h-4 cursor-pointer" alt="" />
            <div>
            <span className=" text-gray-400 text-xs">STARTING AT</span>
            <h2 className=" text-lg font-normal">${props.price}</h2>
            </div>
        </div>
    </div>
    </Link>
  )
}
