

export default function Add() {
  return (
    <div className=" flex justify-center">
      <div className="w-[1000px] py-[50px] px-[0] ">
        <h1 className=" text-[gray] font-light mb-[30px] text-[30px] font-Mont">Add New Gig</h1>
        <div className=" flex justify-between gap-[100px]">
          <div className="flex flex-col gap-[10px] justify-between">
            <label htmlFor="" className="text-[gray] text-[18px]">Title</label>
            <input type="text" placeholder="e.g.Put in gig text here " className="p-4 border border-[black] rounded-[3px]" />
            <label htmlFor="" className="text-[gray] text-[18px]">Category</label>
            <select name="Tech Services" id="web" className="p-4 border border-[black] rounded-[3px]">
              <option value="ui/ux">UI/UX</option>
              <option value="web development">Web Development</option>
              <option value="app development">App Development</option>
              <option value="animation">Animation</option>
            </select>
            <label htmlFor="" className="text-[gray] text-[18px]">Cover Image</label>
            <input type="file" className="p-4 border border-[black] rounded-[3px]" />
            <label htmlFor="" className="text-[gray] text-[18px]">Upload Images</label>
            <input type="file" multiple className="p-4 border border-[black] rounded-[3px] " />
            <label htmlFor="" className="text-[gray] text-[18px]">Description</label>
            <textarea name="" id="" cols={30} rows={16} placeholder="Brief description to introduce your sevice to customers" className="p-4 border border-[black] rounded-[3px] "></textarea>
            <button className="border-none p-4 bg-[#1dbf73] text-white font-medium text-[18px] cursor-pointer">Create</button>
          </div>
          <div className="flex flex-col gap-[10px] justify-between flex-1">
            <label htmlFor="" className="text-[gray] text-[18px]">Service Title</label>
            <input type="text" placeholder="e.g. One-Page web design" className="p-4 border border-[black] rounded-[3px] "/>
            <label htmlFor="" className="text-[gray] text-[18px]">Short Descrition</label>
            <textarea name="" id="" placeholder="Short description for your service" cols={30} rows={10} className="p-4 border border-[black] rounded-[3px] "></textarea>
            <label htmlFor="" className="text-[gray] text-[18px]">Delivery Timee e.g. 3 days</label>
            <input type="number" min={1} className="p-4 border border-[black] rounded-[3px] " />
            <label htmlFor="" className="text-[gray] text-[18px]">Revision Number</label>
            <input type="number" min={1} className="p-4 border border-[black] rounded-[3px] " />
            <label htmlFor="" className="text-[gray] text-[18px]">Add Features</label>
            <input type="text" placeholder="e.g. file uplaoding" className="p-4 border border-[black] rounded-[3px]" />
            <input type="text" placeholder="e.g. setting up a domain" className="p-4 border border-[black] rounded-[3px] " />
            <input type="text" placeholder="e.g. hosting" className="p-4 border border-[black] rounded-[3px] " />
            <input type="text" placeholder="e.g. app testing" className="p-4 border border-[black] rounded-[3px] " />
            <label htmlFor="" className="text-[gray] text-[18px]">Price</label>
            <input type="number" min={1} className="p-4 border border-[black] rounded-[3px] " />
          </div>
        </div>
      </div>
    </div>
  )
}

