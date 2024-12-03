import { createBrowserRouter, Outlet } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Booking from "./components/Booking"
import BusList from "./components/BusList"
import About from "./components/About"

const App = () => {
    return (
        <div className="">
          <Header />
          <Outlet />
          <Footer />
        </div>
    )
  }

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/buses",
        element: <BusList />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ] 
  }
])