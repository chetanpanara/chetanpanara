import React from 'react';
import { Download, Code } from 'lucide-react';

const ProjectCard = ({
  imageUrl = "/api/placeholder/400/300",
  title = "Project Title",
  description = "A brief description of the project goes here. This provides context and highlights key features.",
  downloadLink = "#",
  sourceCodeLink = "#"
}) => {
  return (
    <div className="bg-black text-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
      {/* Project Image */}
      <div className="h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="p-3 space-y-3 flex flex-col flex-grow">
        {/* Project Title */}
        <h2 className="text-xl font-bold text-white">{title}</h2>

        {/* Project Description */}
        <p className="text-gray-300 tracking-wide text-sm flex-grow overflow-hidden">
          {description}
        </p>

   
      </div>
    </div>
  );
};

const Projects = () => {
  // Sample project data
  const projects = [
    {
      title: "Bistore Grocery Website",
      description: "Developed features including User registration, login, and account management with secure authentication, Dynamic Shopping cart functionality allowing users to add, view, and remove products,checkout process and Admin panel for managing products,categories,orders, and user accounts with statistical insights.Emphasized responsive design and robust back-end integration to provide a reliable and user-friendly online shopping experience.",
      imageUrl: "./project2.jpg",
      downloadLink: "#",
      sourceCodeLink: "#"
    },
    {
      title: "Social App For Community Donations Website",
      description: "User Login & Registration: Implemented secure user authentication for seamless access.Admin Panel: Developed an admin interface for managing users, events, and donations.Event Creation: Enabled users to create and manage fundraising events easily.Secure Donations: Integrated Razorpay for seamless and secure online donations for events.",
      imageUrl: "./project5.jpg",
      downloadLink: "#",
      sourceCodeLink: "#"
    },
    {
      title: "Flybox Curier - A trusted provider of courier services",
      description: "To gain maximum business region, customer demands good service. So, to make more profit and gain maximum business region, their administration must also have a system to tackle all these problems on time. Its administration can take immediate orders and provide a receipt which will include all the details of the products along with appropriate price to their customers. Thus, saving time and eliminating line making process.",
      imageUrl: "./project7.avif",
      downloadLink: "#",
      sourceCodeLink: "#"
    }
  ];

  return (
    <div className="w-full  mt-20 p-2 max-w-8xl mb-6 mx-auto">
      <h3 className="text-3xl md:text-4xl text-center font-bold text-white mb-2">
        All <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Projects</span>
      </h3>
      <p className="text-gray-300 text-center text-lg lg:text-sm tracking-wide line-clamp-3 mb-6">
        Let's see I have completed some projects. You can get free source code on GitHub & also download the zip file.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            downloadLink={project.downloadLink}
            sourceCodeLink={project.sourceCodeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;