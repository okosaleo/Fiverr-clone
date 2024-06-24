import { Link } from "react-router-dom";


export default function Displaycard({props}) {
  return (
    <Link to="/gig/?cat=design">
    <div className=" w-[252px] h-[300px] text-white  rounded-md cursor-pointer relative bg-gradient-to-r from-gray-800 to-gray-200">
            <img src={props.img} alt="gigsimages" className="w-full h-full object-cover mix-blend-darken" />
            <span className=" font-Mont font-light absolute top-4 left-4">{props.desc}</span>
            <span className=" font-medium font-Mont absolute left-4 top-10 ">{props.title}</span>
    </div>
    </Link>
  )
}
