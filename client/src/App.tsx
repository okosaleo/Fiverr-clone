import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home/Home';
import Add from './pages/add/Add';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gigs/Gigs';
import MyGigs from './pages/myGigs/MyGigs';
import Login from './pages/login/Login';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import Register from './pages/register/Register';
import Orders from './pages/orders/Orders';



function App() {

  const Layout = ()=>{
    return (
      <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/gig",
          element: <Gig/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/mygigs",
          element: <MyGigs/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/message",
          element: <Message/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/orders",
          element: <Orders/>
        },
        {
          path: "/register",
          element: <Register/>
        }
      ]
    },
  ]);

  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App
