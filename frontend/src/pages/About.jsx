import React from 'react';
import {
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPhp,
  SiBootstrap
} from 'react-icons/si';

const SkillIcon = ({ Icon, name, color }) => {
  return (
    <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
      <div
        className="p-2 rounded-lg shadow-lg mb-2 flex items-center justify-center"
        style={{
          backgroundColor: color,
        }}
      >
        <Icon className="text-5xl text-white" />
      </div>
      <p className="text-gray-300 text-sm font-medium text-center">
        {name}
      </p>
    </div>
  );
};

const About = () => {
  const skills = [
    {
      Icon: SiMongodb,
      name: 'MongoDB',
      color: '#4DB33D'
    },
    {
      Icon: SiReact,
      name: 'React.js',
      color: '#61DAFB'
    },
    {
      Icon: SiNodedotjs,
      name: 'Node.js',
      color: '#68A063'
    },
    {
      Icon: SiExpress,
      name: 'Express.js',
      color: '#303030'
    },
    {
      Icon: SiJavascript,
      name: 'JavaScript',
      color: '#F0DB4F'
    },
    {
      Icon: SiHtml5,
      name: 'HTML5',
      color: '#E34F26'
    },
    {
      Icon: SiCss3,
      name: 'CSS3',
      color: '#264DE4'
    },
    {
      Icon: SiTailwindcss,
      name: 'Tailwind',
      color: '#38B2AC'
    },
    {
      Icon: SiPhp,
      name: 'PHP',
      color: '#777BB3'
    },
    {
      Icon: SiBootstrap,
      name: 'Bootstrap',
      color: '#7952B3'
    }
  ];

  return (
    <div className="w-full mt-20 p-2 max-w-8xl mb-6 mx-auto">
      <h3 className="text-3xl md:text-4xl text-center font-bold text-white mb-2">
        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">Us</span>
      </h3>
      <p className="text-gray-300 text-center text-lg lg:text-sm tracking-wide line-clamp-3 mb-6">
        I'am Full stack developer to create robust, secure and scalable web applications using MERN stack.
      </p>

      {/* Company Overview */}
      <section className="mx-auto sm:px-5 p-2 grid md:grid-cols-2 gap-6 justify-evenly">
        <div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hello Everyone,<span className='font-bold text-gray-100'> I'm Chetan Panara.</span> I'm from Botad. I've done my bachelor degree in BCA from Shree Swaminarayan College of Computer Science in  <span className='font-bold text-gray-100'>Bhavnagar MKBU UNIVERSITY</span>. Currently i'm pursuing master degree in MCA from CMPICA in <span className='font-bold text-gray-100'>CHARUSAT UNIVERSITY.</span> 
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            <span className='font-bold text-gray-100'>I'm a Full Stack Developer</span>  with expertise in both front-end and back-end technologies. I work with front-end frameworks like React.js using HTML, CSS, and JavaScript to create dynamic, user-friendly interfaces.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <span className='font-bold text-gray-100'>For back-end development,</span>   I use Node.js, Express.js, and databases like MongoDB or MySQL to build scalable, efficient server-side applications. I handle everything from designing and developing the user interface to creating APIs and managing data, ensuring seamless integration and deployment of web applications.
          </p>
        </div>
        <div className="rounded-lg shadow-2xl">
          <img
            src="/cpn.png"
            alt="Innovate Technologies Team"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="container  mx-auto mt-12">
     
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {skills.map(({ Icon, name, color }, index) => (
            <SkillIcon key={index} Icon={Icon} name={name} color={color} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;