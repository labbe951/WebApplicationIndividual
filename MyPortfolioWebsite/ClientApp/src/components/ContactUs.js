import React from 'react';
import emailjs from 'emailjs-com';

export function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_e3rqp64', 'template_s9roso2', e.target, 'user_GD2YV3p6UrAwcZNfOZSZz')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }
  return (
    <div>
      <div className="container px-5">
        <form onSubmit={sendEmail}>
        
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
            <h1 className="fw-bolder">Get in touch</h1>
            <p className="lead fw-normal text-muted mb-0">I'd love to hear from you</p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <form>
                <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      name="name" />
                  <label for="inputName"></label>
                </div>
                <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      name="email" />
                  <label for="inputEmail"></label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control"
                      id="message"
                      type="text"
                      placeholder="Enter your message here..."
                      name="message"
                      style={{ height: "10rem" }}></textarea>
                    <label for="inputMessage"></label>
                    
                      <input className="btn btn-info" type="submit" value="Send" />
                      
                </div>
              </form>
            </div>
          </div>
          
          </form>
      </div>
    </div>

  )
}