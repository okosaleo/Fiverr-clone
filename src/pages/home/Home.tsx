import Featured from "../../components/Featured";
import Sliderr from "../../components/Sliderr";
import TrustedBy from "../../components/TrustedBy";
import {cards} from "../../data"
import Displaycard from "../../components/Displaycard";
import {projects} from "../../project"
import ProjectCard from "../../components/ProjectCard"
import vid from "../../assets/cocacola vid.mp4"


export default function Home() {
  return (
    <div>
      <Featured/>
      <TrustedBy/>
      <Sliderr>
      {cards.map(card=>(
        <Displaycard props={card} key={card.id}/>
      ))}
      </Sliderr>
      <div className=" bg-green-100 flex justify-center items-center py-[100px] px-0 flex-col">
        <div className="w-[1200px] flex items-center gap-[152px] ">
          <div className=" flex flex-col gap-2 first:flex-[2] last:flex-[3]">
            <h1 className=" font-Mont text-3xl font-medium mb-[10px]">A whole world of freelance talent at your fingertips</h1>
            <div className=" flex items-center gap-[10px] font-medium text-lg">
              <img src="./Images/check.png" alt="checkmark" className="w-[24px] h-[24px]" />
              The best for every budget
            </div>
            <p className=" text-lg font-light text-gray-800">Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="flex items-center gap-[10px] font-medium text-lg">
              <img src="./Images/check.png" alt="checkmark" className="w-[24px] h-[24px]" />
              The best for every budget
            </div>
            <p className="text-lg font-light text-gray-800">Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="flex items-center gap-[10px] font-medium text-lg">
              <img src="./Images/check.png" alt="checkmark" className="w-[24px] h-[24px]" />
              The best for every budget
            </div>
            <p className="text-lg font-light text-gray-800">Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item flex flex-col gap-4 first:flex-[2] last:flex-[3]">
            <video src={vid} className="w-[720px]" autoPlay loop muted />
          </div>
        </div>
      </div>
      <div className=" bg-indigo-950 flex justify-center items-center py-[50px] px-0 flex-col">
        <div className="w-[1200px] flex items-center gap-[200px]">
          <div className="flex flex-col gap-2 first:flex-[2] last:flex-[3]">
            <h1 className="text-white font-Mont text-3xl mb-3">fiverr business</h1>
            <h1 className="text-white font-Mont text-3xl">A business solution designed for teams</h1>
            <p className="text-white mb-5 text-lg font-light ">
              Upgrade to a curated experience packed with tools and benefits, dedicated to business.
            </p>
            <div className=" text-white font-light text-sm flex items-center gap-[10px]">
              <img src="./Images/check.png" alt="" />
              Connect to freelancers with proven business experience.
            </div>
            <div className=" text-white font-light text-sm flex items-center gap-[10px]">
              <img src="./Images/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager.
            </div>
            <div className=" text-white font-light text-sm flex items-center gap-[10px]">
              <img src="./Images/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace.
            </div>
            <button className=" bg-green-400 text-white py-3 px-5 rounded-md text-base cursor-pointer mt-5 border-none w-max">Explore Fiverr Business</button>
          </div>
          <div className="item flex flex-col gap-4 first:flex-[2] last:flex-[3]">
            <img src="/Images/next.png" alt="" className="w-full"/>
          </div>
        </div>
      </div>
      <Sliderr>
      {projects.map(card=>(
        <ProjectCard props={card} key={card.id}/>
      ))}
      </Sliderr>
    </div>
  )
}
