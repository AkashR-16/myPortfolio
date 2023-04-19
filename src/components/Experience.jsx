import React from "react";


import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import c from "../assets/c.png";
import java from "../assets/java.png";
import github from "../assets/github.png";
import python from "../assets/python.png";
import cplusplus from "../assets/cplusplus.png";
import eclipse from "../assets/eclipse.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import sql from "../assets/sql.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";
import visualstudiocode from "../assets/visualstudiocode.png";
import aws from "../assets/aws.png";

const Experience = () => {

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-fit mt-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold">
          <sans class="bg-gradient-to-r
                from-cyan-500  to-orange-500 bg-[length:100%_4px] bg-no-repeat bg-bottom">
                    Experience
                   </sans>                  
          </p>
          <br />

          <p className="py-2">The technologies I've worked with</p>
          <br />
        </div>
        <hr
                style={{
                background: "lightblue",
                height: "3px",
                width:"800px",
                border: "none",
                }}
        />
        <br></br>

        <div className="w-full grid grid-cols-3 sm:grid-cols-8 gap-8 text-center py-2 px-10 sm:px-0">
          <p className="py-2">  Programming Languages  </p>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {python} alt="" className="w-8 mx-auto" />
              <p className="mt-4"> Python </p>
              </div>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {java} alt="" className="w-8 mx-auto" />
              <p className="mt-4"> Java </p>
              </div>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {c} alt="" className="w-8 mx-auto" />
              <p className="mt-4"> C </p>
              </div>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {cplusplus} alt="" className="w-8 mx-auto" />
              <p className="mt-4"> C++ </p>
              </div>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {javascript} alt="" className="w-8 mx-auto" />
              <p className="mt-4"> JavaScript </p>
              </div>
        </div>
        <br></br>
        <hr
                style={{
                background: "lightblue",
                height: "3px",
                width:"800px",
                border: "none",
                }}
        />
        <br></br>
        <div className="w-full grid grid-cols-3 sm:grid-cols-8 gap-8 text-center py-2 px-10 sm:px-0">
          <p className="py-2">IDE and Tooling</p>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {github} alt="" className="w-8 mx-auto" />
              <p className="mt-4"> Github </p>
              </div>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {visualstudiocode} alt="" className="w-8 mx-auto" />
              <p className="mt-3"> VisualStudio </p>
              <p className="mt-3"> Code </p>
              </div>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {eclipse} alt="" className="w-8 mx-auto" />
              <p className="mt-4"> Eclipse </p>
              </div>
        </div>
        <br></br>
        <hr
                style={{
                background: "lightblue",
                height: "3px",
                width:"800px",
                border: "none",
                }}
        />
        <br></br>
        <div className="w-full grid grid-cols-3 sm:grid-cols-8 gap-8 text-center py-2 px-10 sm:px-0">
          <p className="py-2">Data Stores</p>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {sql} alt="" className="w-8 mx-auto" />
              <p className="mt-4"> SQL </p>
              </div>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {mysql} alt="" className="w-8 mx-auto" />
              <p className="mt-3"> MySQL </p>
               </div>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {mongodb} alt="" className="w-8 mx-auto" />
              <p className="mt-4"> MongoDB </p>
              </div>
        </div>
        <br></br>
        <hr
                style={{
                background: "lightblue",
                height: "3px",
                width:"800px",
                border: "none",
                }}
        />
        <br></br>
        <div className="w-full grid grid-cols-3 sm:grid-cols-8 gap-8 text-center py-2 px-10 sm:px-0">
          <p className="py-2">FrameWorks</p>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {reactImage} alt="" className="w-8 mx-auto" />
              <p className="mt-4"> ReactJS </p>
              </div>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {nodejs} alt="" className="w-8 mx-auto" />
              <p className="mt-3"> NodeJS </p>
               </div>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {expressjs} alt="" className="w-8 mx-auto" />
              <p className="mt-4"> ExpressJS </p>
              </div>
        </div>
        <br></br>
        <hr
                style={{
                background: "lightblue",
                height: "3px",
                width:"800px",
                border: "none",
                }}
        />
        <br></br>
        <div className="w-full grid grid-cols-3 sm:grid-cols-8 gap-8 text-center py-2 px-10 sm:px-0">
          <p className="py-2">Cloud</p>
              <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${"shadow-sky-400"}`}>
              <img src = {aws} alt="" className="w-8 mx-auto" />
              <p className="mt-4"> AWS </p>
              </div>
        </div>
        <br></br>
        <hr
                style={{
                background: "lightblue",
                height: "3px",
                width:"800px",
                border: "none",
                }}
        />
        <br></br>




      </div>
    </div>
  );
};

export default Experience;