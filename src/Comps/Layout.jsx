import { useState, useEffect } from "react" 
import { FaBars } from 'react-icons/fa'
import { BiHomeAlt, BiUser} from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs"
import {Outlet, Link} from "react-router-dom";
import "./Styles/Layout.css"
const Layout = () => {
  const  [sideBar, setSideBar] = useState(false)
const handleSideBar = () => setSideBar(!sideBar)

  return (
    <main>
    <div className="container">
     <nav className="nav-menu">
       {/* <ul className={sideBar ? "sideBar active" : "sideBar"} onClick={handleSideBar}> */}
        
         <Link to="/"  smooth={true}
         spy={true}> <BiHomeAlt className="active"/> </Link>
        
        
          <Link to="/about"> <BiUser /> </Link>
        
        
          <Link to="/service"> <BsBriefcase /> </Link>
        
        
          <Link to="/contact"> <BsChatSquare /> </Link>
        
        {/* </ul> */}
      </nav>
        <button className="menu" onClick={handleSideBar} >   <FaBars />
        </button>
      <Outlet />
    </div>    
    </main>
  )
}
export default Layout