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
        Hi, I am Akash Ramanarayanan. Eventhough I was born USA, I have lived most of  my life in Chennai, India with my parents and Grand Parents. 
        The city of ‘Chennai’ assimilates different cultures. It is known for its diversified residence from all over the india and for its rich cultural heritage, 
        religious togetherness, brotherhood and celebration of festivals. Its an “Happening City” by itself. This gave me an ample opportunity to get the right 
        exposure to different traditions and cultures.
        </p>
        <br />
        <p className="text-xl">
        I  have done my schooling from DAV Boys Sr. Sec. School, Gopalapuram one of elite schools in India accredited to Central Board of Secondary Education(CBSE) 
        with an outstanding grades.  I’m currently doing my undergrad in BTech. Computer Science Engineering in Vellore Institute of Technology, 
        also an  esteemed University of India 
        </p>
        <br />
        <p className="text-xl">
        Besides academics I do spend time  towards  Sports and Art, which are my major source of recreations.  
        I love playing all kinds of games. I was part of school football & Carrom Team. I had also won Table Tennis singles 3 times in a row in my school. 
        I used draw at the my young age of 5 yrs. I had lot of interest towards art but as I got into higher grades,I couldn’t spend time towards art. 
        </p>
        <br />
        <p className="text-xl">
        I am very friendly person, a good team player and also quick learner.
        I also like to do  creative things besides doing old stuff again and again. Learning new things is one thing which I always enjoy.
        </p>
      </div>
    </div>
  );
};

export default About;