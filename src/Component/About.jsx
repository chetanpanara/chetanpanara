import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
    
      
    <section id="about" className="about section">

       
    
      <div className="container-fluid section-title" data-aos="fade-up">
        <h2>About Us</h2>
        <p>I'am Full stack developer to create robust,secure and scalable web applications using MERN stack.</p>
      </div>

      <div className="container-fluid p-4">

        <div className="row gy-5 m-lg-4 m-md-2">

          <div className="content col-xl-5 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
            <h3>I'm Chetan Panara</h3>
              <p>
                Hello Everyone,I'm chetan panara.I'm from botad.I've done my bachelor degree in BCA from Shree Swaminarayan College of Computer Science in Bhavnagar <b>MKBU UNIVERSITY</b>.Currently i'm pursuing master degree in MCA from CMPICA in <b>CHARUSAT UNIVERSITY.</b><br /><br />
          
I am a <b>Full Stack Developer</b> with expertise in both front-end and back-end technologies. I work with front-end frameworks like React.js and Angular, using HTML, CSS, and JavaScript to create dynamic, user-friendly interfaces. <br /> <br /> For <b>back-end development</b>, I use Node.js, Express.js, and databases like MongoDB or MySQL to build scalable, efficient server-side applications. I handle everything from designing and developing the user interface to creating APIs and managing data, ensuring seamless integration and deployment of web applications.
            </p>
            
          </div>

          <div className="col-xl-7" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                
                      <div className="col-md-6 icon-box position-relative">
               <i className="bi bi-book-half"></i>
                <h4><Link to="#" className="stretched-link">Skills</Link></h4>
                <p>
<b>Programming Languages :</b>  C, C++, Advance Java, Javascript <br />
<b>Web Development :</b> HTML, CSS, ReactJs, Express, Node, AgularJS, Bootstrap, PHP, Laravel <br />
<b>Tools and Databases : </b>MongoDB, MySQL, GitHub, Figma</p>
              </div>

              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-broadcast-pin"></i>
                <h4><Link to="#" className="stretched-link">Live Projects</Link></h4>
                <p>I create live projects that solve real-world problems, offering hands-on experience in development, testing, deployment, and solution implementation.</p>
              </div>

              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-gem"></i>
                <h4><Link to="#" className="stretched-link">Create Responsive website</Link></h4>
                <p>I create responsive websites that adapt perfectly across all devices, ensuring a seamless user experience everywhere.</p>
              </div>

              <div className="col-md-6 icon-box position-relative">
                <i className="bi bi-github"></i>
                <h4><Link to="#" className="stretched-link">Free Source code Available</Link></h4>
                <p>Free source code is available on GitHub, allowing easy access and collaboration for developers.</p>
              </div>

        

            </div>
          </div>

        </div>

      </div>

    </section>
    
    
    </>
  )
}
