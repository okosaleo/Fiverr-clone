import { useState, ChangeEvent } from "react"
import newRequest from "../../utils/newRequests";
import upload from "../../utils/upload";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const [file, setFile] = useState(null)
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  })

 const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
    setUser((prev)=> {
      return {...prev, [e.target.name]: e.target.value};
    });
  }
  const handleSeller = (e: ChangeEvent<HTMLInputElement>)=> {
    setUser((prev)=> {
      return {...prev, isSeller: e.target.checked};
    });
  }
  const handleSubmit = async (e)=> {
    e.preventDefault()
    const url = await upload(file)
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img:url
      });
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=" flex items-center justify-center">
      <form 
      onSubmit={handleSubmit}
      className="w-[960px] py-[100px] px-0 flex gap-[120px]">
        <div className="flex-1 flex flex-col gap-[10px] justify-between">
          <h1 className="font-Mont text-[gray] mb-5 ">Create a new account</h1>
          <label htmlFor="" className=" text-[gray] text-[18px]">Username</label>
          <input
          className=" p-5 border border-[rgb(216_214_214)]"
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label htmlFor=""  className=" text-[gray] text-[18px]">Email</label>
          <input
          className=" p-5 border border-[rgb(216_214_214)]"
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
           
          />
          <label htmlFor=""  className=" text-[gray] text-[18px]">Password</label>
          <input name="password" type="password"  className=" p-5 border border-[rgb(216_214_214)]" onChange={handleChange}/>
          <label htmlFor="" className=" text-[gray] text-[18px]">Profile Picture</label>
          <input type="file" 
          onChange={(e) => setFile(e.target.files[0])}
          className=" p-5 border border-[rgb(216_214_214)]" />
          <label htmlFor=""  className=" text-[gray] text-[18px]">Country</label>
          <input
          className=" p-5 border border-[rgb(216_214_214)]"
            name="country"
            type="text"
            placeholder="Usa"
            onChange={handleChange} />
          <button type="submit" className="border-none p-5 text-white font-medium text-[18px] bg-[#1dbf73] cursor-pointer">Register</button>
        </div>
        <div className="flex-1 flex flex-col gap-[10px] justify-between">
          <h1>I want to become a seller</h1>
          <div className=" flex items-center gap-[10px]">
            <label htmlFor=""  className=" text-[gray] text-[18px]">Activate the seller account</label>
            <label className=" relative inline-block w-[50px] h-[24px]">
              <input type="checkbox" className=" appearance-none peer" onChange={handleSeller} />
              <span className=" w-16 h-10 flex items-centerflex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md peer-checked:bg-green-400 duration-300 ease-in-out after:duration-300 peer-checked:after:translate-x-6"></span>
            </label>
          </div>
          <label htmlFor=""  className=" text-[gray] text-[18px]">Phone Number</label>
          <input
          className=" p-5 border border-[rgb(216_214_214)]"
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor=""  className=" text-[gray] text-[18px]">Description</label>
          <textarea
            className=" p-5 border border-[rgb(216_214_214)]"
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols={30}
            rows={10}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  )
}
