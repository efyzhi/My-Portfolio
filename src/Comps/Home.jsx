import React from "react";
import "./Styles/Home.css"

const Home = () => {
  return (
    <>
      <div className="hero-bg">  </div>
    <div className="home-container" style={{backgroundImage: "url(../images/home-bg.jpg)"}} >
       <div className="home-text">
         <h1> HI! </h1>
         <p> I am Sunday Robert </p>
         <h2> A Frontend Engineer </h2>
       </div>
      <div className="home-image" >
       <img src="" alt="home image"/>
      </div>
    </div>
    </>
  )
}
export default Home