import React, { Component } from 'react';

import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container px-5">
            <a class="navbar-brand" href="#MyProfile">My Profile</a>
          </div>
        </nav>
      </header>
    );
  }
}
