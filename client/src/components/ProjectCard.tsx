import { Link } from "react-router-dom";


export default function Displaycard({props}) {
  return (
    <Link to="/">
    <div className=" w-[252px] h-[300px] text-white rounded-md cursor-pointer overflow-hidden">
            <img src={props.img} alt="projectimages" className="w-full h-3/4 object-cover" />
           <div className="flex items-center gap-5 p-4">  
            <img src={props.ii} alt="" className=" w-10 h-10 rounded-full object-cover" />
            <div>
              <h2 className=" text-sm font-medium text-black font-Mont">{props.heading}</h2>
              <span className=" text-xs text-black font-Mont">{props.username}</span>
            </div>
           </div>
    </div>
    </Link>
  )
}