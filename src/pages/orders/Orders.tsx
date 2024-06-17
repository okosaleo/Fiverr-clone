import { Link } from "react-router-dom"

export default function Orders() {
  return (
    <div className="flex justify-center">
    <div className=" w-[1300px] py-[50px] px-[0px]">
      <div className="flex items-center justify-between">
        <h1 className="font-Mont">Gigs</h1>
        <Link to="/add">
        <button className="bg-[#1dbf73] text-white font-medium border-none p-[10px] cursor-pointer">Add New Gig</button>
        </Link>
      </div>
      <table className=" w-full">
        <tr>
          <th className="text-left">Image</th>
          <th className="text-left">Title</th>
          <th className="text-left">Price</th>
          <th className="text-left">Orders</th>
          <th className="text-left">Action</th>
        </tr>
        <tr className=" h-[50px] bg-[#16864e50]">
          <td>
            <img src="/Images/16.jpg" alt="" className="w-[50px] h-[20px] object-cover"/>
          </td>
          <td>Gig1</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img src="/Images/delete.png" alt=""  className=" w-[20px] cursor-pointer"/>
          </td>
        </tr>
        <tr className=" h-[50px] ">
          <td>
            <img src="/Images/16.jpg" alt="" className="w-[50px] h-[20px] object-cover"/>
          </td>
          <td>Gig1</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img src="/Images/delete.png" alt="" className=" w-[20px] cursor-pointer"/>
          </td>
        </tr>
        <tr className=" h-[50px] bg-[#16864e50]">
          <td>
            <img src="/Images/16.jpg" alt="" className="w-[50px] h-[20px] object-cover"/>
          </td>
          <td>Gig1</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img src="/Images/delete.png" alt=""  className=" w-[20px] cursor-pointer"/>
          </td>
        </tr>
        <tr className=" h-[50px]">
          <td>
            <img src="/Images/16.jpg" alt="" className="w-[50px] h-[20px] object-cover"/>
          </td>
          <td>Gig1</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img src="/Images/delete.png" alt=""  className=" w-[20px] cursor-pointer"/>
          </td>
        </tr>
        <tr className=" h-[50px] bg-[#16864e50]">
          <td>
            <img src="/Images/16.jpg" alt="" className="w-[50px] h-[20px] object-cover"/>
          </td>
          <td>Gig1</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img src="/Images/delete.png" alt=""  className=" w-[20px] cursor-pointer"/>
          </td>
        </tr>
        <tr className=" h-[50px]">
          <td>
            <img src="/Images/16.jpg" alt="" className="w-[50px] h-[20px] object-cover"/>
          </td>
          <td>Gig1</td>
          <td>88</td>
          <td>123</td>
          <td>
            <img src="/Images/delete.png" alt=""  className=" w-[20px] cursor-pointer"/>
          </td>
        </tr>
      </table>
    </div>
  </div>
  )
}
