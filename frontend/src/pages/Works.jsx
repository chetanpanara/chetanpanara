import React from 'react'

export default function Works() {

  const cards = [
    {
      title: "Secure,Scalable,Robust Website",
      description: "I create secure, scalable, and robust websites, ensuring reliability and performance for all users."
    },
    {
      title: "Create Responsive Website",
      description: "I create responsive websites that adapt perfectly across all devices, ensuring a seamless user experience everywhere."
    },
    {
      title: "Free Source Code Available",
      description: "Free source code is available on GitHub, allowing easy access and collaboration for developers."
    },
    {
      title: "Live Projects",
      description: "I create live projects that solve real-world problems, offering hands-on experience in development, testing, deployment, and solution implementation."
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications with secure APIs and efficient database management."
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end development from concept to deployment with scalable architecture."
    }
  ];

  return (
    <>
      <div className="w-full mt-20 p-2 max-w-8xl mb-6 mx-auto">
        <h3 className="text-3xl md:text-4xl text-center font-bold text-white mb-2">
          Here's how  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">I Can Help You</span>
        </h3>
        <p className="text-gray-300 text-center text-lg lg:text-sm tracking-wide line-clamp-3 mb-6">Building digital experience. Let's Collaborate</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {cards.map((card, index) => {
            const gradientClasses = [
              "bg-gradient-to-r from-green-400 to-teal-500"
            ];

            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-700 shadow-lg hover:bg-black/40 transition-all duration-300 hover:scale-105 h-full flex flex-col"
              >
                <h5 className="mb-3 text-xl font-bold tracking-tight">
                  <span className={`bg-clip-text text-transparent ${gradientClasses}`}>
                    {card.title}
                  </span>
                </h5>
                <p className="font-normal text-gray-300 flex-grow">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}