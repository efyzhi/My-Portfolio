import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Layout from "./Comps/Layout"
import Home from "./Comps/Home"
import About from "./Comps/About"
import Contact from "./Comps/Contact"
import Service from "./Comps/Service"




export default function App() {
  return (
    <main className="container">
      <div className="container" >
      
      </div>
      <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Layout/>}>
         <Route index element={<Home/>} />
         <Route path="about" element={<About/>} />
          <Route path="service" element={<Service/>} />
          <Route path="contact" element={<Contact/>} />
          {/* <Route pat="*" element={<ErrorPage/>} /> */} 
        </Route>
      </Routes>
      </BrowserRouter>
    </main>
  )
}
