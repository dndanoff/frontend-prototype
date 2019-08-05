import React from 'react';
import {NavLink} from 'react-router-dom';

export class EmployeeCard extends React.Component {
	  constructor(props) {
		super(props);
	    this.state = {

		};
	  }

	  render() {
	    return (
    		<div class="card">
    		<NavLink to={/employees/+this.props.selectedEmployee.id}><img class="card-img-top" src={this.props.selectedEmployee.photoUrl} alt={this.props.selectedEmployee.firstName+" "+this.props.selectedEmployee.lastName+" photo"}/></NavLink>
			  <div class="card-body">
			    <h5 class="card-title">{this.props.selectedEmployee.firstName+" "+this.props.selectedEmployee.lastName}</h5>
			    <p class="card-text">{this.props.selectedEmployee.title.name}</p>
			  </div>
			</div>
	    );
	  }
}