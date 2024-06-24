import { Link } from "react-router-dom";

export default function Message() {
  return (
    <div className=" flex justify-center">
      <div className=" w-[1200px] m-[50px] ">
        <span className=" font-light font-Mont text-[13px] text-[#555]">
          <Link to="/messages" className="font-Mont">MESSAGES</Link> &gt; OKOSA LEO &gt;
        </span>
        <div className=" my-[30px] mx-0 p-[50px] flex flex-col gap-5 h-[500px] overflow-scroll overflow-x-hidden">
          <div className=" flex gap-5 max-w-[600px] text-[18px]">
            <img src="/Images/leo.jfif" alt="" className="w-[40px] h-[40px] rounded-[50%] object-cover"/>
            <p className=" p-5 bg-[#b8b7b7] rounded-tl-[0px] rounded-[20px] font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, laboriosam enim assumenda provident facilis tempore aut necessitatibus quis commodi eaque illo ducimus distinctio ipsa, ullam porro. Asperiores enim debitis omnis?</p>
          </div>
          <div className=" flex gap-5 max-w-[600px] text-[18px] self-end flex-row-reverse">
            <img src="/Images/leo.jfif" alt="" className="w-[40px] h-[40px] rounded-[50%] object-cover"/>
            <p className=" p-5 bg-[royalblue] rounded-tr-[0px] rounded-[20px] font-light text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, laboriosam enim assumenda provident facilis tempore aut necessitatibus quis commodi eaque illo ducimus distinctio ipsa, ullam porro. Asperiores enim debitis omnis?</p>
          </div>
          <div className=" flex gap-5 max-w-[600px] text-[18px]">
            <img src="/Images/leo.jfif" alt="" className="w-[40px] h-[40px] rounded-[50%] object-cover"/>
            <p className=" p-5 bg-[#b8b7b7] rounded-tl-[0px] rounded-[20px] font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, laboriosam enim assumenda provident facilis tempore aut necessitatibus quis commodi eaque illo ducimus distinctio ipsa, ullam porro. Asperiores enim debitis omnis?</p>
          </div>
          <div className=" flex gap-5 max-w-[600px] text-[18px] self-end flex-row-reverse">
            <img src="/Images/leo.jfif" alt="" className="w-[40px] h-[40px] rounded-[50%] object-cover"/>
            <p className=" p-5 bg-[royalblue] rounded-tr-[0px] rounded-[20px] font-light text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, laboriosam enim assumenda provident facilis tempore aut necessitatibus quis commodi eaque illo ducimus distinctio ipsa, ullam porro. Asperiores enim debitis omnis?</p>
          </div>
        </div>
        <hr className="h-[0] border-[0.5px] border-[lightgray] mb-[20px]"/>
        <div className="flex items-center justify-between">
          <textarea name="" id="" placeholder=" write a message" cols={30} rows={10} className=" w-[80%] h-[100px] border-[lightgray] border rounded-[10px]"></textarea>
          <button className="bg-[#1dbf73] p-5 text-white font-medium borde rounded-[10px] cursor-pointer w-[100px]">Send</button>
        </div>
      </div>
    </div>
  )
}
