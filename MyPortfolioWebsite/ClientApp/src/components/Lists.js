import React, { Component } from 'react';

export class Lists extends Component {
  render() {
    return (<ul class="list-group">
      
     
      <li className="list-group-item list-group-item-success">Introduction to system development</li>
      <li className="list-group-item list-group-item-success">Introduction to object orientation</li>
      <li className="list-group-item list-group-item-success">Object-oriented programming, basic</li>
      <li className="list-group-item list-group-item-success">Object-oriented analysis</li>
      <li className="list-group-item list-group-item-success">Object-oriented design</li>
      <li className="list-group-item list-group-item-success">Databases</li>
      <li className="list-group-item list-group-item-success">Web applications</li>
      

      <li className="list-group-item list-group-item-light">Agile project management</li>
      <li className="list-group-item list-group-item-light">LIA 1 - On-the-job training</li>
      <li className="list-group-item list-group-item-light">Object-oriented programming, advanced</li>
      <li className="list-group-item list-group-item-light">LIA 2 - On-the-job training</li>
      <li className="list-group-item list-group-item-light">Master thesis</li>
      
    </ul>)
  }
}