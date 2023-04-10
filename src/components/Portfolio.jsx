import React from "react";
import pharmacyManagement from "../assets/portfolio/pharmacyManagement.jpg";
import bookStore from "../assets/portfolio/bookStore.jpg";
import todoList from "../assets/portfolio/todoList.jpg";

/*import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";*/

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: todoList,
      link: "https://github.com/AkashR-16/SimpleMERNTaskManager.git",
    },
    {
      id: 2,
      src: bookStore,
      link: "https://github.com/AkashR-16/bookStore_UserManagement.git",
    },
    {
      id: 3,
      src: pharmacyManagement,
      link: "https://github.com/AkashR-16/bookStore_UserManagement.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
          <p className="text-4xl font-bold">
          <sans class="bg-gradient-to-r
                from-cyan-500  to-orange-500 bg-[length:100%_5px] bg-no-repeat bg-bottom">
                    Portfolio
                    </sans> 
          </p>
          <br />

          <p className="py-2">Check out some of my work right here</p>
          <br />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 px-6 sm:px-0">
     
          {portfolios.map(({ id, src ,link}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <button 
                className="w-2/3  m-4 duration-200 hover:scale-105"
                onClick={event =>  window.open(link,'_blank','noreferrer')}
                >Code
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Portfolio;