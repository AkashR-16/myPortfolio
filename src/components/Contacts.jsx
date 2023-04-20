import React from "react";
import resume from "../assets/resume.png";
import calendly from "../assets/calendly.png";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-fit bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-2">
        <p className="text-4xl font-bold">
          <sans class="bg-gradient-to-r
                from-cyan-500  to-orange-500 bg-[length:100%_5px] bg-no-repeat bg-bottom">
                    Contact
                    </sans>
        </p>
        <br />
          <p className="py-1">You can use the links below to contact or schedule meeting with me. </p> <p> Ph - USA (1-508-319-1261), India (+91-9444053379)</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 px-3 sm:px-0">
     
            <div key={1} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={resume}
                alt=""
                className="w-22 mx-auto" 
              />
              <div className="flex items-center justify-center">
              <button 
                className="w-2/3  m-3 duration-200 hover:scale-105"
                onClick={event =>  window.open("https://docs.google.com/document/d/1AO0dpGlqmheZxWj2Yewx2VtsPWeZJfgJ/",'_blank','noreferrer')}
                >Doc
                </button>
                <button 
                className="w-2/3  m-3 duration-200 hover:scale-105"
                onClick={event =>  window.open("https://drive.google.com/file/d/1WITV0h-1zAASe6wSV-rtZM1H2It6lkXv/",'_blank','noreferrer')}
                >PDF
                </button>
              </div>
            <br></br>
            </div>
            <div key={2} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={calendly}
                alt=""
                className="w-22 mx-auto" 
              />
              <div className="flex items-center justify-center">
              <button 
                className="w-2/3  m-3 duration-200 hover:scale-105"
                >Click here to schedule a meeting in my calendar. (WIP)
                </button>
              </div>
            <br></br>
            </div>
          
       
      </div>
    </div>
  </div>

  );
};

export default Contact;
