import { Link } from "react-router-dom";

export default function Message() {
  return (
    <div className=" flex justify-center">
      <div className=" w-[1200px] m-[50px] ">
        <span className=" font-light text-[13px] text-[#555]">
          <Link to="/messages">MESSAGES</Link> &gt; OKOSA LEO &gt;
        </span>
        <div className=" my-[30px] mx-0 p-[50px] flex flex-col gap-5 h-[500px] overflow-scroll overflow-x-hidden">
          <div className=" flex gap-5 max-w-[600px] text-[18px]">
            <img src="/Images/leo.jfif" alt="" className="w-[40px] h-[40px] rounded-[50%] object-cover"/>
            <p className=" p-5 bg-[lightgray] rounded-tl-[0px] rounded-[20px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, laboriosam enim assumenda provident facilis tempore aut necessitatibus quis commodi eaque illo ducimus distinctio ipsa, ullam porro. Asperiores enim debitis omnis?</p>
          </div>
        </div>
        <div className="write">
          <textarea name="" id="" placeholder="write a message" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}
