import {useState} from "react"
import "./Styles/Contact.css"


const Contact = () => {
  return (
    <>
      <h1> CONTACT </h1>
    <main className="form-container">
      <div className="first-container"> 
      
      </div>
      
      <div className="second-container"> 
      <form>
        <ul className="flex"> 
     <li> <label htmlFor="name">Name</label>
        <input
          type="text"
          required 
          name="name"/> </li>
  
      <li>  <label> Email </label>
        <input
          type="text"
          required
          name="email"/>  </li>
      
     <li>  <label> Phone </label>
        <input
          type="number"
          name="number" />  </li>
        
       <li> <label>  Message </label>
        <textarea
          type="text"
          required
          name="message"/>  </li>
      
      <li> <button type="submit" className="submit-button" > Send Message</button> </li>
          </ul>
      </form>
        </div>
 
    </main>  
    
    </>
  )
}
export default Contact 