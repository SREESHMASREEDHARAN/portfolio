import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../Components/portfolio.css'

import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div >
      <h3 className='text-center p-5'>My Projects</h3>



      <div class="wrapper">
        <Row >

          <Col>
            <div class="card">
              <img src="https://i.pinimg.com/originals/80/2b/f7/802bf707cf927fcc7e5ad22718c626a3.png" alt="" style={{height:'350px'}}/>
              <div class="info">
                <h4>Book Gallery</h4>
                <p>"Explore my website's vast collection of books, offering something for every reader's taste and interest."</p>
                <div className='d-flex justify-content-evenly'>
                   
                <Link to={'https://github.com/SREESHMASREEDHARAN/demo-bookgallery.git'}>
                <i class="fa-brands fa-github fs-5" style={{color: '#ffffff'}}></i>
                </Link>
                <Link to={'https://sreeshmasreedharan.github.io/demo-bookgallery/'}>
                <i class="fa-solid fa-link fs-5" style={{color: '#ffffff'}}></i>
                </Link>
                
      
                </div>

               
              </div>
            </div>
          </Col>
          <Col>
            <div class="card">
              <img src="https://avatars.mds.yandex.net/i?id=a8b3d9daa53cb5ff78ae81a26717844f1cf74831-10115282-images-thumbs&n=13" alt="" style={{height:'350px'}}/>
              <div class="info">
              <h4>Food Gallery</h4>
                <p>"Where you'll discover a delectable array of recipes, cooking tips, and culinary inspirations to tantalize your taste buds."</p>
                <div className='d-flex justify-content-evenly'>
                   
                <Link to={'https://github.com/SREESHMASREEDHARAN/demo-foodgallery.git'}>
                <i class="fa-brands fa-github fs-5" style={{color: '#ffffff'}}></i>
                </Link>
                <Link to={'https://sreeshmasreedharan.github.io/demo-foodgallery/'}>
                <i class="fa-solid fa-link fs-5" style={{color: '#ffffff'}}></i>
                </Link>
                
      
                </div>

              </div>
            </div>
          </Col>

          <Col>
            <div class="card">
              <img src="https://wallpapercosmos.com/cdn-cgi/image/width=1600,quality=40,format=auto/w/full/1/5/4/92206-2500x1667-desktop-hd-mark-zuckerberg-background-image.jpg" alt=""  style={{height:'350px'}}/>
              <div class="info">
              <h4>PortFolio</h4>
                <p>"Discover the latest updates, innovations, and insights from Mark Zuckerberg's digital realm through our comprehensive website dedicated to all things Mark Zuckerberg."</p>
                <div className='d-flex justify-content-evenly'>
                   
                <Link to={'https://github.com/SREESHMASREEDHARAN/portfolio-demo.git'}>
                <i class="fa-brands fa-github fs-5" style={{color: '#ffffff'}}></i>
                </Link>
                <Link to={'https://sreeshmasreedharan.github.io/portfolio-demo/'}>
                <i class="fa-solid fa-link fs-5" style={{color: '#ffffff'}}></i>
                </Link>
                
      
                </div>

              </div>
            </div>
          </Col>

          <Col>
            <div class="card">
              <img src="https://i.pinimg.com/736x/d8/e9/be/d8e9beb2c2b4209513f716a0c88858c5.jpg" alt="" style={{height:'350px'}}/>
              <div class="info">
              <h4>Furniture Site</h4>
                <p>"Transform your space with our furniture website, where style meets functionality, offering a curated selection of pieces to elevate your home."</p>
                <div className='d-flex justify-content-evenly'>
                   
                <Link to={'https://github.com/SREESHMASREEDHARAN/demo-furniture.git'}>
                <i class="fa-brands fa-github fs-5" style={{color: '#ffffff'}}></i>
                </Link>
                <Link to={'https://sreeshmasreedharan.github.io/demo-furniture/'}>
                <i class="fa-solid fa-link fs-5" style={{color: '#ffffff'}}></i>
                </Link>
                
      
                </div>

              </div>
            </div>
          </Col>

          
       
        </Row>
</div>


<br /><br />

<div className='text-center justify-content-center alighn-items-center' style={{alignItems: 'center',
  justifyContent: 'center' }}>
<Link to={'https://www.linkedin.com/in/sreeshma-t-s-8758b4288/'} style={{textDecoration:'none'}}>
<button class="contactButton text-center" style={{alignItems: 'center',
  justifyContent: 'center', marginLeft:'700px'}}>
  More Projects
  <div class="iconButton">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>
</Link>

</div>



    </div>
  )
}

export default Portfolio
