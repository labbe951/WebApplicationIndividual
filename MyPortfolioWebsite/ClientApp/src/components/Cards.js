import React, { Component } from 'react';
import './Cards.css';

export default class Cards extends Component {
  static displayName = Cards.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      
       <div className="card">
          <div className="card-body">
            <p className="card-text">
              {this.props.infoText}
            </p>
          </div>
       </div>
      
      );
  
  }
}