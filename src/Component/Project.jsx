import React from 'react'
import { Link } from 'react-router-dom'


export default function Project() {

  const BigstoreGithubLink = "https://github.com/chetanpanara/Bigstore-e-commerce-website";
  const BigstoreDownloadLink = "https://github.com/chetanpanara/Bigstore-e-commerce-website/archive/refs/heads/main.zip"
  
  const SocialappLink = "https://github.com/chetanpanara/Social-app";
  const SocialappDownloadLink = "https://github.com/chetanpanara/Social-app/archive/refs/heads/main.zip";

  const flyboxLInk = "https://github.com/chetanpanara/Flybox-Courier";
  const flyboxDownloadLink = "https://github.com/chetanpanara/Flybox-Courier/archive/refs/heads/main.zip";

  return (
    <>
    
     <section id="team" className="team section">

     
      <div className="container-fluid section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>Let's see I have completed some projects. you can get free source code in github & also download the zip file.</p>.
      </div>

      <div className="container-fluid">

            <div className="d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              
              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
         <div className="d-flex">
                        <h4>Bistore Grocery Website</h4>
                </div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
                  <div className="modal-body">
                     <div className="member-img mb-3">
                                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/project/b1.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/project/b2.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/project/b3.png" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
      <img src="./img/project/b4.png" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
      <img src="./img/project/b5.png" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
      <img src="./img/project/b6.png" class="d-block w-100" alt="..."/>
                          </div>
                           <div class="carousel-item">
      <img src="./img/project/b7.png" class="d-block w-100" alt="..."/>
                          </div>
                           <div class="carousel-item">
      <img src="./img/project/b8.png" class="d-block w-100" alt="..."/>
                          </div>
                           <div class="carousel-item">
      <img src="./img/project/b9.png" class="d-block w-100" alt="..."/>
                          </div>
                           <div class="carousel-item">
      <img src="./img/project/b10.png" class="d-block w-100" alt="..."/>
                          </div>
                           <div class="carousel-item">
      <img src="./img/project/b11.png" class="d-block w-100" alt="..."/>
                          </div>
                              <div class="carousel-item">
      <img src="./img/project/b12.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
              </div>
                      <div className="member-info">   
                        <div className="language d-flex mb-3">
                          <button type="button" className="btn rounded-pill btn-outline-primary btn-sm">PHP</button>  
                          <button type="button" className="btn rounded-pill btn-outline-primary btn-sm mx-2">HTML/CSS</button>
                               <button type="button" className="btn rounded-pill btn-outline-primary btn-sm ">Javascript</button>  
                          <button type="button" className="btn rounded-pill btn-outline-primary btn-sm mx-2">Bootstrap</button>
                             <button type="button" className="btn rounded-pill btn-outline-primary btn-sm ">MYSQL</button>
                        </div>            
                <span>Developed features including User registration, login, and account management with secure authentication, Dynamic Shopping cart functionality allowing users to add, view, and remove products,checkout process and Admin panel for managing products,categories,orders, and user accounts with statistical insights.Emphasized responsive design and robust back-end integration to provide a reliable and user-friendly online shopping experience.</span>
              </div>
      </div>
    </div>
  </div>
</div>

              <div className="team-member m-lg-4 m-md-3 m-1">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                                 <div className="member-img" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <Link to="#" className='float-end m-2'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
</svg></Link>
                <img src="./img/project2.jpg" className="img-fluid" alt=""/>
             
              </div>
                  </div>
                  <div className="col-lg-8 col-md-8">
       <div className="member-info">
                  <div className="d-flex">
                    <h4>Bistore Grocery Website</h4>
      
                    </div>
                    <p className='text-primary mt-2'><b>Feature:</b></p>
                <span>Developed features including User registration, login, and account management with secure authentication, Dynamic Shopping cart functionality allowing users to add, view, and remove products,checkout process and Admin panel for managing products,categories,orders, and user accounts with statistical insights.Emphasized responsive design and robust back-end integration to provide a reliable and user-friendly online shopping experience.</span>
              <Link to={ BigstoreGithubLink}  className='download1 mt-3' data-bs-toggle="modal" data-bs-target="#exampleModal03">Source code</Link>
                    <Link to={ BigstoreDownloadLink} className='download mt-3 mx-2' data-bs-toggle="modal" data-bs-target="#exampleModal03">Download</Link>
                
                                                       <div class="modal fade" id="exampleModal03" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-danger fs-5" id="exampleModalLabel">Opps! Sorry</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          
          sorry you can't access this project please contact chetanpanara

      </div>
    </div>
  </div>
</div>
                  
                  
                  </div>
                  </div>
                </div>
   
       
            </div>
          </div>

                <div className="d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              
              <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
         <div className="d-flex">
                        <h4>Social App For Community Donations Website</h4>
                </div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
                  <div className="modal-body">
                     <div className="member-img mb-3">
                       <div id="carouselExampleAutoplaying1" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/project/a1.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/project/a22.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/project/a3.png" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
      <img src="./img/project/a4.png" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
      <img src="./img/project/a5.png" class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
      <img src="./img/project/a6.png" class="d-block w-100" alt="..."/>
                          </div>
                           <div class="carousel-item">
      <img src="./img/project/add1.png" class="d-block w-100" alt="..."/>
                          </div>
                           <div class="carousel-item">
      <img src="./img/project/ad1.png" class="d-block w-100" alt="..."/>
                          </div>
                           <div class="carousel-item">
      <img src="./img/project/ad2.png" class="d-block w-100" alt="..."/>
                          </div>
                           <div class="carousel-item">
      <img src="./img/project/ad3.png" class="d-block w-100" alt="..."/>
                          </div>
                           <div class="carousel-item">
      <img src="./img/project/ad4.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
              </div>
                      <div className="member-info">   
                        <div className="language d-flex mb-3">
                          <button type="button" className="btn rounded-pill btn-outline-primary btn-sm">PHP</button>  
                          <button type="button" className="btn rounded-pill btn-outline-primary btn-sm mx-2">HTML/CSS</button>
                               <button type="button" className="btn rounded-pill btn-outline-primary btn-sm ">Javascript</button>  
                          <button type="button" className="btn rounded-pill btn-outline-primary btn-sm mx-2">Bootstrap</button>
                             <button type="button" className="btn rounded-pill btn-outline-primary btn-sm ">MYSQL</button>
                        </div>            
                <span>User Login & Registration: Implemented secure user authentication for seamless access.
Admin Panel: Developed an admin interface for managing users, events, and donations.
Event Creation: Enabled users to create and manage fundraising events easily.
Secure Donations: Integrated Razorpay for seamless and secure online donations for events.
</span>
              </div>
      </div>
    </div>
  </div>
</div>

              <div className="team-member m-lg-4 m-md-3 m-1">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                                 <div className="member-img" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                <Link to="#" className='float-end m-2'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
</svg></Link>
                <img src="./img/project5.jpg" className="img-fluid" alt=""/>
             
              </div>
                  </div>
                  <div className="col-lg-8 col-md-8">
       <div className="member-info">
                  <div className="d-flex">
                    <h4>Social App For Community Donations Website</h4>
  
                    </div>
                    <p className='text-primary mt-2'><b>Feature:</b></p>
                <span><b>User Login & Registration:</b> Implemented secure user authentication for seamless access.
<b>Admin Panel: </b>Developed an admin interface for managing users, events, and donations.
<b>Event Creation:</b> Enabled users to create and manage fundraising events easily.
<b>Secure Donations:</b> Integrated Razorpay for seamless and secure online donations for events.
                    </span>
                                  <Link to={SocialappLink} className='download1 mt-3' data-bs-toggle="modal" data-bs-target="#exampleModal03">Source code</Link>
                    <Link to={SocialappDownloadLink} className='download mt-3 mx-2' data-bs-toggle="modal" data-bs-target="#exampleModal03">Download</Link>
                    

                                      <div class="modal fade" id="exampleModal03" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-danger fs-5" id="exampleModalLabel">Opps! Sorry</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          
          sorry you can't access this project please contact chetanpanara

      </div>
    </div>
  </div>
</div>

                </div>
                  </div>
                </div>
   
       
            </div>
          </div>
          
              <div className="d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              
              <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
         <div className="d-flex">
                        <h4>Flybox Curier - A trusted provider of
courier services</h4>
                </div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
                  <div className="modal-body">
                     <div className="member-img mb-3">
              <div id="carouselExampleAutoplaying2" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/project/p1.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/project/p2.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/project/p3.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
              </div>
                      <div className="member-info">   
                        <div className="language d-flex mb-3">
                          <button type="button" className="btn rounded-pill btn-outline-primary btn-sm">PHP</button>  
                          <button type="button" className="btn rounded-pill btn-outline-primary btn-sm mx-2">HTML/CSS</button>
                               <button type="button" className="btn rounded-pill btn-outline-primary btn-sm ">Javascript</button>  
                          <button type="button" className="btn rounded-pill btn-outline-primary btn-sm mx-2">Bootstrap</button>
                             <button type="button" className="btn rounded-pill btn-outline-primary btn-sm ">MYSQL</button>
                        </div>            
                <span>To gain maximum business region, customer demands good service. So, to make
more profit and gain maximum business region, their administration must also have
a system to tackle all these problems on time. Its administration can take immediate
orders and provide a receipt which will include all the details of the products along
with appropriate price to their customers. Thus, saving time and eliminating line
making process.
</span>
              </div>
      </div>
    </div>
  </div>
</div>

              <div className="team-member m-lg-4 m-md-3 m-1">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                                 <div className="member-img" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                <Link to="#" className='float-end m-2'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
</svg></Link>
                <img src="./img/project8.png" className="img-fluid" alt=""/>
             
              </div>
                  </div>
                  <div className="col-lg-8 col-md-8">
       <div className="member-info">
                  <div className="d-flex">
                    <h4>Flybox Curier - A trusted provider of
courier services</h4>

                    </div>
                    <p className='text-primary mt-2'><b>Feature:</b></p>
                <span>To gain maximum business region, customer demands good service. So, to make
more profit and gain maximum business region, their administration must also have
a system to tackle all these problems on time. Its administration can take immediate
orders and provide a receipt which will include all the details of the products along
with appropriate price to their customers. Thus, saving time and eliminating line
making process.
                    </span>
                    <Link to={flyboxLInk} className='download1 mt-3' data-bs-toggle="modal" data-bs-target="#exampleModal03">Source code</Link>
                     <Link to={flyboxDownloadLink} className='download mt-3 mx-2' data-bs-toggle="modal" data-bs-target="#exampleModal03">Download</Link>
                    
                    <div class="modal fade" id="exampleModal03" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-danger fs-5" id="exampleModalLabel">Opps! Sorry</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          
          sorry you can't access this project please contact chetanpanara

      </div>
    </div>
  </div>
</div>

             
                </div>
                  </div>
                </div>
   
       
            </div>
          </div>
     
       

      </div>

    </section>
    
    </>
  )
}
