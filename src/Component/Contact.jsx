import React, { useRef, useState } from 'react';
import { BiBorderRadius } from 'react-icons/bi'
import { FaInstagram } from "react-icons/fa6";

export default function Contact() {

  

    const formRef = useRef(null); // Create a ref for the form
  const [notification, setNotification] = useState(''); // State for notification message
    

   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9320aea8-0dcb-4d77-9beb-6ff151d65bf7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

   if (res.success) {
      console.log("Success", res);
     setNotification('Email has been sent!');
     alert('Email has been sent successfully!');
      formRef.current.reset(); // Clear the form fields
    } else {
      setNotification('Failed to send email. Please try again.'); // Handle failure
    }
  };

  return (
    <>
    

    <section id="contact" className="contact section">

        
      
      <div className="container-fluid section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Let's connect & build something great.</p>
      </div>

      <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-5">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>B/H Mira park water tank,Girdharnagar,Botad-364710,Gujarat</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 94288 38882</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>chetanpanara8055@gmail.com</p>
              </div>
              </div>
              
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                    <i><FaInstagram /></i>
              <div>
                <h3>Instagram</h3>
                <p>@_chetan_0207</p>
              </div>
            </div>

          </div>

          <div className="col-lg-7">
            <form ref={formRef} onSubmit={onSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="500">
              <div className="row gy-4">

                <div className="col-md-6">
                    <input type="text" name="name"  className="form-control" placeholder="Your Name" required/>
                </div>

                <div className="col-md-6 ">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required/>
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject"/>
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" ></textarea>
                </div>

                <div className="col-md-12 text-center">
                 

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

        </div>
        
        

    </section>
    
      
      
    </>
  )
}
