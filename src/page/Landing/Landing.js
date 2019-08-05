import React from 'react';
import {NavLink} from 'react-router-dom';
import './Landing.module.css';
import logo from './dreamix-logo.png';

export class LandingPage extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {};
	  }

	  render() {
	    return (
	  		<div class="container text-center">
	  			<NavLink className="nav-link" to="/employees"><img id="logo" alt="" class="img-fluid" src={logo}/></NavLink>
			</div>
	    );
	  }
}