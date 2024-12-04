import React from 'react'

export default function Project() {
  return (
    <>
    
     <section id="team" class="team section mt-5">

     
      <div class="container-fluid section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>Let's see I have completed some projects. you can get free source code in github link.</p>.
      </div>

      <div class="container">

          <div class="row gy-4">

            
            

            <div class="col-lg-3 col-md-6  d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <div className="d-flex">
                        <h4>Bistore Grocery Website</h4>
                </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
                  <div class="modal-body">
                     <div class="member-img">
                <img src="./img/project2.jpg" class="img-fluid" alt=""/>
              </div>
            <div class="member-info">           
                <span>Developed features including User registration, login, and account management with secure authentication, Dynamic Shopping cart functionality allowing users to add, view, and remove products,checkout process and Admin panel for managing products,categories,orders, and user accounts with statistical insights.Emphasized responsive design and robust back-end integration to provide a reliable and user-friendly online shopping experience.</span>
              </div>
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>

            <div class="team-member">
              <div class="member-img" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="./img/project2.jpg" class="img-fluid" alt=""/>
                {/* <div class="social">
                  <a href="https://www.instagram.com/_chetan_0207"><i class="bi bi-instagram"></i></a>
                  <a href="https://github.com/chetanpanara"><i class="bi bi-github"></i></a>
                </div> */}
              </div>
              <div class="member-info">
                  <div className="d-flex">
                    <h4>Bistore Grocery Website</h4>
                     <a href="https://github.com/chetanpanara/Bigstore-e-commerce-website"><i class="bi bi-github mx-4" ></i></a>
                </div>
                <span>Developed features including User registration, login with secure authentication, Dynamic Shopping cart functionality allowing users to add, view, and remove products,checkout process and Admin panel for managing products,categories,orders, and user accounts with statistical insights.</span>
              <a href="https://github.com/chetanpanara/Bigstore-e-commerce-website/archive/refs/heads/main.zip" className='download mt-3 w-100'>Download</a>
                </div>
            </div>
            </div>
            
         <div class="col-lg-3 col-md-6  d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              
              <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
         <div className="d-flex">
                        <h4>Social App For Community Donations Website </h4>
                </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
                  <div class="modal-body">
                     <div class="member-img">
                <img src="./img/project5.jpg" class="img-fluid" alt=""/>
              </div>
            <div class="member-info">           
                <span>Features:
User Login & Registration: Implemented secure user authentication for seamless access.
Admin Panel: Developed an admin interface for managing users, events, and donations.
Event Creation: Enabled users to create and manage fundraising events easily.
Secure Donations: Integrated Razorpay for seamless and secure online donations for events.
                        </span>
                                      
              </div>
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>

            <div class="team-member" >
              <div class="member-img" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <img src="./img/project5.jpg" class="img-fluid" alt=""/>
                {/* <div class="social">
                  <a href="https://www.instagram.com/_chetan_0207"><i class="bi bi-instagram"></i></a>
                  <a href="https://github.com/chetanpanara"><i class="bi bi-github"></i></a>
                </div> */}
              </div>
              <div class="member-info">
                  <div className="d-flex">
                    <h4>Social App For Community Donations Website </h4>
                    <a href="https://github.com/chetanpanara/Social-app"><i class="bi bi-github mx-4"></i></a>
                </div>
                <span>The Social App for community donations helps connect people, raise funds, support local causes, and empower positive change through collective action.</span>
                <a href="https://github.com/chetanpanara/Social-app/archive/refs/heads/main.zip" className='download mt-3 w-100'>Download</a>
                </div>
            </div>
            </div>

        </div>

      </div>

    </section>
    
    </>
  )
}
