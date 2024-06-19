import { Link } from "react-router-dom"

export default function Message() {
  const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga animi tempore eum veritatis, sint itaque eveniet omnis dolore dolorem. Obcaecati voluptatum cumque expedita numquam iusto sequi placeat labore pariatur! "
  return (
    <div className="flex justify-center">
    <div className=" w-[1200px] py-[50px] px-[0px]">
      <div className="flex items-center justify-between">
        <h1 className="font-Mont">Messages</h1>
        <Link to="/add">
        <button className="bg-[#1dbf73] text-white font-medium border-none p-[10px] cursor-pointer">Add New Gig</button>
        </Link>
      </div>
      <table className=" w-full">
        <tr>
          <th className="text-left">Buyer</th>
          <th className="text-left">Last Message</th>
          <th className="text-left">Date</th>
          <th className="text-left">Action</th>
        </tr>
        <tr className=" h-[100px]">
        </tr>
        <tr className=" h-[100px]">
          <td className="p-[10px] font-Mont">Okosa Leonard</td>
          <td className="p-[10px]"><Link to="/message/123">{message.substring(0,100)}...</Link></td>
          <td className="p-[10px]">1 day ago</td>
          <td className="p-[10px]">
            <button className="bg-[#1dbf73] text-white font-medium border-none p-[10px] cursor-pointer">Mark as Read</button>
            </td>
        </tr>
        <tr className=" h-[100px] ">
          <td className="p-[10px] font-Mont">Okosa Leonard</td>
          <td className="p-[10px]"><Link to="/message/123">{message.substring(0,100)}...</Link></td>
          <td className="p-[10px]">1 day ago</td>
          <td className="p-[10px]">
            <button className="bg-[#1dbf73] text-white font-medium border-none p-[10px] cursor-pointer">Mark as Read</button>
            </td>
        </tr>
        <tr className=" h-[100px]">
          <td className="p-[10px] font-Mont">Okosa Leonard</td>
          <td className="p-[10px]"><Link to="/message/123">{message.substring(0,100)}...</Link></td>
          <td className="p-[10px]">1 day ago</td>  
        </tr>
        <tr className=" h-[100px]">
          <td className="p-[10px] font-Mont">Okosa Leonard</td>
          <td className="p-[10px]"><Link to="/message/123">{message.substring(0,100)}...</Link></td>
          <td className="p-[10px]">1 day ago</td>
        </tr>
        <tr className=" h-[100px]">
          <td className="p-[10px] font-Mont">Okosa Leonard</td>
          <td className="p-[10px]"><Link to="/message/123">{message.substring(0,100)}...</Link></td>
          <td className="p-[10px]">1 day ago</td>
        </tr>
      </table>
    </div>
  </div>
  )
}
