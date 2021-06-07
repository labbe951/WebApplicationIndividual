import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-first order-lg-last"><img class="img-fluid rounded mb-5 mb-lg-0" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.18169-9/13417582_1383015915058333_5333039301916515897_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=Gp0hZEDlfi4AX-K38Ym&_nc_ht=scontent-arn2-1.xx&oh=29cb3c145144964053e0e1926067f44f&oe=60DFE7DA" alt="..." /></div>
            <div className="col-lg-6">
              <h2 className="fw-bolder">Profile</h2>
              <p className="lead fw-normal text-muted mb-0">
                I am a happy and driven student who is looking for a foothold in the IT industry as a system / .NET developer. 
                I have a good ability to understand the behaviors and functions of the systems. 
                Has a great interest in technology and computer skills. 
                I look forward to using my skills to help your business move forward and 
                contribute to a wonderful work climate.
              </p>
              <p></p>
              <h2 className="fw-bolder">Education</h2>
              <p className="lead fw-normal text-muted mb-0">
                Takes responsibility, is very cooperative and leads the group forward in our group work. 
                Has so far received the highest results on all parts and tests and is investing in maintaining this. 
                I am also a class representative and attends management meetings once a quarter.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}