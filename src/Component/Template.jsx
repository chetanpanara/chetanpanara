import React from 'react'

export default function Template() {
  return (
   
     <section id="team" class="team section mt-5">

     
      <div class="container-fluid section-title" data-aos="fade-up">
        <h2>Templates</h2>
        <p>Discover an exceptional collection of Bootstrap Templates & Themes crafted with finesse. Explore our range of free and premium templates, designed to elevate your web presence.</p>.
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">

            
            <div className="row justify-content-center mb-3">
              <div className="col-lg-4 col-md-6">
                        <img src="./img/template/t3.png" alt="" className='img-fluid' />
              </div>
              <div className="col-lg-6 col-md-6">
                <h3 className='text-primary'>Bigstore –Online Grocery Website</h3>
                <p>Developed features including User registration, login, and account management with secure authentication, Dynamic Shopping cart functionality allowing users to add, view, and remove products,checkout process and Admin panel for managing products,categories,orders, and user accounts with statistical insights.Emphasized responsive design and robust back-end integration to provide a reliable and user-friendly online shopping experience.</p>
                <div className="button">
                  <a href="#" className='btn btn-outline-primary'>Live View</a>
                   <a href="#" className='btn btn-primary mx-3'>Download</a>
                </div>
                </div>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                        <img src="./img/template/t4.png" alt="" className='img-fluid' />
              </div>
              <div className="col-lg-6 col-md-6">
                <h3 className='text-primary'>Social App –For Community Donations Website </h3>
                <p>User Login & Registration: Implemented secure user authentication for seamless access.
Admin Panel: Developed an admin interface for managing users, events, and donations.
Event Creation: Enabled users to create and manage fundraising events easily.
Secure Donations: Integrated Razorpay for seamless and secure online donations for events.
</p>
                <div className="button">
                  <a href="#" className='btn btn-outline-primary'>Live View</a>
                   <a href="#" className='btn btn-primary mx-3'>Download</a>
                </div>
                </div>
                </div>

              </div>
          </div>
      </div>

    </section>

  )
}
