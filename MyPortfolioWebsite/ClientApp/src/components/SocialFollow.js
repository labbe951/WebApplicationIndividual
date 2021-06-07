import React, { Component } from 'react';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SocialFollow.css';

export default class SocialFollow extends Component {
  render() {
    return (
      <div class="social-container">
        <h3>Social Follow</h3>
        <a href="https://www.facebook.com/pontus.p.haglund"
          target="_blank"
          className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/pittbrad69/"
          target="_blank"
          className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://github.com/labbe951"
          target="_blank"
          className="github social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>

      )
  }
}