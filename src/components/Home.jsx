import React from "react";
import backgroundImage from "../components/image/Bgimag.jpg";
import logo from "../components/image/logo.png";
import watchlogo from "../components/image/watchlogo.png"
import { useNavigate } from "react-router-dom";
import Darkmode from "./Darkmode";

const Home = () => {

  const navigate = useNavigate();

  const girlsection = () =>{ 
    let path = `/Girlsection`; 
    navigate(path);
  }

  const mansection = () =>{ 
    let path = `/Mansection`; 
    navigate(path);
  }


  const containerStyle = {
    position: "relative",
    height: "100vh",
    background: `url(${backgroundImage})`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    
  };

  return (
    <>
      <div style={containerStyle}>
      <img src={watchlogo} alt="Logo" className="image w-56 h-80 absolute top-36 left-36 md:order-first md:mb-4 md:max-w-full" />
          <div className="name-watch absolute text-4xl mr-45 dark:bg-white dark:text-black text-white top-48 mt-4 bg-black w-96 h-12 text-center rounded-lg ">VM-Watch collection</div>
          <div className="title-watch absolute text-2xl dark:text-black  text-yellow-100 mt-7 top-64 md:text-center">Waterproof Watches</div>
          <div className="subline-watch absolute text-xs dark:text-black text-green-200 top-80 mt-1 ml-5">PROTECT SUCCESSFULLY YOUR WATCH FROM WATER...</div>
          <img src={logo} alt="Logo" className="w-28 h-28 absolute top-5 right-5" />
          <div className="flex gap-5 mt-96">
          <button className="man bg-white rounded-lg p-1 hover:bg-yellow-400 text-orange-400 hover:text-black w-32 h-10 text-sm" onClick={mansection}>
          Man-section
          </button>
          <button className="woman  bg-white rounded-lg p-1 hover:bg-green-400 text-orange-400 hover:text-black w-32 h-10 text-sm" onClick={girlsection}>
          Woman-section
          </button>
          </div>
      </div>
      
    </>
  );
};

export default Home;
