import React, { Component } from 'react';
import { Head } from './Head.js';
import { About } from './About.js';
import { Lists } from './Lists.js';
import SocialFollow from './SocialFollow';
import logo from '../images/globalsecurity.png';
import logo1 from '../images/lernia.png';
import Cards from './Cards';
import './Cards.css';
import { ContactUs } from './ContactUs.js';
import ParticleBackground from "./ParticleBackground";



export class Home extends Component {
  static displayName = Home.name;

  numberOfRepos = 0;

  constructor() {
    super();
    this.state = {
      numberOfRepos: 0
    }

  }

  componentDidMount() {
    fetch('https://api.github.com/users/labbe951/repos')
      .then(response => response.json())
      .then(json => {
        this.setState({
          numberOfRepos: json.length
        })
      });
    }
  

  

render()
{
    return (
      
        <div className='particles'><ParticleBackground />
        <div>

        <Head></Head>
        <About></About>
          <h3>System developer, Object-oriented system development, Handelsakademin / NBI, Gothenburg<p></p> Courses:</h3>
        <Lists></Lists>
        
        <div className="row">
          <div className="col-md-6">
              <img className="card-img-top" src={logo}/>
            <Cards infoText ="In my previous job as a bouncer I worked in bars, hotels and events. 
                              This meant that you got to meet with all kinds of different people, which has meant that
                              I have developed a great deal of social competence and understand the importance of being service-oriented."></Cards>
          </div>

          <div className="col-md-6">
            <img className="card-img-top" src={logo1}/>
            <Cards infoText="As a vehicle fitter, I mounted cars that rolled on a production line. 
                              This meant that it was very important to be careful and consistent in my work and to be stress-resistant and
                              attentive to details. In logistics, there was a lot of material handling, I also drove cars to
                              place them for shipping. This meant that I learned to handle vehicles and materials in an extremely careful way."></Cards>
          </div>
        </div>

           <section className="py-5">    
          <SocialFollow></SocialFollow>
          <ContactUs></ContactUs>

                    <div class="row gx-5 row-cols-2 row-cols-lg-4 py-5">
                        <div class="col">
                          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-chat-dots"></i></div>
                          <div class="h5 mb-2">Chat with me</div>
                          <p class="text-muted mb-0">If you don't want to send a mail just hit me up on Facebook or Instagram.</p>
                        </div>
                        <div class="col">
                          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-people"></i></div>
                          <div class="h5">General message</div>
                <p class="text-muted mb-0">"God's Final Message to His Creation:
                                            'We apologize for the inconvenience."
                                           - Douglas Adams.</p>
                        </div>
                        <div class="col">
                          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-question-circle"></i></div>
                          <div class="h5">Live github update</div>
                <p class="text-muted mb-0">Number of repos in my github right now: {this.state.numberOfRepos }</p>
                        </div>
                        <div class="col">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-telephone"></i></div>
                            <div class="h5">Call me</div>
                            <p class="text-muted mb-0">Call me during normal business hours at (+46) 729-302199.</p>
                        </div>
                    </div>
                
           </section>
          </div>
        </div >
    );
 }
}



  
      

  

