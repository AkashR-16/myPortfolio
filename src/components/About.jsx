import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold">
          <sans class="bg-gradient-to-r
                from-cyan-500  to-orange-500 bg-[length:100%_5px] bg-no-repeat bg-bottom">
                    About
                    </sans>
          </p>
        </div>

        <p className="text-xl mt-10">
        I did my schooling in DAV boys Gopalapuram.I've joined VIT chennai for my under graduation.
        I started my coding journey when I was 15 years old. I have a good interest in mathematics in general.
         I'm generally a team player, be it academicss or sports.
        </p>
        

        <br />
        <p className="text-xl">
        I'm am a part of an FSAE team in the management side as I have a love for racing.
        I love playing sports of all kind. I was a part of my school cricket team. 
        I had won the table tennis singles in my school three times in a row. 
        </p>
      </div>
    </div>
  );
};

export default About;