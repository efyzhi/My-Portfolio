import { useState, useEffect } from "react" 
import { FaBars } from 'react-icons/fa'
import {Outlet, Link} from "react-router-dom"
import "./Styles/Layout.css"
const Layout = () => {
  const  [sideBar, setSideBar] = useState(false)
const handleSideBar = () => setSideBar(!sideBar)

  return (
    <main>
    <div className="container">
     <nav className="nav-menu">
       <div className="logo"> <h1> Sun_Robert </h1> </div>
      
       <ul className={sideBar ? "sideBar active" : "sideBar"} onClick={handleSideBar}>
        <li>
         <Link to="/"> Home </Link>
        </li>
         <li>
          <Link to="/about"> About </Link>
         </li>
         <li>
          <Link to="/service"> Projects </Link>
         </li>
         <li>
          <Link to="/contact"> Contact </Link>
         </li>
        </ul>
      </nav>
        <button className="menu" onClick={handleSideBar} >   <FaBars />
        </button>
      <Outlet />
    </div>    
    </main>
  )
}
export default Layout