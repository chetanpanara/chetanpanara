import React from 'react'
import { BiBorderRadius } from 'react-icons/bi'
import { FaInstagram } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
    

    <section id="contact" class="contact section">

      
      <div class="container-fluid section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Let's connect & build something great.</p>
      </div>

      <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-5">
            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i class="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>B/H Mira park water tank,Girdharnagar,Botad-364710,Gujarat</p>
              </div>
            </div>

            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i class="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 94288 38882</p>
              </div>
            </div>

            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i class="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>chetanpanara8055@gmail.com</p>
              </div>
              </div>
              
              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                    <i><FaInstagram /></i>
              <div>
                <h3>Instagram</h3>
                <p>@_chetan_0207</p>
              </div>
            </div>

          </div>

          <div class="col-lg-7">
            <form  class="php-email-form" data-aos="fade-up" data-aos-delay="500">
              <div class="row gy-4">

                <div class="col-md-6">
                    <input type="text" name="name"  class="form-control" placeholder="Your Name" required=""/>
                </div>

                <div class="col-md-6 ">
                  <input type="email" class="form-control" name="email" placeholder="Your Email" required=""/>
                </div>

                <div class="col-md-12">
                  <input type="text" class="form-control" name="subject" placeholder="Subject" required=""/>
                </div>

                <div class="col-md-12">
                  <textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>

                <div class="col-md-12 text-center">
                 

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
