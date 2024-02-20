import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProfileImg from '../ASSETS/1.jpeg';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';
import '../Components/contact.css'

function ContactMe() {
  return (
    <div>

      <Row className='d-flex justify-content-evenly'>
      <h2 className='text-center mt-5'>Contact Me</h2>
        <Col  style={{padding:'100px'}}>

        <div>
        
        <h4>Get In Touch</h4>
        <h5>Email : sreeshmats65@gmail.com</h5>
        <h5>Phone : 8921026915</h5>
        <p>Feel free to drop me a message! Whether you have a project in mind, want to discuss collaboration opportunities, or just want to connect, I'd love to hear from you. You can reach me via email at sreeshmats65@gmail.com or connect with me on Whatsapp. Looking forward to chatting with you!</p>
        <h6>Thank You</h6>
      </div>
      
        </Col>
        <Col  style={{padding:'100px'}}>
        <div class="form-container">
      <form class="form">
      <div class="form-group">
          <label for="email">Name</label>
          <input type="text" />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" />
        </div>
        <div class="form-group">
          <label for="textarea">How Can i Help You?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
        </div>
        <button class="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
        </Col>
        
      </Row>
    </div>
  )
}

export default ContactMe
