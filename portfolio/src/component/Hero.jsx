import React, { useState, useRef } from 'react';

function Hero() {
  // State to manage visibility of the About Me section
  const [showAboutMe, setShowAboutMe] = useState(false);

  // Ref for the About Me section
  const aboutMeRef = useRef(null);

  // Function to handle the Learn More button click
  const handleLearnMoreClick = () => {
    setShowAboutMe(true);
    // Scroll to the About Me section
    aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <section className="relative bg-gray-100">
        <div className="container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Sipho Mabirimise</h1>
            <p className="text-lg text-gray-600 mb-8">
              Hi, I'm Sipho Mabirimise, a software engineer passionate about building impactful solutions.
            </p>
            
            {/* Conditionally render button */}
            {!showAboutMe && (
              <button
                onClick={handleLearnMoreClick}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Learn More
              </button>
            )}
          </div>

          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="src/images/img1.png"
              alt="Sipho Mabirimise"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Conditional Rendering of About Me Section */}
      {showAboutMe && (
        <section ref={aboutMeRef} className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 mb-4">
              Hi, I'm Sipho Mabirimise! I studied Software Engineering at ALX Bootcamp, where I learned the
              ins and outs of coding, problem-solving, and creating impactful solutions.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I am passionate about helping others learn to code, and I love teaching people how to build
              websites and apps. Whether you're just getting started or looking to level up your skills, I'm
              here to help!
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Check out my TikTok where I share coding tutorials and tips on building real-world projects. I
              believe in making tech learning fun and accessible for everyone!
            </p>
            <a
              href="https://www.tiktok.com/@techwithsipho"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-xl transition duration-300"
            >
              Visit My TikTok
            </a>
          </div>
        </section>
      )}
    </div>
  );
}

export default Hero;
