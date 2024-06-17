

export default function Featured() {
  return (
    <div className="flex justify-center bg-green-800 text-white">
        <div className="w-4/5 flex items-center">
            <div className="flex flex-col gap-7 w-[650px]">
                <h1 className="text text-4xl font-Mont">Find the perfect <i className=" font-extralight">freelance</i> services for your business.</h1>
                <div className="flex items-center justify-between bg-white rounded-md">
                    <div className="flex items-center gap-2">
                        <img src="./Images/search.png" alt="" className="m-3 w-5 h-5" />
                        <input type="text" placeholder='Try "building mobile app"' className=" border-0 outline-none" />
                    </div>
                    <button className="w-[120px] h-[50px] border-0 bg-green-500">Search</button>
                </div>
                <div className="flex items-center font-Mont font-normal gap-2">
                    <span>Popular:</span>
                    <button className="text-white bg-transparent border border-white py-2 px-2 rounded-3xl text-sm cursor-pointer">Web Design</button>                
                    <button className="text-white bg-transparent border border-white py-2 px-2 rounded-3xl text-sm cursor-pointer">Wordpress</button>                
                    <button className="text-white bg-transparent border border-white py-2 px-2 rounded-3xl text-sm cursor-pointer">Logo Design</button>                
                    <button className="text-white bg-transparent border border-white py-2 px-2 rounded-3xl text-sm cursor-pointer">AI Services</button>                
                    </div>
            </div>
            <div className="right w-[650px] h-full pb-4 pl-7">
                <img src="./Images/heroimg.png" alt="HeroImage" className="h-full object-contain" />
            </div>

        </div>
    </div>
    
  )
}
