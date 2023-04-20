import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
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
        Hi, I am Akash Ramanarayanan. I was born in Michigan, USA and after spending my initial years there, I moved to Chennai, India to live with my grandparents. This has given me an ample opportunity to get exposed to different traditions and cultures.
        </p>
        <br />
        <p className="text-xl">
        I completed my schooling from DAV Boys Sr. Sec. School, Gopalapuram, Chennai, which is a top ranked school in India accredited to Central Board of Secondary Education(CBSE) 
        with an outstanding grades.  I’m currently doing my undergrad in Bachelors in Computer Science Engineering in Vellore Institute of Technology, 
        also an esteemed University of India.
        </p>
        <br />
        <p className="text-xl">
        Besides academics Sports and Art are my major source of recreations.In sports, I  won table tennis single championionship 3 times in a row in my school. 
        I also repesented school in soccer and Carrom at various tournaments. My favorite hobby is drawing pencil sketeches and portraits during my free time.
        </p>
        <br />
        <p className="text-xl">
        I am very friendly person, a good team player and a quick learner. Learning new things is one thing which I always enjoy.
        </p>
      </div>
    </div>
  );
};

export default About;