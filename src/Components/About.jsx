import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../Components/about.css'

function About() {
  return (
    <div>
      <h2 className='text-center p-5'>About Me</h2>
      <Row>
        <Col><h4 className='p-5'>A Bit About Myself</h4></Col>
        <Col><p className='p-5'>As a passionate full-stack developer, I thrive on bringing innovative ideas to life through code. With a strong foundation in both front-end and back-end technologies, I enjoy crafting seamless user experiences and robust solutions that make a real impact. Whether it's building intuitive interfaces or architecting scalable systems, I'm dedicated to delivering high-quality, efficient solutions that exceed expectations. With a constant drive to learn and grow, I'm excited to tackle new challenges and contribute to projects that push the boundaries of what's possible in the digital realm.</p></Col>
      </Row>

      <Row>
        <Col><h4 className='p-5'>My Skills</h4></Col>
        <Col>
        <div class="input m-5">
  <button class="value">
  <i class="fa-brands fa-html5 fs-5"></i>
   HTML
    
  </button>
  <button class="value fs-5">
  <i class="fa-brands fa-css3 fs-5"></i>
    CSS
  </button>
  <button class="value">
  <i class="fa-brands fa-bootstrap fs-5"></i>
    BOOTSTRAP
    
  </button>
  <button class="value">
  <i class="fa-brands fa-js fs-5"></i>
    JAVASCRIPT
  </button>
  <button class="value">
  <i class="fa-brands fa-node-js fs-5"></i>
    NODE JS
  </button>
  <button class="value">
  <i class="fa-brands fa-react fs-5"></i>
    REACT
  </button>
  <button class="value ">
  <i class="fa-solid fa-laptop  fs-5"></i>
    PHOTOSHOP
  </button>
  <button class="value">
  <i class="fa-solid fa-laptop fs-5"></i>
    ILLUSTRATOR
  </button>
  <button class="value">
  <i class="fa-regular fa-file-powerpoint fs-5"></i>
    POWERPOINT
  </button>
</div>

        </Col>
      </Row>

      <Row>
        <Col><h4 className='p-5'>Experiences</h4></Col>
        <Col><h6 className='p-5'>Turbolux Paints Pvt.ltd<br/>1.6 Years as Graphocs and Web designer<br/><br/>Gravity Innovations<br/>3 Months Traing as Webdesigner</h6></Col>
      </Row>
    </div>
  )
}

export default About
