
import Form from "./Form"



export default function Contact (){
  return (
    <>
    <div className="contact">
    

      <h2 className="contact-h2">Contact</h2>
  <div className="contact-container">
    <div className="contact-text">
      <p>To make an enquiry, please fill out your details and send them via the contact form below. <br/> I will be in touch within 24 hours to answer your question, or book you in for your appointment.</p> 
    </div>
  
    <div className="contact-form">
      <p className="form-text">CONTACT FORM</p>
      <Form />
    </div>
    </div>
  </div>
 
</>

)}
