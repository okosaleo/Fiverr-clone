import { useState } from "react";
import newRequest from "../../utils/newRequests";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await newRequest.post('/auth/login', { username: username, password: password });
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      navigate('/');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      }
    }
  }
  return (
    <div className=" flex justify-center items-center mt-5">
      <form onSubmit={handleSubmit}
      className="flex flex-col border border-black p-[40px] w-[40%] h-[400px] justify-center items-center rounded-md bg-[#1dbf73] gap-2">
        <h1 className=" font-Mont font-semibold text-[43px] text-white">Sign in</h1>
        <label htmlFor="username" className="font-Mont ">Username</label>
        <input type="text" name="username" placeholder=" johndoe" onChange={e=> setUsername(e.target.value)} 
        className=" p-3 border-[2px] border-black rounded-md " />

        <label htmlFor="" className="font-Mont ">Password</label>
        <input type="password" name="password" 
        onChange={e=> setPassword(e.target.value)}
        className=" p-3 border-[2px] border-black rounded-md " />
        <button type="submit" className=" bg-white mt-6 w-[140px] h-8 font-Mont font-semibold rounded-md">Login</button>
        {error && error}
      </form>
    </div>
  );
}
